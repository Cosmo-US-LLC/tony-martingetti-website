import { useNavigate } from "react-router-dom";

export default function PrinciplesFooter() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <footer
      id="principles-join"
      className="w-full scroll-mt-20 bg-white py-4 md:py-6"
      data-name="Principles Footer"
    >
      <div className="mx-auto flex w-full max-w-[1120px] flex-col items-center gap-5 px-4 md:px-8">
        <div className="w-full rounded-[20px] bg-[#0f172a] px-6 py-12 md:px-16 md:py-[70px]">
          <div className="mx-auto flex max-w-[576px] flex-col items-center gap-3 text-center">
            <div className="flex flex-col items-center gap-2.5">
              <p className="font-sans text-base font-semibold leading-[22px] text-[#059669]">
                Begin Today
              </p>
              <h2 className="heading_two text-white">
                Ready to launch your Planned Giving program?
              </h2>
              <p className="card_body text-[#f7f7f7]">
                <span className="block">
                  Join 500+ nonprofits already on the waitlist for Planned
                  Giving Accelerated
                </span>
                <span className="block">
                  Tony Martignetti&apos;s proven program that gets your bequest
                  program off the ground fast.
                </span>
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate("/#join")}
              className="primary_btn_two mt-2.5 cursor-pointer px-8 py-[18px] text-base shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
            >
              Join Waitlist Now
            </button>
          </div>
        </div>

        <div className="w-full text-center font-sans text-xs font-normal leading-5 text-[#4b5563]">
          <p className="md:hidden">
            © {currentYear} Martignetti Planned Giving Advisors, LLC. <br />
            Planned Giving made practical
          </p>
          <p className="mt-1 whitespace-nowrap md:hidden">
            <a href="#" className="underline hover:text-[#059669]">
              Contact Us
            </a>
            <span className="mx-1">|</span>
            <a href="#" className="underline hover:text-[#059669]">
              Privacy Policy
            </a>
          </p>

          <p className="hidden md:block">
            © {currentYear} Martignetti Planned Giving Advisors, LLC. Planned
            Giving made practical{" "}
            <span className="mx-1">·</span>
            <a href="#" className="underline hover:text-[#059669]">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
