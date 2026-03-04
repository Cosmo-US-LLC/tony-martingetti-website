import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import LOGO_URL from "@/assets/images/navbar/tm_logo.svg";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleJoinClick = (closeMobile = false) => {
    const el = document.getElementById("join");

    // If already on waitlist page → scroll directly
    if (location.pathname === "/waitlist" && el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to waitlist with hash
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

          <div
            className="max-md:hidden items-center gap-8 md:flex"
            data-name="Nav links"
          >
            <Link to="/about" className="nav_link whitespace-nowrap">
              About
            </Link>

            <Link 
            // to="/success-stories" 
            className="nav_link whitespace-nowrap">
              Success Stories
            </Link>

            {/* Join Waitlist CTA */}
            <button
              onClick={() => handleJoinClick()}
              className="primary_btn shrink-0"
            >
              Join Waitlist
            </button>
          </div>

          {/* <button
            type="button"
            className="p-2 text-[#0f172a] md:hidden"
            aria-label="Open menu"
          >
            Join Waitlist
          </button> */}
          <Link to="/waitlist" className="primary_btn shrink-0 md:hidden">
            Join Waitlist
          </Link>
        </div>

        {mobileOpen && (
          <div className="flex flex-col items-center justify-center gap-5 border-t border-[#f3f4f6] bg-[rgba(255,255,255,0.98)] px-6 py-12 backdrop-blur-sm md:hidden">
            
            <Link
              // to="/about"
              className="nav_link"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>

            <Link
              // to="/success-stories"
              className="nav_link"
              onClick={() => setMobileOpen(false)}
            >
              Success Stories
            </Link>

            {/* Mobile CTA */}
            <button
              onClick={() => handleJoinClick(true)}
              className="primary_btn w-fit"
            >
              Join Waitlist
            </button>

          </div>
        )}
      </div>
    </header>
  );
}