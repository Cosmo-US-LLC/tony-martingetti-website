import { supabase } from "@/lib/supabaseClient";

const POST_LIST_FIELDS =
  "id,title,slug,excerpt,featured_image_url,author_name,author_image_url,published_at,is_featured,reading_time_minutes,category:blog_categories(id,name,slug)";

const POST_DETAIL_FIELDS = `
  *,
  category:blog_categories(*),
  tags:blog_post_tags(tag:blog_tags(*))
`;

function normalizePost(row) {
  if (!row) return row;
  return { ...row, tags: (row.tags ?? []).map((t) => t.tag).filter(Boolean) };
}

/**
 * @param {{page?: number, pageSize?: number, categorySlug?: string, tagSlug?: string, search?: string}} options
 */
export async function getPublishedPosts({
  page = 1,
  pageSize = 9,
  categorySlug,
  tagSlug,
  search,
} = {}) {
  if (!supabase) return { posts: [], total: 0 };

  let query = supabase
    .from("blog_posts")
    .select(POST_LIST_FIELDS, { count: "exact" })
    .eq("status", "published")
    .lte("published_at", new Date().toISOString())
    .order("published_at", { ascending: false });

  if (categorySlug) {
    const { data: category } = await supabase
      .from("blog_categories")
      .select("id")
      .eq("slug", categorySlug)
      .maybeSingle();
    if (!category) return { posts: [], total: 0 };
    query = query.eq("category_id", category.id);
  }
  if (search) {
    query = query.textSearch("search_vector", search, { type: "websearch" });
  }

  if (tagSlug) {
    const { data: tag } = await supabase
      .from("blog_tags")
      .select("id")
      .eq("slug", tagSlug)
      .maybeSingle();
    if (!tag) return { posts: [], total: 0 };
    const { data: links } = await supabase
      .from("blog_post_tags")
      .select("post_id")
      .eq("tag_id", tag.id);
    const ids = (links ?? []).map((l) => l.post_id);
    if (ids.length === 0) return { posts: [], total: 0 };
    query = query.in("id", ids);
  }

  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;
  const { data, error, count } = await query.range(from, to);

  if (error) {
    console.error("getPublishedPosts failed", error);
    return { posts: [], total: 0 };
  }

  return { posts: data ?? [], total: count ?? 0 };
}

export async function getFeaturedPosts(limit = 5) {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("blog_posts")
    .select(POST_LIST_FIELDS)
    .eq("status", "published")
    .eq("is_featured", true)
    .lte("published_at", new Date().toISOString())
    .order("published_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("getFeaturedPosts failed", error);
    return [];
  }
  return data ?? [];
}

export async function getHomepagePosts(limit = 3) {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("blog_posts")
    .select(POST_LIST_FIELDS)
    .eq("status", "published")
    .eq("show_on_homepage", true)
    .lte("published_at", new Date().toISOString())
    .order("published_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("getHomepagePosts failed", error);
    return [];
  }
  return data ?? [];
}

export async function getPostBySlug(slug) {
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("blog_posts")
    .select(POST_DETAIL_FIELDS)
    .eq("slug", slug)
    .eq("status", "published")
    .lte("published_at", new Date().toISOString())
    .maybeSingle();

  if (error) {
    console.error("getPostBySlug failed", error);
    return null;
  }
  return normalizePost(data);
}

export async function getRelatedPosts(post, limit = 4) {
  if (!supabase || !post) return [];

  const tagIds = (post.tags ?? []).map((t) => t.id);
  let candidateIds = new Set();

  if (post.category_id) {
    const { data } = await supabase
      .from("blog_posts")
      .select("id")
      .eq("status", "published")
      .eq("category_id", post.category_id)
      .neq("id", post.id)
      .limit(limit);
    (data ?? []).forEach((p) => candidateIds.add(p.id));
  }

  if (candidateIds.size < limit && tagIds.length) {
    const { data: links } = await supabase
      .from("blog_post_tags")
      .select("post_id")
      .in("tag_id", tagIds);
    (links ?? []).forEach((l) => {
      if (l.post_id !== post.id) candidateIds.add(l.post_id);
    });
  }

  const ids = Array.from(candidateIds).slice(0, limit);
  if (ids.length === 0) return [];

  const { data, error } = await supabase
    .from("blog_posts")
    .select(POST_LIST_FIELDS)
    .in("id", ids);

  if (error) {
    console.error("getRelatedPosts failed", error);
    return [];
  }
  return data ?? [];
}

export async function getCategories() {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("blog_categories")
    .select("*, posts:blog_posts(count)")
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("getCategories failed", error);
    return [];
  }

  return (data ?? [])
    .map((c) => ({ ...c, postCount: c.posts?.[0]?.count ?? 0 }))
    .filter((c) => c.postCount > 0);
}

export async function getTags(limit = 12) {
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("blog_tags")
    .select("*, posts:blog_post_tags(count)");

  if (error) {
    console.error("getTags failed", error);
    return [];
  }

  return (data ?? [])
    .map((t) => ({ ...t, postCount: t.posts?.[0]?.count ?? 0 }))
    .filter((t) => t.postCount > 0)
    .sort((a, b) => b.postCount - a.postCount)
    .slice(0, limit);
}
