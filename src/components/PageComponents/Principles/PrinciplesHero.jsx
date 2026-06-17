import threeStepRocketIcon from "@/assets/images/principles/icons/three_step_rocket.svg";
import sixMythsIcon from "@/assets/images/principles/icons/six_myths.svg";
import weekProgramIcon from "@/assets/images/principles/icons/week_program.svg";
import frameworkLaunchIcon from "@/assets/images/principles/hero/framework_launch.svg";
import frameworkMythsIcon from "@/assets/images/principles/hero/framework_myths.svg";
import frameworkWeekIcon from "@/assets/images/principles/hero/framework_week.svg";
import heroArrowLeft from "@/assets/images/principles/hero/hero_arrow_left.svg";
import heroArrowRight from "@/assets/images/principles/hero/hero_arrow_right.svg";
import { scrollToPrinciplesJoin } from "@/utils/scrollToPrinciplesJoin";

const HERO_PILLS = [
  { label: "3-Step Launch", icon: threeStepRocketIcon, targetId: "three-step-launch" },
  { label: "6 Myths", icon: sixMythsIcon, targetId: "six-myths" },
  { label: "01 Week Program", icon: weekProgramIcon, targetId: "one-week-launch" },
];

const FRAMEWORK_CARDS = [
  {
    title: "Martignetti 3-Step Launch",
    description:
      "A simple, repeatable 3-step system to launch your program with clarity and confidence.",
    icon: frameworkLaunchIcon,
    targetId: "three-step-launch",
  },
  {
    title: "Top 6 Myth of Planned Giving",
    description:
      "We debunk the 6 biggest myths holding your organization back so you can move forward with confidence.",
    icon: frameworkMythsIcon,
    targetId: "six-myths",
  },
  {
    title: "1 Week Planned Giving Launch",
    description:
      "A focused 1-week program to get your plan, messaging, and materials in place, fast.",
    icon: frameworkWeekIcon,
    targetId: "one-week-launch",
  },
];

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (!section) return;
  const y = section.getBoundingClientRect().top + window.pageYOffset - 80;
  window.scrollTo({ top: y, behavior: "smooth" });
}

function FrameworkCard({ title, description, icon, targetId }) {
  return (
    <div className="flex w-full max-w-[414px] items-start gap-3 rounded-[18px] border border-[#f7f7f7]/20 bg-[#020717]/15 px-[23px] py-[18px] text-left shadow-[0px_4px_15px_0px_rgba(255,255,255,0.04)]">
      <img src={icon} alt="" className="size-[42px] shrink-0" aria-hidden="true" />
      <div className="flex min-w-0 flex-col gap-[18px]">
        <p className="font-sans text-lg font-bold leading-8 text-[#f7f7f7]">{title}</p>
        <p className="font-sans text-[14px] leading-[18px] text-[#d5d5d5]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function PrinciplesHero() {
  return (
    <section
      className="w-full py-16 md:py-[65px]"
      style={{
        backgroundImage: "linear-gradient(141.13deg, #0f172a 0%, #1e3a8a 100%)",
      }}
      data-name="Principles Hero"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 px-4 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-[39px]">
        <div className="flex w-full max-w-[596px] flex-col gap-8">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-4">
              <span className="inline-flex w-fit items-center rounded-full border border-white bg-white/10 px-5 py-2 font-sans text-sm font-bold uppercase leading-5 tracking-[0.7px] text-white">
                Our Principles
              </span>
              <h1 className="font-heading text-[32px] font-bold uppercase leading-tight tracking-[-1px] md:text-[52px] md:leading-[62px]">
                <span className="text-[#059669]">
                  The frameworks behind every bequest
                </span>
                <span className="text-white"> program we build</span>
              </h1>
            </div>
            <p className="paragraph_one text-[#f7f7f7]">
              Three proven methods drawn directly from Planned Giving Accelerated
              that remove the complexity, the guesswork, and the excuses so any
              nonprofit can start Planned Giving this week.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 md:gap-5">
            {HERO_PILLS.map((pill) => (
              <button
                type="button"
                onClick={() => scrollToSection(pill.targetId)}
                className="inline-flex items-center gap-2.5 cursor-pointer rounded-full border border-white bg-white/10 px-3.5 py-2.5 transition-colors hover:bg-white/20"
              >
                <img src={pill.icon} alt="" className="size-[21px]" aria-hidden="true" />
                <span className="font-sans text-base leading-7 text-[#f7f7f7]">
                  {pill.label}
                </span>
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollToPrinciplesJoin()}
            className="primary_btn_two w-fit cursor-pointer px-8 py-[18px] text-base shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
          >
            Join Waitlist
          </button>
        </div>

        <div className="relative hidden w-full max-w-[598px] shrink-0 lg:block">
          <div className="ml-[88px] flex flex-col gap-8">
            {FRAMEWORK_CARDS.map((card) => (
              <FrameworkCard key={card.title} {...card} />
            ))}
          </div>
          <img
            src={heroArrowRight}
            alt=""
            className="pointer-events-none absolute right-0 top-[54px] h-[149px] w-20"
            aria-hidden="true"
          />
          <img
            src={heroArrowLeft}
            alt=""
            className="pointer-events-none absolute left-0 top-[211px] h-[149px] w-20"
            aria-hidden="true"
          />
        </div>

        <div className="flex w-full flex-col gap-4 lg:hidden">
          {FRAMEWORK_CARDS.map((card) => (
            <FrameworkCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
