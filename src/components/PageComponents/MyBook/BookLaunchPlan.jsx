import stepDotIcon from "@/assets/images/my_book/icons/step_dot.svg";
import { BOOK_LAUNCH_STEPS } from "@/constants/myBook";

const DASHED_LINE_STYLE = {
  backgroundImage:
    "repeating-linear-gradient(to right, rgba(14, 113, 89, 0.45) 0, rgba(14, 113, 89, 0.45) 5px, transparent 8px, transparent 12px)",
};

export default function BookLaunchPlan() {
  return (
    <section
      className="w-full bg-white py-12 md:py-20"
      data-name="Book Launch Plan"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 md:px-8">
        <div className="max-w-[558px]">
          <p className="font-sans text-[13px] font-semibold uppercase tracking-[1.5px] text-[#059669]">
            What You&apos;ll Find Inside
          </p>
          <h2 className="mt-3 font-heading text-[28px] font-bold uppercase leading-tight tracking-[0.7px] text-[#0f172a] md:text-[34px]">
            A Clear 3-Step, 1-Week Launch Plan
          </h2>
        </div>

        <div className="relative mt-12 md:mt-[50px]">
          <div
            className="pointer-events-none absolute left-0 right-0 top-[62px] z-0 hidden h-px md:block"
            style={DASHED_LINE_STYLE}
            aria-hidden="true"
          />

          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {BOOK_LAUNCH_STEPS.map((step) => (
              <div key={step.title} className="relative flex flex-col gap-5">
                <p className="font-heading text-[40px] font-bold leading-[26px] text-[#0e7159]">
                  {step.number}
                </p>
                <div className="relative w-fit">
                  <div
                    className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-px w-[200vw] -translate-x-1/2 -translate-y-1/2 hidden"
                    style={DASHED_LINE_STYLE}
                    aria-hidden="true"
                  />
                  <img
                    src={stepDotIcon}
                    alt=""
                    className="relative z-10 size-[30px]"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-heading text-[26px] font-bold uppercase leading-[26px] text-[#252525]">
                    {step.title}
                  </h3>
                  <p className="font-sans text-base font-medium leading-[22px] text-[#181818]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
