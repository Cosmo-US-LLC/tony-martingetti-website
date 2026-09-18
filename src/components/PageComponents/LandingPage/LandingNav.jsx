import { useEffect, useState } from "react";
import LOGO_URL from "@/assets/images/navbar/tm_logo.svg";
import { scrollToLandingJoin } from "@/utils/scrollToLandingJoin";

export default function LandingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 h-[100px] w-full px-4 transition-colors duration-300 md:px-[60px]",
        scrolled ? "bg-[#151515] backdrop-blur-[24px]" : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between">
        <div className="flex shrink-0 items-center overflow-hidden">
          <img
            src={LOGO_URL}
            alt="Planned Giving Accelerated"
            className="h-[68px] w-auto max-w-[116px] object-contain"
          />
        </div>
        {/* <button
          onClick={() => scrollToLandingJoin()}
          className="shrink-0 cursor-pointer rounded-lg bg-[#059669] px-4 py-3 text-sm font-semibold leading-6 tracking-[-0.5px] text-white transition-colors hover:bg-[#047a56] md:text-base"
        >
          Join the Waitlist
        </button> */}
      </div>
    </header>
  );
}
