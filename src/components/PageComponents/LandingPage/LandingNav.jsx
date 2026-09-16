import { Link } from "react-router-dom";
import LOGO_URL from "@/assets/images/navbar/tm_logo.svg";
import { scrollToLandingJoin } from "@/utils/scrollToLandingJoin";

export default function LandingNav() {
  return (
    <header className="sticky top-0 z-50 h-[100px] w-full bg-[rgba(0,21,11,0.55)] px-4 backdrop-blur-[24px] md:px-[60px]">
      <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between">
        <Link to="/" className="flex shrink-0 items-center overflow-hidden">
          <img
            src={LOGO_URL}
            alt="Planned Giving Accelerated"
            className="h-[68px] w-auto max-w-[116px] object-contain"
          />
        </Link>
        <button
          onClick={() => scrollToLandingJoin()}
          className="shrink-0 cursor-pointer rounded-lg bg-[#059669] px-4 py-3 text-sm font-semibold leading-6 tracking-[-0.5px] text-white transition-colors hover:bg-[#047a56] md:text-base"
        >
          Join the Waitlist
        </button>
      </div>
    </header>
  );
}
