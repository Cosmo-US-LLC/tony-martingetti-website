import ICON_SEARCH from "@/assets/images/landing/icons/icon-search.svg";
import ICON_SPEAK from "@/assets/images/landing/icons/icon-speak.svg";
import ICON_AUDIT from "@/assets/images/landing/icons/icon-audit.svg";
import ICON_STARTUP from "@/assets/images/landing/icons/icon-startup.svg";

const CARDS = [
  {
    icon: ICON_SEARCH,
    title: "The Reasons Bequests Come First",
    desc: "Why the simple gift in a will is the highest-leverage place for any nonprofit to start.",
  },
  {
    icon: ICON_SPEAK,
    title: "The Myths, Debunked",
    desc: "The assumptions that keep nonprofits from starting is major-donors-only thinking.",
  },
  {
    icon: ICON_AUDIT,
    title: "The Martignetti MEAL Plan",
    desc: "Tony's framework for donor meetings, built to move a bequest conversation forward without feeling like a pitch.",
  },
  {
    icon: ICON_STARTUP,
    title: "A Practical Launch Plan",
    desc: "A clear, step-by-step path to your first ask, without a consultant, a new hire, or a year of planning to plan.",
  },
];

export default function BequestSystemSection() {
  return (
    <section className="w-full bg-[#0a1730] px-4 py-12 md:px-[60px] md:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8 md:gap-12">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between md:gap-12">
          <div className="flex flex-col gap-2">
            <p className="font-script text-2xl leading-[33.6px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
              Inside The Book
            </p>
            <h2 className="text-[28px] font-bold leading-[34px] text-white md:text-[40px] md:leading-[46px] md:tracking-[-0.8px]">
              The Complete Bequest-First System
            </h2>
          </div>
          <p className="max-w-[636px] text-base leading-[22.4px] tracking-[-0.16px] text-white md:pb-1">
            Not a theory book. The actual framework, tested and refined
            across 29 years of Planned Giving work.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="flex flex-col gap-8 rounded-3xl bg-white/[0.04] p-5 md:p-6"
            >
              <img src={c.icon} alt="" className="h-12 w-12" />
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold leading-[39.2px] text-white">
                  {c.title}
                </h3>
                <p className="text-xl leading-7 tracking-[-0.5px] text-white">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
