import { useEffect, useRef, useState } from "react";
import bookCoverImage from "@/assets/images/my_book/hero/book_cover.webp";
import amazonKindleLogo from "@/assets/images/my_book/hero/amazon_kindle_src.webp";
import barnesNobleLogo from "@/assets/images/my_book/hero/LogoBarnes&noble.svg";
import { useWaitlistForm } from "@/hooks/useWaitlistForm";
import { AMAZON_BOOK_URL, BARNES_NOBLE_BOOK_URL } from "@/constants";

export default function BookHero() {
  const { email, setEmail, status, errorMessage, handleSubmit, isLoading } =
    useWaitlistForm("my-book", { form: "my-book" });

  const [highlightRetailers, setHighlightRetailers] = useState(false);
  const highlightTimeoutRef = useRef(null);
  const retailersRef = useRef(null);

  useEffect(() => {
    return () => {
      if (highlightTimeoutRef.current) {
        clearTimeout(highlightTimeoutRef.current);
      }
    };
  }, []);

  const handleAvailableNowClick = () => {
    retailersRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });

    setHighlightRetailers(false);
    // restart the animation even if it's already running
    requestAnimationFrame(() => setHighlightRetailers(true));

    if (highlightTimeoutRef.current) clearTimeout(highlightTimeoutRef.current);
    highlightTimeoutRef.current = setTimeout(
      () => setHighlightRetailers(false),
      2200,
    );
  };

  const retailerLinkClass = [
    "flex w-full max-w-[590px] flex-col items-center justify-center gap-2 rounded-lg border px-4 py-2 transition-all duration-300 sm:flex-row sm:gap-3 sm:px-6 sm:py-[14px]",
    highlightRetailers
      ? "retailer-highlight scale-[1.03] border-[#34d399] bg-white/[0.14]"
      : "border-white/25 bg-white/[0.08] hover:bg-white/[0.14]",
  ].join(" ");

  return (
    <section
      className="w-full py-12 md:py-16"
      id="my-book-hero-notify"
      style={{
        backgroundImage:
          "linear-gradient(140.97deg, #0f172a 0%, #1e3a8a 100%)",
      }}
      data-name="Book Hero"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 px-4 md:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="flex w-full max-w-[620px] flex-col gap-6">
          <span className="inline-flex w-fit items-center rounded-full border border-white/40 bg-white/10 px-5 py-2 font-sans text-[11px] font-bold uppercase tracking-[1.2px] text-white">
            ✦ Book is Live Now
          </span>

          <div>
            <h1 className="font-heading text-[40px] font-bold uppercase leading-tight tracking-[-1px] text-white md:text-[56px] md:leading-[62px]">
              <span className="block">Planned Giving</span>
              <span className="block">Accelerated</span>
            </h1>
            <p className="mt-4 font-sans text-base leading-[26px] text-[#f7f7f7] md:text-lg">
              The Cut Through the Sh!t, No Nonsense, Practical, Step-by-Step
              Guide to Start Legacy Fundraising at Your Small to Mid-Size Nonprofit
              Simply In One Week With Bequests.
              <br />
              (The title may be longer than the book. Did you need a nap?)
            </p>
            <p className="mt-3 font-sans text-[15px] font-semibold text-[#059669]">
              by Tony Martignetti, Esq.
            </p>
          </div>

          <div className="hidden">
            <form
              onSubmit={handleSubmit}
              className="flex w-full max-w-[590px] flex-col gap-3 sm:flex-row"
            >
              <label className="sr-only" htmlFor="book-hero-email">
                Email address
              </label>
              <input
                id="book-hero-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                disabled={isLoading}
                className="min-h-[52px] flex-1 rounded-lg border border-white/20 bg-white/10 px-4 font-sans text-sm text-white placeholder:text-white/45 focus:outline-none focus:ring-2 focus:ring-[#059669] disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="primary_btn_two min-h-[52px] shrink-0 cursor-pointer px-8 py-3 text-sm uppercase tracking-[0.5px] disabled:cursor-not-allowed"
              >
                {isLoading ? "Submitting…" : "Notify Me"}
              </button>
            </form>

            {status === "success" && (
              <p className="font-sans text-sm font-medium text-[#6ee7b7]">
                Thanks! We&apos;ll notify you at launch.
              </p>
            )}

            {status === "error" && (
              <p className="font-sans text-sm font-medium text-red-300">
                {errorMessage}
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={handleAvailableNowClick}
            className="primary_btn_two w-fit cursor-pointer"
          >
            Available Now
          </button>

          <div ref={retailersRef} className="flex w-full max-w-[590px] flex-col gap-3">
            <a
              href={AMAZON_BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={retailerLinkClass}
            >
              <img
                src={amazonKindleLogo}
                alt=""
                className="h-6 w-auto shrink-0 object-contain object-left"
                aria-hidden="true"
              />
              <span className="text-center font-sans text-xs font-semibold leading-5 text-white/85 sm:text-sm sm:whitespace-nowrap">
                Order Now on Amazon
              </span>
            </a>

            <a
              href={BARNES_NOBLE_BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={retailerLinkClass}
            >
              <img
                src={barnesNobleLogo}
                alt=""
                className="h-3.5 w-auto shrink-0 object-contain object-left"
                aria-hidden="true"
              />
              <span className="text-center font-sans text-xs font-semibold leading-5 text-white/85 sm:text-sm sm:whitespace-nowrap">
                Order Now on Barnes &amp; Noble
              </span>
            </a>
          </div>
        </div>

        <div className="flex w-full max-w-[520px] shrink-0 items-center justify-center rounded-2xl bg-white/5 p-4 md:p-6">
          <img
            src={bookCoverImage}
            alt="Planned Giving Accelerated book cover"
            className="h-[400px] w-[250px] md:h-auto md:w-full max-w-[337px] rounded-[10px]"
          />
        </div>
      </div>
    </section>
  );
}
