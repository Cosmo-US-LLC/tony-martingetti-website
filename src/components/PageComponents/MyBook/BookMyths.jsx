import tonyQuoteImage from "@/assets/images/my_book/myths/tony_quote.webp";
import { BOOK_MYTHS } from "@/constants/myBook";
import { scrollToMyBookNotify } from "@/utils/scrollToMyBookNotify";

function MythTag({ label, variant }) {
  const isPositive = variant === "positive";

  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-md px-3 py-1 font-sans text-xs font-semibold ${
        isPositive
          ? "bg-[rgba(5,150,105,0.1)] text-[#059669]"
          : "bg-[rgba(220,53,53,0.1)] text-[#dc3535]"
      }`}
    >
      {label}
    </span>
  );
}

export default function BookMyths() {
  return (
    <section
      className="w-full bg-[#f6f8fa] py-12 md:py-[60px]"
      data-name="Book Myths"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-4 md:px-8 lg:flex-row lg:items-start lg:gap-[26px]">
        <div className="flex-1">
          <p className="font-sans text-[13px] font-semibold uppercase tracking-[1.5px] text-[#059669]">
            Myths This Book Destroys
          </p>
          <h2 className="mt-2.5 font-heading text-[28px] font-bold uppercase leading-tight tracking-[0.7px] text-[#0f172a] md:text-[34px]">
            The Lies Holding Your Nonprofit Back
          </h2>

          <div className="mt-4 divide-y divide-[#e5e5e5] border-t border-[#e5e5e5]">
            {BOOK_MYTHS.map((item) => (
              <div
                key={item.myth}
                className="flex items-center justify-between gap-4 py-4"
              >
                <div className="flex min-w-0 items-start gap-3">
                  <span
                    className="mt-0.5 font-sans text-sm font-bold text-[#dc3535]"
                    aria-hidden="true"
                  >
                    ✕
                  </span>
                  <p className="font-sans text-base text-[#040a16]">
                    &quot;{item.myth}&quot;
                  </p>
                </div>
                <MythTag label={item.tag} variant={item.tagVariant} />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollToMyBookNotify()}
            className="primary_btn_two mt-8 cursor-pointer px-8 py-[18px] text-base uppercase tracking-[0.4px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
          >
            Notify Me at Launch
          </button>
        </div>

        <div className="relative h-[360px] w-full overflow-hidden rounded-2xl md:h-[470px] md:max-w-[567px] md:shrink-0">
          <img
            src={tonyQuoteImage}
            alt="Tony Martignetti"
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/25 bg-white/85 p-4 backdrop-blur-sm md:inset-x-[34px] md:bottom-4">
            <div className="flex gap-4">
              <div className="w-[3px] shrink-0 rounded-full bg-[#059669]" />
              <div>
                <p className="font-heading text-lg leading-7 text-black md:text-[19px]">
                  &quot;Your mission deserves a longer runway. Start building
                  it this week.&quot;
                </p>
                <p className="mt-2 font-sans text-[13px] font-semibold text-black">
                  — Tony Martignetti
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
