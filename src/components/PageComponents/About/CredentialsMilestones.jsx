import ICON_SCALE from "@/assets/images/about/icons/icon-scale.svg";
import ICON_MIC from "@/assets/images/about/icons/icon-mic.svg";
import ICON_SHIELD from "@/assets/images/about/icons/icon-shield-star.svg";
import ICON_DOLLAR from "@/assets/images/about/icons/icon-dollar.svg";
import ICON_GRAD from "@/assets/images/about/icons/icon-graduation.svg";
import ICON_HANDSHAKE from "@/assets/images/about/icons/icon-handshake.svg";
import ICON_PRESENTATION from "@/assets/images/about/icons/icon-presentation.svg";
import ICON_BOOK from "@/assets/images/about/icons/icon-book-open.svg";

const MILESTONES = [
  {
    icon: ICON_SCALE,
    title: "Temple University School of Law",
    desc: "Juris Doctor, foundation in ethical counsel including study of wills and trusts.",
  },
  {
    icon: ICON_MIC,
    title: "Tony Martignetti Nonprofit Radio",
    desc: "Picking the brains of other experts for small and mid-size nonprofits.",
  },
  {
    icon: ICON_SHIELD,
    title: "U.S. Air Force veteran",
    desc: "Captain, Missile Combat Crew Commander.",
  },
  {
    icon: ICON_DOLLAR,
    title: "$150M+ bequests secured",
    desc: "Privileged to work with nonprofits nationwide.",
  },
  {
    icon: ICON_GRAD,
    title: "Carnegie Mellon University",
    desc: "B.S., Information Systems & Managerial Economics.",
  },
  {
    icon: ICON_HANDSHAKE,
    title: "Founder, Martignetti Planned Giving Advisors",
    desc: "Counselling nonprofits on legacy giving since 2003.",
  },
  {
    icon: ICON_PRESENTATION,
    title: "Keynote speaker & trainer",
    desc: "Engaging audiences, teaching Planned Giving fundraising.",
  },
  {
    icon: ICON_BOOK,
    title: "Author, Planned Giving Accelerated",
    desc: "The book, helping you launch Planned Giving.",
  },
];

export default function CredentialsMilestones() {
  return (
    <section className="w-full bg-[#0a1730] px-4 py-12 md:px-[60px] md:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8 md:gap-12">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between md:gap-12">
          <div className="flex flex-col gap-2">
            <p className="font-script text-2xl leading-[33.6px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
              Tony's background
            </p>
            <h2 className="text-[28px] font-bold leading-[39.2px] text-white md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
              Credentials &amp; milestones
            </h2>
          </div>
          <p className="max-w-[636px] text-base leading-[22.4px] text-[#c6c6c6] md:pb-1">
            Academic excellence, service, authorship and impact shaping a
            generation of Planned Giving leaders.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:gap-4">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {MILESTONES.map((m) => (
              <div
                key={m.title}
                className="flex flex-col gap-3 rounded-2xl bg-white/[0.02] p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:bg-white/[0.05] hover:shadow-[0_0_30px_rgba(7,150,105,0.25)] md:gap-8 md:p-5"
              >
                <img src={m.icon} alt="" className="h-7 w-7 md:h-12 md:w-12" />
                <div className="flex flex-col gap-1.5 md:gap-2">
                  <h3 className="text-sm font-semibold leading-[19.6px] text-white md:text-2xl md:font-bold md:leading-[28.8px] md:tracking-[-0.48px]">
                    {m.title}
                  </h3>
                  <p className="text-xs leading-[14.4px] text-[#c6c6c6] md:text-base md:leading-[22.4px] md:tracking-[-0.16px]">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mx-auto max-w-[800px] text-center text-sm leading-[22px] text-[#c6c6c6] md:text-sm">
            For more than two decades, Tony has combined practical
            fundraising expertise, strategic planning and nonprofit
            leadership experience to help organisations build programs that
            create lasting impact.
          </p>
        </div>
      </div>
    </section>
  );
}
