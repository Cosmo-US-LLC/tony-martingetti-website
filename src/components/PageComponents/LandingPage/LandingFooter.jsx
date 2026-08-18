import { Instagram, Linkedin, Youtube } from "lucide-react";
import LandingLogo from "./LandingLogo";

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/plannedgivingaccelerated/",
  },
  {
    label: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/realtonymartignetti",
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/tonymartignetti/",
  },
];

export default function LandingFooter() {
  return (
    <footer className="w-full bg-white" data-name="Footer">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-6 px-4 py-10 md:px-8">
        <LandingLogo className="h-16" />

        <p className="max-w-[640px] text-center text-base leading-[22.4px] tracking-[-0.16px] text-[#494949]">
          Tony Martignetti is a nationally recognized Planned Giving expert
          who has helped hundreds of nonprofits launch and scale their legacy
          giving programs. His practical, no-nonsense approach cuts through
          the complexity and gets results, fast.
        </p>

        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#FDE8F8] text-[#951B81] transition-colors hover:bg-[#951B81] hover:text-white"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <div className="flex w-full flex-col items-center gap-3 border-t border-[#e5e7eb] pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-[14px] leading-[19.6px] text-[#494949]">
            &copy; {new Date().getFullYear()} Tony Martignetti Nonprofit
            Group. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="/privacy-policy"
              className="footer_link text-[14px] leading-[19.6px] text-[#494949]"
            >
              Privacy Policy
            </a>
            <a href="#" className="footer_link text-[14px] leading-[19.6px] text-[#494949]">
              Term &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
