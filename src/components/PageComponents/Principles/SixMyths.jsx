import stepTakeawayCheckIcon from "@/assets/images/principles/icons/step_takeaway_check.svg";
import { MYTH_TAKEAWAYS, PLANNED_GIVING_MYTHS } from "@/constants/principles";
import { scrollToPrinciplesJoin } from "@/utils/scrollToPrinciplesJoin";
import MythCard from "./MythCard";
import QuoteBlock from "./QuoteBlock";

export default function SixMyths() {
  return (
    <section
      id="six-myths"
      className="w-full scroll-mt-20 bg-white py-12 md:py-[60px]"
      data-name="Six Myths"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[30px] px-4 md:px-8 lg:px-[50px]">
        <div className="mx-auto flex max-w-[865px] flex-col items-center gap-4 text-center">
          <h2 className="heading_two text-[#0f172a]">
            Tony&apos;s Top 6 Myths of Planned Giving Debunked
          </h2>
          <p className="font-sans text-lg leading-7 text-[#4b5563] md:text-xl md:leading-7">
            The hateful, spiteful, insidious myths that keep fundraisers away
            from Planned Giving, cut off at the knees. These myths stifle your
            sustainability and hinder your endowment growth, because they keep
            you away from successful, scalable Planned Giving fundraising. They
            keep you from doing your critical work in the community for the
            long term.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-[24px]">
          {PLANNED_GIVING_MYTHS.map((myth) => (
            <MythCard key={myth.id} {...myth} />
          ))}
        </div>

        <div className="w-full rounded-[30px] border border-[#d8d8d8] px-4 md:px-6 py-6 md:py-[30px]">
          <h3 className="font-heading text-[28px] font-bold uppercase leading-8 text-[#040a16] md:text-[35px]">
            Step takeaways
          </h3>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {MYTH_TAKEAWAYS.map((takeaway) => (
              <div key={takeaway} className="flex gap-3">
                <img
                  src={stepTakeawayCheckIcon}
                  alt=""
                  className="mt-0.5 size-5 shrink-0"
                  aria-hidden="true"
                />
                <p className="font-sans text-lg leading-[26px] text-[#020120]">
                  {takeaway}
                </p>
              </div>
            ))}
          </div>
        </div>

        <QuoteBlock
          quote={`"It's not a conversation about death. It's a conversation about life. The life and longevity of your nonprofit."`}
          attribution="— Tony Martignetti"
        />

        <button
          type="button"
          onClick={() => scrollToPrinciplesJoin()}
          className="primary_btn_two mx-auto w-fit cursor-pointer px-8 py-[18px] text-base shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
        >
          Join Waitlist
        </button>
      </div>
    </section>
  );
}
