import threeStepRocketIcon from "@/assets/images/principles/icons/three_step_rocket.svg";
import sixMythsIcon from "@/assets/images/principles/icons/six_myths.svg";
import weekProgramIcon from "@/assets/images/principles/icons/week_program.svg";
import BequestPipelineEstimator from "./BequestPipelineEstimator";

const HERO_PILLS = [
  { label: "3-Step Launch", icon: threeStepRocketIcon, targetId: "three-step-launch" },
  { label: "6 Myths", icon: sixMythsIcon, targetId: "six-myths" },
  { label: "01 Week Program", icon: weekProgramIcon, targetId: "principles-faq" },
];

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (!section) return;
  const y = section.getBoundingClientRect().top + window.pageYOffset - 80;
  window.scrollTo({ top: y, behavior: "smooth" });
}

export default function PrinciplesHero() {
  return (
    <section
      className="w-full py-16 md:py-20"
      style={{
        backgroundImage:
          "linear-gradient(138.91deg, #0f172a 18.73%, #1e3a8a 100%)",
      }}
      data-name="Principles Hero"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 px-4 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-[70px]">
        <div className="flex w-full max-w-[596px] flex-col gap-8 lg:gap-8">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <span className="inline-flex w-fit items-center rounded-full border border-white bg-white/10 px-5 py-2 font-sans text-sm font-bold uppercase leading-5 tracking-[0.7px] text-white">
                Methodology &amp; Frameworks
              </span>
              <h1 className="font-heading text-[32px] font-bold uppercase leading-tight tracking-[-1px] md:text-[52px] md:leading-[62px]">
                <span className="text-[#059669]">
                  The frameworks <br /> behind every bequest{" "}
                </span>
                <br />
                <span className="text-white">program we build</span>
              </h1>
            </div>
            <p className="paragraph_one text-[#f7f7f7]">
              Three proven methods that remove the complexity, the guesswork,
              and the excuses so any nonprofit can start Planned Giving this
              week.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 md:gap-5">
            {HERO_PILLS.map((pill) => (
              <button
                key={pill.label}
                type="button"
                onClick={() => scrollToSection(pill.targetId)}
                className="inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-white bg-white/10 px-3.5 py-2.5 transition-colors hover:bg-white/20"
              >
                <img src={pill.icon} alt="" className="size-[21px]" aria-hidden="true" />
                <span className="font-sans text-base leading-7 text-[#f7f7f7]">
                  {pill.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="w-full max-w-[558px] shrink-0">
          <BequestPipelineEstimator />
        </div>
      </div>
    </section>
  );
}
