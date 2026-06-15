import { PLANNED_GIVING_MYTHS } from "@/constants/principles";
import MythCard from "./MythCard";
import QuoteBlock from "./QuoteBlock";

export default function SixMyths() {
  return (
    <section
      id="six-myths"
      className="w-full scroll-mt-20 bg-white py-12 md:py-16"
      data-name="Six Myths"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-[30px] px-4 md:px-8">
        <div className="mx-auto flex max-w-[711px] flex-col items-center gap-4 text-center">
          <h2 className="heading_two text-[#0f172a]">
            Tony&apos;s Top 6 Myths of Planned Giving.
          </h2>
          <p className="font-sans text-lg leading-7 text-[#4b5563] md:text-xl">
            Planned Giving has a reputation problem. It sounds complicated,
            expensive, and reserved for big institutions. None of that is true.
            Here are the six myths that stop smaller nonprofits from starting
            and the reality behind each.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-[24px]">
          {PLANNED_GIVING_MYTHS.map((myth) => (
            <MythCard key={myth.id} {...myth} />
          ))}
        </div>

        <QuoteBlock
          quote={`"When you debunk these myths, Planned Giving becomes easy, accessible and affordable."`}
          attribution="— Tony Martignetti, Planned Giving Advisor"
        />
      </div>
    </section>
  );
}
