import tonyAuthorImage from "@/assets/images/my_book/author/tony_author.webp";
import { AUTHOR_BIO_PARAGRAPHS, AUTHOR_TAGS } from "@/constants/landingPage";

export default function AboutAuthorSection() {
  return (
    <section className="w-full bg-white py-14 md:py-[60px]" data-name="About The Author">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 px-4 md:px-8 lg:flex-row lg:items-center lg:gap-20">
        <div className="flex w-full flex-1 flex-col gap-5">
          <span className="font-script text-[20px] leading-[28px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
            About The Author
          </span>
          <h2 className="text-[24px] font-bold leading-[28.8px] tracking-[-0.48px] text-[#00150B] md:text-[40px] md:leading-tight md:tracking-[-0.8px]">
            Twenty-Nine Years In The Room With Donors
          </h2>
          <div className="flex flex-col gap-4">
            {AUTHOR_BIO_PARAGRAPHS.map((paragraph) => (
              <p
                key={paragraph.slice(0, 20)}
                className="text-base leading-6 text-[#494949]"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap gap-2.5">
            {AUTHOR_TAGS.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-[#FFF7FD] px-3.5 py-1.5 text-sm font-medium text-[#951B81]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full flex-1 shrink-0 overflow-hidden rounded-xl md:rounded-2xl">
          <img
            src={tonyAuthorImage}
            alt="Tony Martignetti"
            className="h-auto w-full object-cover aspect-[1514/1581]"
          />
        </div>
      </div>
    </section>
  );
}
