import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import LOGO_URL from "@/assets/images/navbar/tm_logo.svg";
import LOGO_URL_WHITE from "@/assets/images/navbar/tm_logo-white.svg";
import SOCIAL_LINKEDIN from "@/assets/images/home/icons/social-linkedin.svg";
import SOCIAL_X from "@/assets/images/home/icons/social-x.svg";

const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/success-stories", label: "Success Stories" },
  { to: "/principles", label: "Principles" },
  { to: "/my-book", label: "My Book" },
  { to: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  // Blog pages (list + post detail) render on a plain white background all
  // the way to the top, unlike the dark hero pages this navbar was built
  // for - the transparent/white-text style left nav links invisible
  // (white-on-white) until the page was scrolled.
  const isLight =
    location.pathname === "/privacy-policy" || location.pathname.startsWith("/blog");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              src={isLight ? LOGO_URL : LOGO_URL_WHITE}
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

          <a
            href="https://tony.ma/Amazon"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 cursor-pointer rounded-lg bg-[#079669] px-4 py-3 text-base font-semibold leading-[22.4px] text-white transition-colors hover:bg-[#057a56] md:inline-flex"
          >
            Order Now
          </a>

          <div className="flex items-center gap-2 md:hidden">
            <a
              href="https://tony.ma/Amazon"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-lg bg-[#059669] px-4 py-2.5 text-sm font-semibold leading-[17.5px] text-white transition-colors hover:bg-[#047a56]"
            >
              Order Now
            </a>
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
                      href="mailto:tony@tonymartignetti.com"
                      className="text-base leading-[22.4px] tracking-[-0.16px] text-[#494949]"
                    >
                      tony@tonymartignetti.com
                    </a>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
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
                      className="flex size-[42px] shrink-0 items-center justify-center rounded-full bg-[#fde8f8]"
                    >
                      <img src={SOCIAL_LINKEDIN} alt="" className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      aria-label="X"
                      className="flex size-[42px] shrink-0 items-center justify-center rounded-full bg-[#fde8f8]"
                    >
                      <img src={SOCIAL_X} alt="" className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="https://tony.ma/Amazon"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="w-full cursor-pointer rounded-lg bg-[#079669] px-8 py-3 text-center text-base font-bold leading-6 tracking-[-0.1px] text-white transition-colors hover:bg-[#057a56]"
              >
                Order Now
              </a>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
