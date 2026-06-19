import { Link } from "react-router-dom";
import { useWaitlistForm } from "@/hooks/useWaitlistForm";

export default function SuccessStoriesFooter() {
  const { email, setEmail, status, errorMessage, handleSubmit, isLoading } =
    useWaitlistForm("success-stories");
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="success-stories-join"
      className="w-full scroll-mt-20 bg-white py-4 md:py-6"
      data-name="Success Stories Footer"
    >
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center gap-5 px-4 md:px-8">
        <div className="w-full rounded-[20px] bg-[#0f172a] px-6 py-12 md:px-16 md:py-[70px]">
          <div className="mx-auto flex max-w-[700px] flex-col items-center gap-3 text-center">
            <div className="flex flex-col items-center gap-2.5">
              <p className="font-sans text-base font-semibold leading-[22px] text-[#059669]">
                Begin Today
              </p>
              <h2 className="heading_two text-white">
                Ready to Write Your Own Success Story?
              </h2>
              <p className="card_body text-[#f7f7f7]">
                Join 500+ nonprofits on the waitlist for Planned Giving
                Accelerated. Limited spots available.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex w-full max-w-[576px] flex-col gap-4 pt-2.5 sm:flex-row sm:items-stretch"
            >
              <label className="sr-only" htmlFor="success-stories-email">
                Email address
              </label>
              <input
                id="success-stories-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                disabled={isLoading}
                className="min-h-[56px] flex-1 rounded-lg border-0 bg-white px-6 py-4 font-sans text-lg text-[#0f172a] placeholder:text-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#059669] disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="primary_btn_two shrink-0 cursor-pointer px-8 py-[18px] text-base disabled:cursor-not-allowed sm:w-auto"
              >
                {isLoading ? "Joining…" : "Join Waitlist Now"}
              </button>
            </form>

            {status === "success" && (
              <p className="font-sans text-base font-medium text-[#6ee7b7]">
                Thanks! You&apos;re on the list.
              </p>
            )}

            {status === "error" && (
              <p className="font-sans text-base font-medium text-red-300">
                {errorMessage}
              </p>
            )}
          </div>
        </div>

        <div className="w-full text-center font-sans text-xs font-normal leading-5 text-[#4b5563]">
          <p className="md:hidden">
            © {currentYear} Martignetti Planned Giving Advisors, LLC. <br />
            Planned Giving made practical
          </p>
          <p className="mt-1 whitespace-nowrap md:hidden">
            <Link to="/privacy-policy" className="underline hover:text-[#059669]">
              Privacy Policy
            </Link>
            <span className="mx-1">|</span>
            <a
              href="mailto:support@tonymartignetti.com"
              className="underline hover:text-[#059669]"
            >
              support@tonymartignetti.com
            </a>
          </p>

          <p className="hidden md:block">
            © {currentYear} Martignetti Planned Giving Advisors, LLC. Planned
            Giving made practical{" "}
            <span className="mx-1">|</span>
            <Link to="/privacy-policy" className="underline hover:text-[#059669]">
              Privacy Policy
            </Link>
            <span className="mx-1">|</span>
            <a
              href="mailto:support@tonymartignetti.com"
              className="underline hover:text-[#059669]"
            >
              support@tonymartignetti.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
