import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import LOGO_URL from "@/assets/images/navbar/tm_logo.svg";
import SOCIAL_MAIL from "@/assets/images/home/icons/social-mail.svg";
import SOCIAL_LINKEDIN from "@/assets/images/home/icons/social-linkedin.svg";
import SOCIAL_X from "@/assets/images/home/icons/social-x.svg";
import { scrollToAboutJoin } from "@/utils/scrollToAboutJoin";
import { scrollToSuccessStoriesJoin } from "@/utils/scrollToSuccessStoriesJoin";
import { scrollToPrinciplesJoin } from "@/utils/scrollToPrinciplesJoin";
import { scrollToWaitlistJoin } from "@/utils/scrollToWaitlistJoin";

const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/success-stories", label: "Success Stories" },
  { to: "/principles", label: "Principles" },
  { to: "/my-book", label: "My Book" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isLight = location.pathname === "/privacy-policy";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleJoinClick = (closeMobile = false) => {
    if (location.pathname === "/about") {
      scrollToAboutJoin();
    } else if (location.pathname === "/success-stories") {
      scrollToSuccessStoriesJoin();
    } else if (location.pathname === "/principles") {
      scrollToPrinciplesJoin();
    } else if (location.pathname === "/my-book") {
      navigate("/#join");
    } else if (location.pathname === "/waitlist" || location.pathname === "/") {
      scrollToWaitlistJoin();
    } else {
      navigate("/waitlist#join");
    }

    if (closeMobile) setMobileOpen(false);
  };

  return (
    <>
      <header
        className={[
          "font-landing sticky top-0 z-50 h-[100px] w-full px-4 transition-colors duration-300 md:px-[60px]",
          isLight
            ? "border-b border-[#e2e2e2] bg-white"
            : scrolled
              ? "bg-[#151515] backdrop-blur-[24px]"
              : "bg-transparent",
        ].join(" ")}
        data-name="Nav"
      >
        <div className="mx-auto flex h-full w-full max-w-[1440px] items-center justify-between">
          <Link
            to="/"
            className="flex shrink-0 items-center overflow-hidden"
            aria-label="Planned Giving Accelerated – Home"
          >
            <img
              src={LOGO_URL}
              alt="Planned Giving Accelerated"
              className="h-[68px] w-auto max-w-[116px] object-contain"
            />
          </Link>

          <div
            className="hidden flex-1 items-center justify-center gap-10 md:flex"
            data-name="Nav links"
          >
            {NAV_LINKS.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  [
                    "whitespace-nowrap text-base leading-[22.4px] tracking-[-0.16px] transition-colors",
                    isActive
                      ? "font-semibold text-[#079669]"
                      : isLight
                        ? "font-normal text-black hover:text-[#079669]"
                        : "font-normal text-white hover:text-[#079669]",
                  ].join(" ")
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          <button
            onClick={() => handleJoinClick()}
            className="hidden shrink-0 cursor-pointer rounded-lg bg-[#079669] px-4 py-3 text-base font-semibold leading-[22.4px] text-white transition-colors hover:bg-[#057a56] md:inline-flex"
          >
            Get Free Chapter
          </button>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => handleJoinClick()}
              className="cursor-pointer rounded-lg bg-[#059669] px-4 py-2.5 text-sm font-semibold leading-[17.5px] text-white"
            >
              Free Chapter
            </button>
            <button
              type="button"
              className={isLight ? "p-1 text-black" : "p-1 text-white"}
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <svg width="25" height="19" viewBox="0 0 25 19" fill="none">
                <path
                  d="M0 1H25M0 9.5H25M0 18H25"
                  stroke={isLight ? "#151515" : "white"}
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {mobileOpen &&
        createPortal(
          <div className="fixed inset-0 z-[60] md:hidden">
            <button
              aria-label="Close menu"
              className="absolute inset-0 bg-black/40"
              onClick={() => setMobileOpen(false)}
            />
            <div className="absolute left-0 top-0 flex h-full w-[85%] max-w-[360px] flex-col justify-between overflow-y-auto bg-white p-4 shadow-xl">
              <div className="flex flex-col gap-6">
                <div className="flex items-start justify-between">
                  <img
                    src={LOGO_URL}
                    alt="Planned Giving Accelerated"
                    className="h-[68px] w-auto max-w-[116px] object-contain"
                  />
                  <button
                    aria-label="Close menu"
                    onClick={() => setMobileOpen(false)}
                    className="p-1 text-[#151515]"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M1 1L11 11M11 1L1 11" stroke="#151515" strokeWidth="1.2" />
                    </svg>
                  </button>
                </div>

                <nav className="flex flex-col gap-6">
                  {NAV_LINKS.map(({ to, label, end }) => (
                    <NavLink
                      key={to}
                      to={to}
                      end={end}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        [
                          "text-base leading-[22.4px]",
                          isActive
                            ? "font-semibold text-[#079669]"
                            : "font-normal text-black tracking-[-0.16px]",
                        ].join(" ")
                      }
                    >
                      {label}
                    </NavLink>
                  ))}
                </nav>

                <div className="border-t border-[#c6c6c6]" />

                <div className="flex flex-col gap-5">
                  <p className="text-xl font-semibold leading-7 text-black">
                    Contact details
                  </p>
                  <div className="flex flex-col gap-3">
                    <a
                      href="tel:+18004567890"
                      className="flex items-center gap-3 text-base leading-[22.4px] tracking-[-0.16px] text-[#494949]"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1C10.16 21 3 13.84 3 5a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.57 1 1 0 01-.25 1.01l-2.2 2.21z" />
                      </svg>
                      (800) 456-7890
                    </a>
                    <a
                      href="mailto:support@tonymartignetti.com"
                      className="flex items-center gap-3 text-base leading-[22.4px] tracking-[-0.16px] text-[#494949]"
                    >
                      <svg width="20" height="15" viewBox="0 0 24 18" fill="currentColor" className="shrink-0">
                        <path d="M2 0h20a2 2 0 012 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm1.8 2L12 8.5 20.2 2H3.8zM2 15h20V4.4l-8 6.35-8-6.35V15z" />
                      </svg>
                      support@tonymartignetti.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href="mailto:support@tonymartignetti.com"
                      aria-label="Email"
                      className="flex size-[42px] items-center justify-center rounded-full bg-[#fde8f8]"
                    >
                      <img src={SOCIAL_MAIL} alt="" className="h-4 w-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tonymartignetti/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="flex size-[42px] items-center justify-center rounded-full bg-[#fde8f8]"
                    >
                      <img src={SOCIAL_LINKEDIN} alt="" className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      aria-label="X"
                      className="flex size-[42px] items-center justify-center rounded-full bg-[#fde8f8]"
                    >
                      <img src={SOCIAL_X} alt="" className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleJoinClick(true)}
                className="w-full cursor-pointer rounded-lg bg-[#079669] px-8 py-3 text-base font-bold leading-6 tracking-[-0.1px] text-white"
              >
                Free Chapter
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
