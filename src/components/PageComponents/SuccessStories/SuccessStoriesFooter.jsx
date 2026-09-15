import AMAZON_BADGE from "@/assets/images/mybook/amazon-badge-cropped.png";

export default function SuccessStoriesFooter() {
  return (
    <section
      id="success-stories-join"
      className="w-full scroll-mt-20 bg-[#0a1730] px-4 py-12 md:px-[60px] md:py-[60px]"
    >
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-20">
        <div className="flex flex-col gap-3 md:max-w-[664px] md:gap-3">
          <p className="font-script text-2xl leading-[33.6px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
            Begin today
          </p>
          <h2 className="text-[28px] font-bold leading-[39.2px] text-white md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
            Ready to write your own success story?
          </h2>
          <p className="text-base leading-6 text-[#c6c6c6]">
            Join 500+ nonprofits getting the opening chapter of Tony's new
            book, free.
          </p>
        </div>

        <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
          <button
            type="button"
            className="cursor-pointer rounded-lg bg-[#079669] px-6 py-3 text-base font-bold leading-6 text-white"
          >
            Order Now
          </button>
          <div className="flex items-center gap-3 rounded-lg bg-white/10 px-5 py-3">
            <img
              src={AMAZON_BADGE}
              alt="Amazon Kindle"
              className="h-4 w-auto object-contain"
            />
            <p className="whitespace-nowrap text-sm leading-5 text-white/85">
              Order on Amazon: Live Now
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
