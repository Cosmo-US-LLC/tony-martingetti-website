import { useCallback, useEffect, useState } from "react";
import bequestReasonsImage from "@/assets/images/my_book/bequest_reasons/bequest_reasons.webp";
import { BOOK_BEQUEST_REASONS } from "@/constants/myBook";

const STEP_DURATION_MS = 5000;
const REASON_COUNT = BOOK_BEQUEST_REASONS.length;

function ReasonProgressBar({ stepIndex, onComplete }) {
  const handleAnimationEnd = useCallback(
    (event) => {
      if (event.animationName === "bequest-reason-progress") {
        onComplete();
      }
    },
    [onComplete],
  );

  return (
    <div className="relative h-0.5 w-full overflow-hidden rounded-[10px] bg-[#e3e3e3]">
      <div
        key={stepIndex}
        className="bequest-reason-progress-bar absolute inset-y-0 left-0 rounded-[10px] bg-[#059669]"
        onAnimationEnd={handleAnimationEnd}
      />
    </div>
  );
}

function ReasonDivider() {
  return (
    <div className="h-0.5 w-full rounded-[10px] bg-[#e3e3e3]" aria-hidden="true" />
  );
}

export default function BookBequestReasons() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNextStep = useCallback(() => {
    setActiveIndex((current) => (current + 1) % REASON_COUNT);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mediaQuery.matches) return;

    const timer = window.setTimeout(goToNextStep, STEP_DURATION_MS);
    return () => window.clearTimeout(timer);
  }, [activeIndex, goToNextStep]);

  return (
    <section
      className="w-full bg-white py-12 md:py-[60px]"
      data-name="Bequest Reasons"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 px-4 md:gap-12 md:px-8">
        <div className="flex max-w-[800px] flex-col items-center gap-4 text-center">
          <h2 className="font-heading text-[28px] font-bold uppercase leading-10 tracking-[0.7px] text-[#0f172a] md:text-[34px]">
            <span className="block">18 Reasons Bequests Are Where You Start.</span>
            <span className="block">Not Where You Settle</span>
          </h2>
          <p className="font-sans text-lg font-normal leading-7 text-[#4b5563]">
            You don&apos;t need a complicated gift menu to launch Planned Giving.
            You need one gift type, and eighteen rock-solid reasons why it&apos;s
            the right one. Here are 6 to get you started.
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-20 xl:gap-[80px]">
          <div className="h-[320px] w-full max-w-[567px] shrink-0 overflow-hidden rounded-2xl md:h-[580px]">
            <img
              src={bequestReasonsImage}
              alt="Professional reviewing planned giving materials on a laptop"
              className="size-full object-cover"
            />
          </div>

          <div className="flex w-full min-w-0 flex-1 flex-col gap-6">
            {BOOK_BEQUEST_REASONS.map((reason, index) => {
              const isActive = activeIndex === index;

              return (
                <div key={reason.id} className="flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="flex w-full cursor-pointer flex-col items-start gap-3 text-left"
                    aria-expanded={isActive}
                  >
                    <span
                      className={`font-heading text-[22px] font-bold uppercase leading-8 transition-colors duration-300 md:text-2xl ${
                        isActive ? "text-[#059669]" : "text-[#040a16]"
                      }`}
                    >
                      {reason.title}
                    </span>
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="font-sans text-lg font-normal leading-[26px] text-[#020120]">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </button>
                  {isActive ? (
                    <ReasonProgressBar
                      stepIndex={activeIndex}
                      onComplete={goToNextStep}
                    />
                  ) : (
                    <ReasonDivider />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
