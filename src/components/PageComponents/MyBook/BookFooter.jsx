import { scrollToMyBookNotify } from "@/utils/scrollToMyBookNotify";

export default function BookFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="my-book-notify"
      className="w-full scroll-mt-20 bg-white py-4 md:py-6"
      data-name="Book Footer"
    >
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center gap-5 px-4 md:px-8">
        <div className="w-full rounded-[20px] bg-[#0f172a] px-6 py-12 md:px-16 md:py-[70px]">
          <div className="mx-auto flex max-w-[700px] flex-col items-center gap-3 text-center">
            <p className="font-sans text-base font-semibold leading-[22px] text-[#059669]">
              Begin Today
            </p>
            <h2 className="heading_two text-white">
              Your mission deserves a longer runway.
            </h2>
            <p className="font-sans text-base leading-[26px] text-[#f7f7f7]">
              Be the first to know when Planned Giving Accelerated is available
              for pre-order.
            </p>
            <button
              type="button"
              onClick={() => scrollToMyBookNotify()}
              className="primary_btn_two mt-2 cursor-pointer px-8 py-[18px] text-base uppercase tracking-[0.4px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
            >
              Notify Me at Launch
            </button>
          </div>
        </div>

        <p className="w-full text-center font-sans text-xs font-normal leading-5 text-[#4b5563]">
          © {currentYear} Martignetti Planned Giving Advisors, LLC. Planned
          Giving made practical
        </p>
      </div>
    </footer>
  );
}
