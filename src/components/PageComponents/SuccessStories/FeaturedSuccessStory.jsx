import quoteIcon from "@/assets/images/success_stories/icons/quote.svg";
import { FEATURED_SUCCESS_STORY } from "@/constants/successStories";
import { CategoryTag, StarRating } from "./TestimonialCard";

export default function FeaturedSuccessStory() {
  return (
    <section
      className="w-full bg-[#f8fafc] py-12 md:py-[60px]"
      data-name="Featured Success Story"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 px-4 md:px-8 lg:flex-row lg:gap-20">
        <div className="flex w-full flex-1 flex-col gap-4">
          <p className="font-sans text-base font-semibold leading-[22px] text-[#059669]">
            Proven Milestones
          </p>
          <h2 className="heading_two text-[#0f172a]">Featured Success Stories</h2>
          <p className="font-sans text-lg leading-7 text-[#4b5563] md:text-xl">
            Deeply impactful commitments secured through strategic Planned
            Giving.
          </p>
        </div>

        <article className="relative w-full flex-1 rounded-xl border-[1.5px] border-[#f5f5f5] bg-white px-6 py-7">
          <img
            src={quoteIcon}
            alt=""
            className="absolute right-6 top-6 h-10 w-10 opacity-80"
            aria-hidden="true"
          />
          <div className="flex flex-col gap-[30px]">
            <StarRating variant="featured" size="sm" />
            <div className="font-sans text-lg leading-8 text-[#4b5563] md:text-xl md:leading-8">
              {FEATURED_SUCCESS_STORY.quote.map((paragraph) => (
                <p key={paragraph} className="mb-0 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="h-px w-full bg-[#252525]/15" />
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-sans text-lg font-bold uppercase leading-6 tracking-[-1px] text-[#0f172a]">
                  {FEATURED_SUCCESS_STORY.name}
                </p>
                <p className="font-sans text-sm leading-[18px] text-[#707377]">
                  {FEATURED_SUCCESS_STORY.role}
                </p>
              </div>
              <CategoryTag
                label={FEATURED_SUCCESS_STORY.category}
                variant="green"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
