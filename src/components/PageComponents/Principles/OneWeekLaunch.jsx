import { useState } from "react";
import weekOutcomeCheckIcon from "@/assets/images/principles/icons/week_outcome_check.svg";
import {
  ONE_WEEK_LAUNCH_STEPS,
  ONE_WEEK_OUTCOMES,
} from "@/constants/principles";

function StepIcon({ icon }) {
  return (
    <div className="flex size-[47px] shrink-0 items-center justify-center rounded-[23.5px] border-[1.36px] border-[#2fac66] p-2">
      <img src={icon} alt="" className="size-8 object-contain" aria-hidden="true" />
    </div>
  );
}

function WeekLaunchQuote({ quote, attribution }) {
  return (
    <blockquote className="w-full rounded-[30px] border-l-[7px] border-[#059669] bg-white py-4 pl-6 pr-6 md:pl-10 md:pr-[87px]">
      <p className="font-heading text-xl leading-8 text-black md:text-[28px] md:leading-8">
        {quote}
      </p>
      <footer className="mt-2 font-sans text-[15px] leading-8 text-[#020120]">
        {attribution}
      </footer>
    </blockquote>
  );
}

export default function OneWeekLaunch() {
  const [activeStep, setActiveStep] = useState(0);
  const step = ONE_WEEK_LAUNCH_STEPS[activeStep];

  return (
    <section
      id="one-week-launch"
      className="w-full scroll-mt-20 bg-white py-12 md:py-[60px]"
      data-name="One Week Launch"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 md:px-8">
        <div className="rounded-3xl bg-[#0f172a] px-4 py-12 md:px-[50px] md:py-[60px]">
          <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-4">
              <p className="font-sans text-base font-semibold leading-[22px] text-[#059669]">
                Proof of the speed promise
              </p>
              <h2 className="heading_two text-white">
                The One-Week Planned Giving Launch
              </h2>
              <p className="font-sans text-lg leading-7 text-[#f4f4f4] md:text-xl md:leading-7">
                Here is what the first week looks like when you follow The
                Martignetti 3-Step approach.
              </p>
            </div>

            <div className="flex flex-col gap-[30px]">
              <div className="rounded-2xl bg-[#17233b] px-4 py-8 md:px-6 md:py-11">
                <div className="flex flex-col gap-10 md:gap-14">
                  <div className="flex flex-col gap-1">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4 md:gap-6">
                      {ONE_WEEK_LAUNCH_STEPS.map((item, index) => {
                        const isActive = index === activeStep;
                        return (
                          <button
                            key={item.step}
                            type="button"
                            onClick={() => setActiveStep(index)}
                            className={`flex cursor-pointer items-center justify-between text-left uppercase text-white transition-opacity ${
                              isActive ? "opacity-100" : "opacity-50 hover:opacity-75"
                            }`}
                            aria-current={isActive ? "step" : undefined}
                          >
                            <span className="font-sans text-base opacity-80">
                              Step
                            </span>
                            <span className="font-heading text-[40px] font-bold leading-none md:text-[48px]">
                              {String(item.step).padStart(2, "0")}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                    <div className="relative mt-1 h-0.5 w-full rounded-full bg-white/10">
                      <div
                        className="absolute top-0 h-full rounded-full bg-white transition-transform duration-300 ease-out"
                        style={{
                          width: `${100 / ONE_WEEK_LAUNCH_STEPS.length}%`,
                          transform: `translateX(${activeStep * 100}%)`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 md:flex-row md:gap-5">
                    <StepIcon icon={step.icon} />
                    <div className="flex min-w-0 flex-1 flex-col gap-[18px]">
                      <h3 className="font-heading text-2xl font-bold uppercase leading-6 text-white md:text-[28px]">
                        {step.title}
                      </h3>
                      <p className="font-sans text-base leading-[27px] text-[#c0c0c0] md:text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[30px]">
                <div className="rounded-xl bg-[#17233b] px-4 py-8 shadow-[0px_3px_3px_rgba(37,37,37,0.07)] md:px-6 md:py-10">
                  <h3 className="font-heading text-[28px] font-bold uppercase leading-8 text-white md:text-[35px] md:leading-8">
                    What you will have at the end of the week
                  </h3>
                  <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-2 md:gap-x-12 md:gap-y-10">
                    {ONE_WEEK_OUTCOMES.map((outcome) => (
                      <div key={outcome} className="flex gap-3">
                        <img
                          src={weekOutcomeCheckIcon}
                          alt=""
                          className="mt-0.5 size-5 shrink-0"
                          aria-hidden="true"
                        />
                        <p className="font-sans text-lg leading-[26px] text-white">
                          {outcome}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <WeekLaunchQuote
                quote={`"It's not a conversation about death. It's a conversation about life. The life and longevity of your nonprofit."`}
                attribution="— Tony Martignetti"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
