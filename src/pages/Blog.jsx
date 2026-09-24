import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import { getCategories, getPublishedPosts, getTags } from "@/services/blog";
import BlogCard from "@/components/PageComponents/Blog/BlogCard";

const PAGE_SIZE = 9;

function Blog() {
  usePageMeta(
    "Blog | Tony Martignetti",
    "Insights on planned giving, legacy fundraising, and nonprofit growth from Tony Martignetti.",
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || 1);
  const categorySlug = searchParams.get("category") || undefined;
  const tagSlug = searchParams.get("tag") || undefined;
  const search = searchParams.get("q") || undefined;

  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState(search || "");

  useEffect(() => {
    getCategories().then(setCategories);
    getTags().then(setTags);
  }, []);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    getPublishedPosts({ page, pageSize: PAGE_SIZE, categorySlug, tagSlug, search }).then(
      ({ posts, total }) => {
        if (cancelled) return;
        setPosts(posts);
        setTotal(total);
        setLoading(false);
      },
    );
    return () => {
      cancelled = true;
    };
  }, [page, categorySlug, tagSlug, search]);

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  function updateParams(next) {
    const params = new URLSearchParams(searchParams);
    Object.entries(next).forEach(([key, value]) => {
      if (value) params.set(key, value);
      else params.delete(key);
    });
    if (!("page" in next)) params.delete("page");
    setSearchParams(params);
  }

  return (
    <div className="mx-auto max-w-[1200px] px-4 py-10 md:px-[60px]">
      <div className="mb-8 flex flex-col gap-4 border-b border-[#e2e2e2] pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#151515] md:text-4xl">Blog</h1>
          <p className="mt-1 text-[#494949]">
            Insights on planned giving, legacy fundraising, and nonprofit growth.
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateParams({ q: searchInput || undefined });
          }}
          className="flex w-full items-center gap-2 md:w-auto"
        >
          <input
            type="search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search posts..."
            className="w-full rounded-lg border border-[#e2e2e2] px-3 py-2 text-sm focus:border-[#079669] focus:outline-none md:w-64"
          />
          <button
            type="submit"
            className="shrink-0 rounded-lg bg-[#079669] px-4 py-2 text-sm font-semibold text-white hover:bg-[#057a56]"
          >
            Search
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_260px]">
        <div>
          {loading ? (
            <p className="py-16 text-center text-[#7a7a7a]">Loading posts...</p>
          ) : posts.length === 0 ? (
            <p className="py-16 text-center text-[#7a7a7a]">No posts found.</p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className="mt-10 flex justify-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => updateParams({ page: String(p) })}
                  className={`h-9 w-9 rounded-full text-sm font-medium ${
                    p === page
                      ? "bg-[#079669] text-white"
                      : "bg-[#f2f2f2] text-[#494949] hover:bg-[#e2e2e2]"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          )}
        </div>

        <aside className="space-y-6 lg:pt-1">
          {categories.length > 0 && (
            <div>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#151515]">
                Categories
              </h2>
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => updateParams({ category: undefined })}
                  className={`rounded-md px-3 py-1.5 text-left text-sm font-medium ${
                    !categorySlug
                      ? "bg-[#dcfce7] text-[#079669]"
                      : "text-[#494949] hover:bg-[#f2f2f2]"
                  }`}
                >
                  All posts
                </button>
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => updateParams({ category: c.slug })}
                    className={`rounded-md px-3 py-1.5 text-left text-sm font-medium ${
                      categorySlug === c.slug
                        ? "bg-[#dcfce7] text-[#079669]"
                        : "text-[#494949] hover:bg-[#f2f2f2]"
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {tags.length > 0 && (
            <div>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#151515]">
                Tags
              </h2>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => updateParams({ tag: tagSlug === t.slug ? undefined : t.slug })}
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${
                      tagSlug === t.slug
                        ? "border-[#079669] text-[#079669]"
                        : "border-[#e2e2e2] text-[#7a7a7a] hover:border-[#079669] hover:text-[#079669]"
                    }`}
                  >
                    #{t.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

export default Blog;
