import logoForDark from "@/assets/images/landing_page/logo/logo.svg";
import logoForLight from "@/assets/images/landing_page/logo/logo_dark.svg";

/**
 * @param {{ onDark?: boolean, className?: string }} props
 * onDark: true when placed over a dark background (uses the light-colored
 * logo mark); false when placed over a light background (uses the
 * dark-colored logo mark).
 */
export default function LandingLogo({ onDark = false, className = "" }) {
  return (
    <img
      src={onDark ? logoForDark : logoForLight}
      alt="Planned Giving Accelerated"
      className={`h-[68px] w-auto ${className}`}
    />
  );
}
