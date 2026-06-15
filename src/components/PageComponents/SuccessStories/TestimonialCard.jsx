import starIcon from "@/assets/images/success_stories/icons/star.svg";
import starFeaturedIcon from "@/assets/images/success_stories/icons/star_featured.svg";

export function StarRating({ size = "md", variant = "default" }) {
  const icon = variant === "featured" ? starFeaturedIcon : starIcon;
  const sizeClass = size === "sm" ? "size-6" : "size-7";

  return (
    <div className="flex items-center" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <img key={index} src={icon} alt="" className={sizeClass} />
      ))}
    </div>
  );
}

export function CategoryTag({ label, variant = "neutral" }) {
  const styles =
    variant === "green"
      ? "bg-[rgba(5,150,105,0.1)] text-[#059669]"
      : "bg-[rgba(222,222,222,0.6)] text-[#252525]";

  return (
    <span
      className={`inline-flex shrink-0 items-center whitespace-nowrap rounded-full px-4 py-2 font-sans text-xs uppercase leading-4 ${styles}`}
    >
      {label}
    </span>
  );
}

export function TestimonialCard({ quote, name, role, category }) {
  return (
    <article className="flex flex-col gap-[18px] rounded-xl border border-[#dedede] bg-white p-6">
      <div className="flex flex-col gap-[18px]">
        <StarRating />
        <p className="paragraph_one text-[#4b5563]">&ldquo;{quote}&rdquo;</p>
      </div>
      <div className="h-px w-full bg-[#252525]/10" />
      <div className="flex flex-col gap-[18px]">
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-1">
            <span className="h-0.5 w-4 bg-[#0f172a]" aria-hidden="true" />
            <p className="font-sans text-sm font-bold uppercase leading-6 text-[#0f172a]">
              {name}
            </p>
          </div>
          <p className="font-sans text-[13px] leading-[18px] text-[#707377]">
            {role}
          </p>
        </div>
        <CategoryTag label={category} />
      </div>
    </article>
  );
}
