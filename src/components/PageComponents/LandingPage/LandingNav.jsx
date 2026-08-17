import LandingLogo from "./LandingLogo";

export default function LandingNav() {
  return (
    <header
      className="sticky top-0 z-50 w-full bg-[#00150B]"
      data-name="Nav Bar"
    >
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-4 px-4 py-4 md:px-8">
        <a href="#landing-hero" aria-label="Planned Giving Accelerated home">
          <LandingLogo onDark className="h-12 md:h-[68px]" />
        </a>
        <a
          href="#join-waitlist"
          className="inline-flex shrink-0 items-center justify-center rounded-lg bg-[#059669] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#047857] md:px-5 md:py-3.5 md:text-base md:leading-6 md:tracking-[-0.5px]"
        >
          Join the Waitlist
        </a>
      </div>
    </header>
  );
}
