import lawIcon from "@/assets/images/about/icons/law.svg";
import radioIcon from "@/assets/images/about/icons/radio.svg";
import airForceBg from "@/assets/images/about/icons/air_force_bg.svg";
import airForceIcon from "@/assets/images/about/icons/air_force.svg";
import bequestsIcon from "@/assets/images/about/icons/bequests.svg";
import universityIcon from "@/assets/images/about/icons/university.svg";
import founderIcon from "@/assets/images/about/icons/founder.svg";
import speakerIcon from "@/assets/images/about/icons/speaker.svg";
import authorIcon from "@/assets/images/about/icons/author.svg";

const CREDENTIALS = [
  {
    icon: lawIcon,
    title: "Temple University School of Law",
    description:
      "Juris Doctor, foundation in ethical counsel including study of wills and trusts.",
  },
  {
    icon: radioIcon,
    title: "Host: Tony Martignetti Nonprofit Radio",
    description:
      "Picking the brains of other experts for small- and mid-size nonprofits.",
  },
  {
    icon: "air-force",
    title: "U.S. Air Force Veteran",
    description: "Captain, Missile Combat Crew Commander.",
  },
  {
    icon: bequestsIcon,
    title: "$150M+ Bequests Secured",
    description: "Privileged to work with nonprofits nationwide.",
  },
  {
    icon: universityIcon,
    title: "Carnegie Mellon University",
    description: "B.S., Information Systems & Managerial Economics",
  },
  {
    icon: founderIcon,
    title: "Founder, Planned Giving Accelerated",
    description: "The course, helping you launch Planned Giving.",
  },
  {
    icon: speakerIcon,
    title: "Keynote Speaker & Trainer",
    description:
      "Engaging audiences, teaching Planned Giving fundraising.",
  },
  {
    icon: authorIcon,
    title: "Author, Planned Giving Accelerated",
    description: "The book, helping you launch Planned Giving.",
  },
];

function CredentialIcon({ icon }) {
  if (icon === "air-force") {
    return (
      <div className="relative size-[60px] shrink-0">
        <img src={airForceBg} alt="" className="absolute inset-0 size-full" aria-hidden="true" />
        <img
          src={airForceIcon}
          alt=""
          className="absolute left-1/2 top-1/2 size-[30px] -translate-x-1/2 -translate-y-1/2"
          aria-hidden="true"
        />
      </div>
    );
  }

  return (
    <img
      src={icon}
      alt=""
      className="size-[60px] shrink-0"
      aria-hidden="true"
    />
  );
}

function CredentialCard({ icon, title, description }) {
  return (
    <div className="flex gap-2.5 rounded-xl border border-[#eaeaea] bg-[#f8fafc] px-4 py-[18px]">
      <CredentialIcon icon={icon} />
      <div className="flex min-w-0 flex-col gap-2">
        <h3 className="heading_three text-[#0f172a]">{title}</h3>
        <p className="font-sans text-sm leading-6 text-[#707377]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function CredentialsMilestones() {
  return (
    <section
      className="w-full bg-[#f8fafc] py-12 md:py-[60px]"
      data-name="Credentials & Milestones"
    >
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center gap-10 px-4 md:px-8">
        <div className="flex max-w-[508px] flex-col items-center gap-4 text-center">
          <div className="flex flex-col items-center gap-1">
            <p className="font-sans text-base font-semibold leading-[22px] text-[#059669]">
              Tony&apos;s Background
            </p>
            <h2 className="heading_two text-[#0f172a]">
              Credentials & Milestones
            </h2>
          </div>
          <p className="font-sans text-lg leading-7 text-[#4b5563] md:text-xl">
            Academic excellence, service, authorship, and impact shaping a
            generation of Planned Giving leaders.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {CREDENTIALS.map((item) => (
            <CredentialCard key={item.title} {...item} />
          ))}
        </div>

        <p className="max-w-[750px] text-center font-sans text-xs leading-5 text-[#4b5563]">
          For more than two decades, Tony has combined practical fundraising
          expertise, strategic planning, and nonprofit leadership experience to
          help organizations build programs that create lasting impact.
        </p>
      </div>
    </section>
  );
}
