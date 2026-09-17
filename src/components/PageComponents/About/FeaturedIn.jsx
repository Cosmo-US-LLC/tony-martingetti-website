import BG_DESKTOP from "@/assets/images/success-stories/featured-bg-desktop.png";
import BG_MOBILE from "@/assets/images/success-stories/featured-bg-mobile.png"
import LOGO_NYT from "@/assets/images/about/icons/logo-nyt.svg";
import LOGO_YAHOO from "@/assets/images/about/icons/logo-yahoo.svg";
import LOGO_WSJ from "@/assets/images/about/icons/logo-wsj.svg";
import LOGO_DOWJONES from "@/assets/images/about/icons/logo-dowjones.svg";
import LOGO_GUIDESTAR from "@/assets/images/about/icons/logo-guidestar.svg";
import LOGO_CHRONICLE from "@/assets/images/about/logo-chronicle.png";
import LOGO_BLOOMBERG from "@/assets/images/about/icons/logo-bloomberg.svg";
import LOGO_NPCM from "@/assets/images/about/icons/logo-npcm.svg";

const LOGOS = [
  { src: LOGO_NYT, name: "The New York Times", isImg: false },
  { src: LOGO_YAHOO, name: "Yahoo! Finance", isImg: false },
  { src: LOGO_WSJ, name: "The Wall Street Journal", isImg: false },
  { src: LOGO_DOWJONES, name: "Dow Jones Newswires", isImg: false },
  { src: LOGO_CHRONICLE, name: "The Chronicle of Philanthropy", isImg: true },
  { src: LOGO_GUIDESTAR, name: "GuideStar", isImg: false },
  { src: LOGO_BLOOMBERG, name: "Bloomberg Intelligence", isImg: false },
  { src: LOGO_NPCM, name: "Nonprofit Contract Management", isImg: true },
];

function LogoPill({ logo }) {
  return (
    <div className="flex shrink-0 items-center gap-2 rounded-full bg-white/10 py-2 pl-2 pr-8 backdrop-blur-[8px]">
      {!logo.textOnly && (
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fafafa]">
          {logo.isImg ? (
            <img src={logo.src} alt="" className="h-4 w-8 object-contain" />
          ) : (
            <img src={logo.src} alt="" className="h-6 w-6 object-contain" />
          )}
        </span>
      )}
      <span className="whitespace-nowrap text-base leading-[22.4px] tracking-[-0.16px] text-white">
        {logo.name}
      </span>
    </div>
  );
}

export default function FeaturedIn() {
  return (
    <section className="relative w-full overflow-hidden md:h-[100dvh]">
      <img
        src={BG_DESKTOP}
        alt=""
        className="absolute inset-0 hidden h-full w-full object-top md:block"
      />
      <img
        src={BG_MOBILE}
        alt=""
        className="absolute inset-0 block h-full w-full object-cover md:hidden"
      />
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      <div className="relative flex min-h-[560px] w-full flex-col justify-between gap-10 py-10 md:h-full md:min-h-0 md:justify-between md:py-12">
        <div className="font-landing mx-auto flex w-full max-w-[1440px] flex-col gap-4 px-4 md:px-[60px]">
          <div className="flex max-w-[517px] flex-col gap-4">
            <h2 className="text-[28px] font-bold leading-[39.2px] text-white md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
              Featured in &amp; quoted by
            </h2>
            <p className="text-base leading-[22.4px] tracking-[-0.16px] text-white">
              Tony's expertise has been recognised by the most respected
              publications in finance, philanthropy and nonprofits.
            </p>
          </div>
        </div>

        <div className="relative w-full overflow-hidden px-4 md:px-0">
          <div className="logo-marquee-track flex w-max flex-nowrap gap-3 md:gap-4">
            {[...LOGOS, ...LOGOS].map((l, i) => (
              <LogoPill key={`${l.name}-${i}`} logo={l} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .logo-marquee-track {
          animation: featured-logo-marquee 30s linear infinite;
        }
        @keyframes featured-logo-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
