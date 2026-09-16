import AMAZON_BADGE from "@/assets/images/mybook/amazon-badge-cropped.png";

export default function BookFooter() {
  return (
    <section className="w-full bg-[#0a1730] px-4 py-12 md:px-[60px] md:py-[60px]">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-20">
        <div className="flex flex-col gap-3 md:max-w-[664px] md:gap-3">
          <p className="font-script text-2xl leading-[33.6px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
            Begin today
          </p>
          <h2 className="text-[28px] font-bold leading-[39.2px] text-white md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
            Your mission deserves a longer runway.
          </h2>
          <p className="text-base leading-[22.4px] tracking-[-0.16px] text-[#aeaeae]">
            Get the opening chapter free today, and we'll tell you the moment
            the book and your free webinar series are available.
          </p>
        </div>

        <div className="flex w-full flex-col gap-2.5 sm:w-fit">
          <a
            href="https://tony.ma/Amazon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 transition-colors hover:bg-white/20"
          >
            <img
              src={AMAZON_BADGE}
              alt="Amazon Kindle"
              className="h-5 w-[81px] shrink-0 object-contain"
            />
            <p className="whitespace-nowrap text-sm leading-5 text-white/85">
              Available Now on Amazon: Live Now
            </p>
          </a>
          <a
            href="https://tony.ma/BN"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center gap-2 rounded-lg bg-white/10 px-4 py-2.5 transition-colors hover:bg-white/20"
          >
            <p className="shrink-0 whitespace-nowrap text-sm font-bold tracking-wide text-white/85">
              BARNES <span className="text-[#c9a86a]">&</span> NOBLE
            </p>
            <p className="whitespace-nowrap text-sm leading-5 text-white/85">
              Available Now on Barnes & Noble
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
