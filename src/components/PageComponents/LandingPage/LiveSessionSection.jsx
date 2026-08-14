import { LIVE_SESSION_CARDS } from "@/constants/landingPage";

export default function LiveSessionSection() {
  return (
    <section className="w-full bg-[#FAFAFA] py-14 md:py-[60px]" data-name="A Live Working Session">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-4 md:px-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="font-script text-[20px] leading-[28px] text-[#059669] md:text-[32px] md:leading-[44.8px]">
            Waitlist Bonus &middot; First 50 Only
          </span>
          <h2 className="text-[24px] font-bold leading-[28.8px] tracking-[-0.48px] text-[#00150B] md:text-[40px] md:leading-tight md:tracking-[-0.8px]">
            A Live Working Session With Tony
          </h2>
          <p className="max-w-[620px] text-base leading-6 text-[#494949]">
            Not a webinar and not a sales pitch. The first 50 people on the
            waitlist get a seat on a virtual session where Tony works through
            the real bottlenecks in your programs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {LIVE_SESSION_CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-2.5 rounded-2xl bg-white p-6"
            >
              <span className="inline-flex w-fit items-center rounded-lg bg-[#FDE8F8] px-3 py-1 text-xs font-bold text-[#951B81]">
                {card.tag}
              </span>
              <h3 className="text-[20px] font-semibold leading-6 text-black md:text-[28px] md:font-bold md:leading-[39.2px]">
                {card.title}
              </h3>
              <p className="text-base leading-[22.4px] tracking-[-0.16px] text-black md:font-manrope md:text-lg md:leading-6 md:tracking-normal">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
