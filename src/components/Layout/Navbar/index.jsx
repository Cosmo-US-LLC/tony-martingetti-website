import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import LOGO_URL from "@/assets/images/navbar/tm_logo.svg";
import { scrollToAboutJoin } from "@/utils/scrollToAboutJoin";
import { scrollToSuccessStoriesJoin } from "@/utils/scrollToSuccessStoriesJoin";
import { scrollToPrinciplesJoin } from "@/utils/scrollToPrinciplesJoin";
import { scrollToWaitlistJoin } from "@/utils/scrollToWaitlistJoin";

const NAV_LINKS = [
  { to: "/about", label: "About" },
  { to: "/success-stories", label: "Success Stories" },
  { to: "/principles", label: "Principles" },
  { to: "/my-book", label: "My Book" },
];

function getNavLinkClass(isActive, mobile = false) {
  return [
    "nav_link",
    isActive ? "nav_link_active" : "",
    mobile ? "" : "whitespace-nowrap",
  ]
    .filter(Boolean)
    .join(" ");
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleJoinClick = (closeMobile = false) => {
    if (location.pathname === "/about") {
      scrollToAboutJoin();
    } else if (location.pathname === "/success-stories") {
      scrollToSuccessStoriesJoin();
    } else if (location.pathname === "/principles") {
      scrollToPrinciplesJoin();
    } else if (location.pathname === "/my-book") {
      navigate("/#join");
    } else if (
      location.pathname === "/waitlist" ||
      location.pathname === "/"
    ) {
      scrollToWaitlistJoin();
    } else {
      navigate("/waitlist#join");
    }

    if (closeMobile) setMobileOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-[#f3f4f6] bg-[rgba(255,255,255,0.95)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] backdrop-blur-[2px]"
      data-name="Nav"
    >
      <div className="mx-auto max-w-[1280px] w-full" data-name="Container">
        <div className="flex w-full max-w-[inherit] items-center justify-between border-0 border-solid border-transparent bg-clip-padding px-4 py-2 md:px-8 md:py-2">
          
          <Link
            to="/"
            className="flex shrink-0 items-center overflow-hidden"
            aria-label="Planned Giving Accelerated – Home"
          >
            <img
              src={LOGO_URL}
              alt="Planned Giving Accelerated"
              className="h-12 w-auto max-w-[82px] object-contain"
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex" data-name="Nav links">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                {label}
              </NavLink>
            ))}

            {/* Join Waitlist CTA */}
            <button
              onClick={() => handleJoinClick()}
              className="primary_btn shrink-0 cursor-pointer"
            >
              Join Waitlist
            </button>
          </div>

          <button
            type="button"
            className="p-2 text-[#0f172a] md:hidden"
            aria-label="Open menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {mobileOpen && (
          <div className="flex flex-col items-center justify-center gap-5 border-t border-[#f3f4f6] bg-[rgba(255,255,255,0.98)] px-6 py-12 backdrop-blur-sm md:hidden">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => getNavLinkClass(isActive, true)}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </NavLink>
            ))}

            {/* Mobile CTA */}
            <button
              onClick={() => handleJoinClick(true)}
              className="primary_btn w-fit cursor-pointer"
            >
              Join Waitlist
            </button>

          </div>
        )}
      </div>
    </header>
  );
}