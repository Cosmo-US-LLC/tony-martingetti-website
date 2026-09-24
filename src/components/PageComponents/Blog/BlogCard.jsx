import { Link } from "react-router-dom";

function formatDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogCard({ post }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[#e2e2e2] bg-white transition-shadow hover:shadow-lg"
    >
      <div className="aspect-[16/9] w-full overflow-hidden bg-[#f2f2f2]">
        {post.featured_image_url && (
          <img
            src={post.featured_image_url}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2.5 p-5">
        {post.category?.name && (
          <span className="w-fit rounded-full bg-[#dcfce7] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#079669]">
            {post.category.name}
          </span>
        )}
        <h3 className="text-xl font-semibold leading-tight text-[#151515] group-hover:text-[#079669]">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="line-clamp-3 text-sm leading-relaxed text-[#494949]">
            {post.excerpt}
          </p>
        )}
        <div className="mt-auto flex items-center gap-2 pt-2 text-xs text-[#7a7a7a]">
          <span>{formatDate(post.published_at)}</span>
          {post.reading_time_minutes && (
            <>
              <span>&middot;</span>
              <span>{post.reading_time_minutes} min read</span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
