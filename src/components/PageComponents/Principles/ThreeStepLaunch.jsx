import { useEffect, useRef, useState } from "react";
import { LAUNCH_STEPS } from "@/constants/principles";
import QuoteBlock from "./QuoteBlock";

const STEP_COUNT = LAUNCH_STEPS.length;
const NAVBAR_OFFSET = 80;

function getActiveStep(progress) {
  if (progress >= 2 / 3) return 2;
  if (progress >= 1 / 3) return 1;
  return 0;
}

export default function ThreeStepLaunch() {
  const trackRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const mobileQuery = window.matchMedia("(max-width: 1023px)");
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const shouldDisableAnimation = () =>
      mobileQuery.matches || reducedMotionQuery.matches;

    const updateStep = () => {
      if (shouldDisableAnimation()) {
        setActiveStep(STEP_COUNT - 1);
        setIsComplete(true);
        return;
      }

      const rect = track.getBoundingClientRect();
      const trackHeight = track.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollableDistance = trackHeight - viewportHeight;

      if (scrollableDistance <= 0) {
        setActiveStep(STEP_COUNT - 1);
        setIsComplete(true);
        return;
      }

      const scrolled = Math.min(
        scrollableDistance,
        Math.max(0, NAVBAR_OFFSET - rect.top),
      );
      const progress = scrolled / scrollableDistance;

      if (progress >= 0.98) {
        setIsComplete(true);
        setActiveStep(STEP_COUNT - 1);
        return;
      }

      setIsComplete(false);
      setActiveStep(getActiveStep(progress));
    };

    updateStep();
    window.addEventListener("scroll", updateStep, { passive: true });
    window.addEventListener("resize", updateStep);
    mobileQuery.addEventListener("change", updateStep);
    reducedMotionQuery.addEventListener("change", updateStep);

    return () => {
      window.removeEventListener("scroll", updateStep);
      window.removeEventListener("resize", updateStep);
      mobileQuery.removeEventListener("change", updateStep);
      reducedMotionQuery.removeEventListener("change", updateStep);
    };
  }, []);

  const progressPercent = isComplete
    ? 100
    : ((activeStep + 1) / STEP_COUNT) * 100;

  const isStepVisible = (index) => index <= activeStep;

  return (
    <section
      id="three-step-launch"
      className="w-full scroll-mt-20 bg-white"
      data-name="Three Step Launch"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 md:px-8">
        <div
          ref={trackRef}
          className="launch-scroll-track relative"
          style={{ "--launch-step-count": STEP_COUNT }}
        >
          <div className="launch-scroll-sticky">
            <div className="rounded-3xl bg-[#f8fafc] px-6 py-12 md:px-[50px] md:py-[60px]">
              <div className="flex flex-col gap-8 md:gap-[30px]">
                <div className="flex max-w-[711px] flex-col gap-4">
                  <p className="font-sans text-base font-semibold leading-[22px] text-[#059669]">
                    Signature Framework
                  </p>
                  <h2 className="heading_two text-[#0f172a]">
                    The Martignetti 3-Step Launch
                  </h2>
                  <p className="font-sans text-lg leading-7 text-[#4b5563] md:text-xl md:leading-7">
                    Most nonprofits stall on planned giving because they think
                    they need a big budget, a dedicated officer, and years of
                    runway. The Martignetti 3-Step Launch is built on the
                    opposite idea: you can start with the donors and the gifts
                    you already have access to.
                  </p>
                </div>

                <div
                  className={`launch-steps-animated relative ${
                    isComplete ? "is-complete" : ""
                  }`}
                >
                  <div className="absolute left-[88px] right-[88px] top-[68px] hidden h-[5px] overflow-hidden rounded-full bg-[#f3f3f3] lg:block">
                    <div
                      className="launch-progress-fill h-full rounded-full bg-[#059669]"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>

                  <div
                    className={`launch-steps-stage grid gap-0 md:gap-6 lg:grid-cols-3 lg:gap-6 ${
                      isComplete ? "is-complete" : ""
                    }`}
                  >
                    {LAUNCH_STEPS.map((item, index) => (
                      <article
                        key={item.step}
                        className={`launch-step relative flex flex-col gap-4 px-0 py-[30px] lg:px-6 ${
                          isStepVisible(index) ? "is-visible" : ""
                        }`}
                      >
                        <div className="launch-step-badge flex md:size-20 size-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-[0px_4px_2px_rgba(0,0,0,0.04)]">
                          <span className="font-heading text-[32px] md:text-[48px] font-semibold uppercase leading-[56px] text-[#0f172a]">
                            {item.step}
                          </span>
                        </div>
                        <div className="flex flex-col gap-3">
                          <h3 className="font-heading text-xl font-bold uppercase leading-8 text-[#040a16] md:text-2xl">
                            {item.title}
                          </h3>
                          <p className="font-sans text-base leading-[26px] text-[#020120] md:text-lg">
                            {item.description}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>

                <QuoteBlock
                  quote={`"You do not start Planned Giving with your richest donors. You start with your most loyal ones."`}
                  attribution="— Tony Martignetti, Planned Giving Advisor"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
