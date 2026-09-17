import { Link } from "react-router-dom";
import FOOTER_LOGO_URL from "@/assets/images/footer/tm_footer_logo.svg";
import SIGNATURE_URL from "@/assets/images/footer/signature.svg";
import SOCIAL_LINKEDIN from "@/assets/images/home/icons/social-linkedin.svg";
import SOCIAL_X from "@/assets/images/home/icons/social-x.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="font-landing w-full bg-white px-4 pb-12 pt-12 md:px-[60px] md:pb-12 md:pt-12">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 md:gap-8">
        <div className="flex flex-col gap-6 md:flex-row md:gap-12">
          <div className="flex flex-1 flex-col gap-6">
            <Link to="/" aria-label="Planned Giving Accelerated – Home" className="inline-block w-fit">
              <img
                src={FOOTER_LOGO_URL}
                alt="Planned Giving Accelerated"
                className="h-20 w-auto max-w-[137px] object-contain object-left"
              />
            </Link>
            <p className="max-w-[448px] text-base leading-[22.4px] tracking-[-0.16px] text-[#151515]">
              Tony Martignetti is a nationally recognized Planned Giving expert
              who has helped hundreds of nonprofits launch and scale their
              legacy giving programs. His practical, no-nonsense approach cuts
              through the complexity and gets results, fast.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="mailto:tony@tonymartignetti.com"
                className="flex items-center gap-2 rounded-full bg-[#fde8f8] py-3 pl-5 pr-4 text-sm font-medium leading-5 text-[#951b81]"
              >
                tony@tonymartignetti.com
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3.5 10.5L10.5 3.5M10.5 3.5H4.9M10.5 3.5V9.1"
                    stroke="#951b81"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
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

          <div className="flex flex-1 flex-col gap-8 sm:flex-row sm:gap-6">
            <div className="flex flex-1 flex-col gap-4">
              <h4 className="text-sm font-bold uppercase leading-[17.5px] tracking-[1px] text-[#151515]">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="https://tony.ma/Amazon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm leading-5 text-[#494949] hover:text-[#059669]"
                  >
                    Order Now
                  </a>
                </li>
                <li>
                  <Link to="/about" className="text-sm leading-5 text-[#494949] hover:text-[#059669]">
                    About the Program
                  </Link>
                </li>
                <li>
                  <Link to="/success-stories" className="text-sm leading-5 text-[#494949] hover:text-[#059669]">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm leading-5 text-[#494949] hover:text-[#059669]">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-1 flex-col gap-3">
              <h4 className="text-sm font-bold uppercase leading-[17.5px] tracking-[1px] text-[#151515]">
                Others
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link to="/contact" className="text-sm leading-5 text-[#494949] hover:text-[#059669]">
                    Schedule a Call
                  </Link>
                </li>
                <li>
                  <Link to="/#" className="text-sm leading-5 text-[#494949] hover:text-[#059669]">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-1 flex-col gap-4">
              <h4 className="text-sm font-bold uppercase leading-[17.5px] tracking-[1px] text-[#151515]">
                Contact
              </h4>
              <div className="flex flex-col gap-3">
                <a href="mailto:support@tonymartignetti.com" className="text-sm leading-5 text-[#494949]">
                  tony@tonymartignetti.com
                </a>
                {/* <a href="tel:+18004567890" className="text-sm leading-5 text-[#494949]">
                  (800) 456-7890
                </a> */}
              </div>
            </div>
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

        <div className="pt-8">
          <img
            src={SIGNATURE_URL}
            alt="Tony Martignetti signature"
            className="h-auto w-full object-contain opacity-90"
          />
        </div>
      </div>
    </footer>
  );
}
