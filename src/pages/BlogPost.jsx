import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import { getPostBySlug, getRelatedPosts } from "@/services/blog";
import BlogCard from "@/components/PageComponents/Blog/BlogCard";

function slugifyHeading(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

// Body is raw HTML from the CMS's rich text editor. Walk it once to tag
// every h2 with a stable, unique id, so the table of contents (built from
// the same pass) can link straight to each section.
function buildContentAndToc(bodyHtml) {
  if (!bodyHtml) return { html: "", toc: [] };
  const doc = new DOMParser().parseFromString(bodyHtml, "text/html");
  const seen = new Map();
  const toc = [...doc.querySelectorAll("h2")].map((heading) => {
    const text = heading.textContent.trim();
    const base = slugifyHeading(text) || "section";
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    const id = count === 0 ? base : `${base}-${count}`;
    heading.id = id;
    return { id, text };
  });
  return { html: doc.body.innerHTML, toc };
}

function formatDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const SHARE_ICONS = {
  x: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.9 2H22l-7.6 8.7L23 22h-6.6l-5.2-6.8L5.1 22H2l8.2-9.4L1.5 2h6.7l4.7 6.2L18.9 2Zm-2.3 18h1.8L7.5 4h-1.9l11 16Z" />
    </svg>
  ),
  facebook: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-7.2h2.4l.4-2.8h-2.8V9.2c0-.8.2-1.4 1.4-1.4h1.5V5.3c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V11H8.2v2.8h2.3V21h3Z" />
    </svg>
  ),
  linkedin: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.94 8.5H3.56V21h3.38V8.5ZM5.25 3a1.94 1.94 0 1 0 0 3.87 1.94 1.94 0 0 0 0-3.87ZM20.44 21h-3.37v-6.17c0-1.47-.03-3.36-2.05-3.36-2.05 0-2.37 1.6-2.37 3.25V21H9.29V8.5h3.24v1.71h.05c.45-.86 1.56-1.77 3.22-1.77 3.44 0 4.64 2.27 4.64 5.22V21Z" />
    </svg>
  ),
};

function ShareLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e2e2e2] text-[#7a7a7a] transition-colors hover:border-[#079669] hover:text-[#079669]"
    >
      {children}
    </a>
  );
}

function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [activeHeading, setActiveHeading] = useState(null);
  const contentRef = useRef(null);

  const { html: contentHtml, toc } = useMemo(
    () => buildContentAndToc(post?.body),
    [post?.body],
  );

  usePageMeta(
    post ? `${post.meta_title || post.title} | Tony Martignetti` : "Blog | Tony Martignetti",
    post?.meta_description || post?.excerpt || undefined,
  );

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setNotFound(false);
    getPostBySlug(slug).then((data) => {
      if (cancelled) return;
      if (!data) {
        setNotFound(true);
        setLoading(false);
        return;
      }
      setPost(data);
      setLoading(false);
      getRelatedPosts(data).then((r) => {
        if (!cancelled) setRelated(r);
      });
    });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  useEffect(() => {
    if (toc.length === 0 || !contentRef.current) return;
    const headings = toc
      .map(({ id }) => contentRef.current.querySelector(`#${id}`))
      .filter(Boolean);
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveHeading(visible[0].target.id);
        }
      },
      { rootMargin: "-100px 0px -70% 0px" },
    );
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [toc]);

  if (loading) {
    return <p className="py-20 text-center text-[#7a7a7a]">Loading...</p>;
  }

  if (notFound || !post) {
    return (
      <div className="mx-auto max-w-[720px] px-4 py-24 text-center">
        <h1 className="text-3xl font-bold text-[#151515]">Post not found</h1>
        <Link to="/blog" className="mt-4 inline-block text-[#079669] hover:underline">
          Back to blog
        </Link>
      </div>
    );
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const hasToc = toc.length > 1;

  return (
    <article className="mx-auto max-w-[1100px] px-4 py-10 md:px-[60px]">
      <nav className="mb-4 flex items-center gap-1.5 text-sm text-[#7a7a7a]">
        <Link to="/blog" className="hover:text-[#079669]">
          Blog
        </Link>
        {post.category?.name && (
          <>
            <span>/</span>
            <Link
              to={`/blog?category=${post.category.slug}`}
              className="hover:text-[#079669]"
            >
              {post.category.name}
            </Link>
          </>
        )}
      </nav>

      <div className="mb-8">
        <h1 className="text-3xl font-bold leading-tight text-[#151515] md:text-4xl">
          {post.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-[#7a7a7a]">
            {post.author_image_url && (
              <img
                src={post.author_image_url}
                alt={post.author_name}
                className="h-8 w-8 rounded-full object-cover"
              />
            )}
            <span className="font-medium text-[#151515]">{post.author_name}</span>
            <span>&middot;</span>
            <span>{formatDate(post.published_at)}</span>
            {post.reading_time_minutes && (
              <>
                <span>&middot;</span>
                <span>{post.reading_time_minutes} min read</span>
              </>
            )}
          </div>
          <div className="flex items-center gap-2">
            <ShareLink
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
              label="Share on X"
            >
              {SHARE_ICONS.x}
            </ShareLink>
            <ShareLink
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              label="Share on Facebook"
            >
              {SHARE_ICONS.facebook}
            </ShareLink>
            <ShareLink
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              label="Share on LinkedIn"
            >
              {SHARE_ICONS.linkedin}
            </ShareLink>
          </div>
        </div>
      </div>

      <div
        className={
          hasToc
            ? "grid grid-cols-1 gap-10 lg:grid-cols-[1fr_260px]"
            : "grid grid-cols-1"
        }
      >
        <div className={hasToc ? "min-w-0" : "mx-auto w-full max-w-[760px]"}>
          {post.featured_image_url && (
            <img
              src={post.featured_image_url}
              alt=""
              className="mb-10 aspect-[16/9] w-full rounded-2xl object-cover"
            />
          )}

          <div
            ref={contentRef}
            className="prose prose-slate max-w-none prose-headings:text-[#151515] prose-a:text-[#079669]"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {post.tags?.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-2 border-t border-[#e2e2e2] pt-6">
              {post.tags.map((t) => (
                <Link
                  key={t.id}
                  to={`/blog?tag=${t.slug}`}
                  className="rounded-full border border-[#e2e2e2] px-3 py-1 text-xs font-medium text-[#7a7a7a] hover:border-[#079669] hover:text-[#079669]"
                >
                  #{t.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {hasToc && (
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-xl border border-[#e2e2e2] bg-white p-5 shadow-sm">
              <h2 className="mb-3 text-sm font-semibold text-[#151515]">Table of Contents</h2>
              <ul className="space-y-2.5 border-l border-[#e2e2e2]">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`block border-l-2 py-0.5 pl-3 text-sm leading-snug -ml-px ${
                        activeHeading === item.id
                          ? "border-[#079669] font-medium text-[#079669]"
                          : "border-transparent text-[#7a7a7a] hover:text-[#079669]"
                      }`}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        )}
      </div>

      {related.length > 0 && (
        <div className="mt-16 border-t border-[#e2e2e2] pt-12">
          <h2 className="mb-6 text-2xl font-semibold text-[#151515]">Related posts</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {related.map((p) => (
              <BlogCard key={p.id} post={p} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

export default BlogPost;
