import FOOTER_LOGO_URL from "@/assets/images/footer/tm_footer_logo.svg";
import SOCIAL_MAIL from "@/assets/images/home/icons/social-mail.svg";
import SOCIAL_LINKEDIN from "@/assets/images/home/icons/social-linkedin.svg";
import SOCIAL_X from "@/assets/images/home/icons/social-x.svg";
import { Link } from "react-router-dom";

export default function LandingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white px-4 py-12 md:px-[60px] md:py-12">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8">
        <div className="mx-auto flex max-w-[648px] flex-col items-center gap-4">
          <img
            src={FOOTER_LOGO_URL}
            alt="Planned Giving Accelerated"
            className="h-20 w-auto max-w-[137px] object-contain"
          />
          <p className="text-center text-base leading-[22.4px] tracking-[-0.16px] text-[#494949]">
            Tony Martignetti is a nationally recognized Planned Giving expert
            who has helped hundreds of nonprofits launch and scale their
            legacy giving programs. His practical, no-nonsense approach cuts
            through the complexity and gets results, fast.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="mailto:support@tonymartignetti.com"
              aria-label="Email"
              className="flex size-[50px] items-center justify-center rounded-full bg-[#fde8f8]"
            >
              <img src={SOCIAL_MAIL} alt="" className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/tonymartignetti/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex size-[50px] items-center justify-center rounded-full bg-[#fde8f8]"
            >
              <img src={SOCIAL_LINKEDIN} alt="" className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="X"
              className="flex size-[50px] items-center justify-center rounded-full bg-[#fde8f8]"
            >
              <img src={SOCIAL_X} alt="" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="border-t border-[#aeaeae] pt-8">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <p className="text-center text-sm leading-5 text-[#494949]">
              © {currentYear} Martignetti Planned Giving Advisors, LLC. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/privacy-policy" className="text-sm leading-5 text-[#494949] hover:text-[#059669]">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm leading-5 text-[#494949] hover:text-[#059669]">
                Term &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
