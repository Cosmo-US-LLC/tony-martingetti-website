import { useEffect, useRef, useState } from "react";
import stepTakeawayCheckIcon from "@/assets/images/principles/icons/step_takeaway_check.svg";
import {
  LAUNCH_STEP_TAKEAWAYS,
  LAUNCH_STEPS,
} from "@/constants/principles";
import { scrollToPrinciplesJoin } from "@/utils/scrollToPrinciplesJoin";
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

      const stickyEl = track.querySelector(".launch-scroll-sticky");
      const rect = track.getBoundingClientRect();
      const trackHeight = track.offsetHeight;
      const stickyHeight = stickyEl?.offsetHeight ?? window.innerHeight;
      const scrollableDistance = trackHeight - stickyHeight;

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
      className="w-full scroll-mt-20 mt-16 mb-16 bg-white"
      data-name="Three Step Launch"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 md:px-8">
        <div className="rounded-3xl bg-[#f8fafc] px-4 py-12 md:px-[50px] md:py-[60px]">
          <div
            ref={trackRef}
            className="launch-scroll-track relative"
            style={{ "--launch-step-count": STEP_COUNT }}
          >
            <div className="launch-scroll-sticky">
              <div className="flex flex-col gap-8 md:gap-[30px]">
                <div className="flex max-w-[740px] flex-col gap-4">
                  <p className="font-sans text-base font-semibold leading-[22px] text-[#059669]">
                    Signature Framework
                  </p>
                  <h2 className="heading_two text-[#0f172a]">
                    <span className="block">The Martignetti 3-Step,</span>
                    <span className="block">1-Week Planned Giving Launch</span>
                  </h2>
                  <p className="font-sans text-lg leading-7 text-[#4b5563] md:text-xl md:leading-7">
                    Everything you need to inaugurate Planned Giving at your
                    nonprofit within a week. These are the steps you can start
                    taking even next week to launch your Planned Giving program.
                    Together they&apos;ll equip you to open conversations and get
                    to solicitations of your top prospects all within a week.
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
                        className={`launch-step relative flex flex-col gap-6 md:gap-8 px-0 py-[30px] lg:px-6 ${
                          isStepVisible(index) ? "is-visible" : ""
                        }`}
                      >
                        <div className="launch-step-badge flex md:size-20 size-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-[0px_4px_2px_rgba(0,0,0,0.04)]">
                          <span className="font-heading text-[32px] md:text-[48px] font-semibold uppercase leading-[56px] text-[#0f172a]">
                            {item.step}
                          </span>
                        </div>
                        <div className="flex flex-col gap-3">
                          <h3 className="font-heading text-xl font-bold uppercase leading-8 text-[#040a16] md:text-2xl md:leading-8">
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
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-8 md:mt-[30px] md:gap-[30px]">
            <div className="w-full rounded-[30px] border border-[#d8d8d8] px-4 md:px-6 py-6 md:py-[30px]">
              <h3 className="font-heading text-[28px] font-bold uppercase leading-8 text-[#040a16] md:text-[35px]">
                Step takeaways
              </h3>
              <div className="mt-10 grid gap-10 md:grid-cols-2">
                {LAUNCH_STEP_TAKEAWAYS.map((takeaway) => (
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
              quote={`"Because your work must continue in your community for decades and generations to come, your nonprofit is focusing on long-term gifts."`}
              attribution="— Tony Martignetti"
            />

            <button
              type="button"
              onClick={() => scrollToPrinciplesJoin()}
              className="primary_btn_two w-fit cursor-pointer px-8 py-[18px] text-base shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
