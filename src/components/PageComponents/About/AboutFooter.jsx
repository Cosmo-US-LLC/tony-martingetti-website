import AMAZON_BADGE from "@/assets/images/mybook/amazon-badge-cropped.png";

export default function AboutFooter() {
  return (
    <section
      id="about-join"
      className="w-full scroll-mt-20 bg-[#0a1730] px-4 py-12 md:px-[60px] md:py-[60px]"
    >
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-20">
        <div className="flex flex-col gap-3 md:max-w-[664px] md:gap-3">
          <p className="font-script text-2xl leading-[33.6px] text-[#059669] md:text-[32px] md:leading-[44.8px]">
            Stay updated
          </p>
          <h2 className="text-[28px] font-bold leading-[39.2px] text-white md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
            Ready to start your Planned Giving program?
          </h2>
          <p className="text-base leading-[22.4px] tracking-[-0.16px] text-[#c6c6c6]">
            Join the list, get your free chapter today, and be first in line
            when the book launches this September.
          </p>
        </div>

        <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
          <a
            href="https://tony.ma/Amazon"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-lg bg-[#079669] px-6 py-3 text-center text-base font-bold leading-6 text-white"
          >
            Order Now
          </a>
          <a
            href="https://tony.ma/Amazon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg bg-white/10 px-5 py-3"
          >
            <img
              src={AMAZON_BADGE}
              alt="Amazon Kindle"
              className="h-4 w-auto object-contain"
            />
            <p className="whitespace-nowrap text-sm leading-5 text-white/85">
              Order on Amazon: Live Now
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
