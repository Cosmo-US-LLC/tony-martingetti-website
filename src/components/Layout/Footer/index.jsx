import { Link } from "react-router-dom";
import FOOTER_LOGO_URL from "@/assets/images/footer/tm_footer_logo.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full border-t border-[#1f2937] bg-[#0f172a] pb-8 pt-12 md:pb-8 md:pt-[65px]"
      data-name="Footer"
    >
      <div
        className="mx-auto max-w-[1280px] px-5 md:px-8 w-full"
        data-name="Container"
      >
        <div className="flex w-full max-w-[inherit] flex-col gap-8 md:gap-[32px]">
          <Link
            to="/"
            className="flex shrink-0 overflow-hidden"
            aria-label="Planned Giving Accelerated – Home"
          >
            <img
              src={FOOTER_LOGO_URL}
              alt="Planned Giving Accelerated"
              className="h-[80px] w-auto max-w-[137px] object-contain object-left"
            />
          </Link>

          <div className="flex w-full flex-col gap-10 md:flex-row md:justify-between md:gap-12">
            {/* About Tony Martignetti */}
            <div className="flex max-w-[612px] flex-col gap-6 w-full">
              <h3 className="font-heading text-2xl font-bold uppercase leading-8 tracking-[0.48px] text-[#10b981]">
                About Tony Martignetti
              </h3>
              <p className="max-w-[508px] font-sans md:text-[16px] text-[14px] font-normal md:leading-[26px] leading-6 text-[#9ca3af]">
                Tony Martignetti is a nationally recognized Planned Giving
                expert who has helped hundreds of nonprofits launch and scale
                their legacy giving programs. His practical, no-nonsense
                approach cuts through the complexity and gets results, fast.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex w-full max-w-[252px] flex-col gap-6">
              <h4 className="font-heading text-xl font-bold uppercase leading-5 tracking-[0.7px] text-white">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    to="/waitlist"
                    className="footer_link font-sans text-base leading-6 text-[#d1d5db]"
                  >
                    Join Waitlist
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="footer_link font-sans text-base leading-6 text-[#d1d5db]"
                  >
                    About the Program
                  </Link>
                </li>
                <li>
                  <Link
                    to="/success-stories"
                    className="footer_link font-sans text-base leading-6 text-[#d1d5db]"
                  >
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="footer_link font-sans text-base leading-6 text-[#d1d5db]"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="flex w-full max-w-[272px] flex-col gap-6">
              <h4 className="font-heading text-xl font-bold uppercase leading-5 tracking-[0.7px] text-white">
                Contact
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="mailto:support@tonymartignetti.com"
                    className="footer_link font-sans text-base leading-6 text-[#d1d5db]"
                  >
                    support@tonymartignetti.com
                  </a>
                </li>
                <li>
                  <a
                    href="#schedule"
                    className="footer_link font-sans text-base leading-6 text-[#d1d5db]"
                  >
                    Schedule a Call
                  </a>
                </li>
                <li>
                  <Link
                    to="/#faq"
                    className="footer_link font-sans text-base leading-6 text-[#d1d5db]"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div
            className="border-t border-[#1f2937] pt-8"
            data-name="HorizontalBorder"
          >
            <p className="text-center font-sans text-[14px] font-normal leading-5 text-[#6b7280]">
              © {currentYear} Tony Martignetti Nonprofit Group. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
