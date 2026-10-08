import { useCallback, useEffect, useRef, useState } from "react";
import AMAZON_BADGE from "@/assets/images/mybook/amazon-badge-cropped.webp";
import { BOOK_REVIEWS, BOOK_REVIEWS_SUMMARY } from "@/constants/myBook";

const AMAZON_REVIEWS_URL =
  "https://www.amazon.com/Planned-Giving-Accelerated-Step-Step/dp/B0HHB4Z2YH/ref=sr_1_1?crid=1WBKH55WUZ7EK&dib=eyJ2IjoiMSJ9.tmHqhSVB2iD52MCeWNqD2czbOH4tTYm7Kqj0dKQTlSkmsUCZME3T5R1poXz7oejAKmD4e4385NcvZ7uMghodBYiQnr3qkIF2HGcmvBRt5p4.i4cyPfPtVArRIuo30RvLqQIJCgvlVxJ_DnXDH-CWPF0&dib_tag=se&keywords=planned+giving+accelerated&qid=1791458007&s=books&sprefix=planned+giving+acclera%2Cstripbooks%2C833&sr=1-1#averageCustomerReviewsAnchor";
const GOODREADS_REVIEWS_URL =
  "https://www.goodreads.com/book/show/258099162-planned-giving-accelerated#CommunityReviews";

const STARS = (
  <span
    className="tracking-[2px] text-[#e8801a]"
    role="img"
    aria-label="5 out of 5 stars"
  >
    ★★★★★
  </span>
);

function ReviewCard({ review }) {
  const [open, setOpen] = useState(false);
  const isLong = review.quote.length > 320;

  return (
    <figure className="flex w-full shrink-0 snap-start flex-col gap-3.5 rounded-xl border border-[#d5dde3] p-6 md:w-[calc((100%-40px)/3)]">
      {STARS}
      {review.title && (
        <p className="text-base font-bold text-[#0a1730]">{review.title}</p>
      )}
      <blockquote
        className={`whitespace-pre-line text-base leading-6 text-[#151515] ${
          isLong && !open ? "line-clamp-6" : ""
        }`}
      >
        {review.quote}
      </blockquote>
      {isLong && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="self-start text-sm font-bold text-[#079669]"
        >
          {open ? "Show less" : "Read more"}
        </button>
      )}
      <figcaption className="mt-auto flex flex-col gap-1">
        <span className="text-sm font-bold text-[#0a1730]">
          {review.author}
          {review.role ? `, ${review.role}` : ""}
        </span>
        <span className="text-xs text-[#494949]">{review.source}</span>
      </figcaption>
    </figure>
  );
}

export default function BookReviews() {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [active, setActive] = useState(0);
  const [stops, setStops] = useState(BOOK_REVIEWS.length);

  const cardStep = () => {
    const el = trackRef.current;
    if (!el || !el.firstElementChild) return 0;
    return el.firstElementChild.getBoundingClientRect().width + 20;
  };

  const updateEdges = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
    const step = cardStep();
    if (!step) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const count = Math.round(maxScroll / step) + 1;
    setStops(count);
    setActive(Math.min(count - 1, Math.round(el.scrollLeft / step)));
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return undefined;
    updateEdges();
    el.addEventListener("scroll", updateEdges, { passive: true });
    window.addEventListener("resize", updateEdges);
    return () => {
      el.removeEventListener("scroll", updateEdges);
      window.removeEventListener("resize", updateEdges);
    };
  }, [updateEdges]);

  const pausedRef = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      const el = trackRef.current;
      if (!el || pausedRef.current || document.hidden) return;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const step = el.firstElementChild.getBoundingClientRect().width + 20;
        el.scrollBy({ left: step, behavior: "smooth" });
      }
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el || !el.firstElementChild) return;
    const step = el.firstElementChild.getBoundingClientRect().width + 20;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-white px-4 py-12 md:px-[60px] md:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8 md:gap-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-script text-2xl leading-[33.6px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
              What readers are saying
            </p>
            <h2 className="text-[28px] font-bold leading-[39.2px] text-[#151515] md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
              Reviews
            </h2>
          </div>
          <div className="flex items-center gap-3 self-start rounded-lg bg-[#f4f8f6] px-5 py-3.5">
            <span className="text-4xl font-bold text-[#0a1730]">
              {BOOK_REVIEWS_SUMMARY.rating}
            </span>
            <div className="flex flex-col">
              <span className="text-lg">{STARS}</span>
              <span className="text-sm text-[#494949]">
                {BOOK_REVIEWS_SUMMARY.note}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div
            ref={trackRef}
            onMouseEnter={() => (pausedRef.current = true)}
            onMouseLeave={() => (pausedRef.current = false)}
            onFocus={() => (pausedRef.current = true)}
            onBlur={() => (pausedRef.current = false)}
            onTouchStart={() => (pausedRef.current = true)}
            onTouchEnd={() => (pausedRef.current = false)}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {BOOK_REVIEWS.map((review) => (
              <ReviewCard key={review.author} review={review} />
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={atStart}
              aria-label="Previous reviews"
              className="text-xl text-[#0a1730] transition-opacity disabled:opacity-30"
            >
              ←
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: stops }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to review ${i + 1}`}
                  aria-current={i === active}
                  onClick={() =>
                    trackRef.current?.scrollTo({
                      left: i * cardStep(),
                      behavior: "smooth",
                    })
                  }
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    i === active ? "bg-[#079669]" : "bg-[#d5dde3]"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={atEnd}
              aria-label="Next reviews"
              className="text-xl text-[#0a1730] transition-opacity disabled:opacity-30"
            >
              →
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6 rounded-2xl bg-[#0a1730] px-6 py-8 text-white md:flex-row md:items-center md:justify-between md:gap-10 md:px-14 md:py-12">
          <h3 className="max-w-[560px] text-[28px] font-bold leading-[36px] tracking-[-0.56px] md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
            Read it? Your review helps the next nonprofit find the book.
          </h3>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={AMAZON_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-[#079669] px-5 py-3.5 transition-colors hover:bg-[#068458]"
            >
              <img
                src={AMAZON_BADGE}
                alt="Amazon Kindle"
                className="h-5 w-[81px] shrink-0 object-contain"
              />
              <span className="whitespace-nowrap text-sm leading-5 text-white/90">
                Leave a review on Amazon
              </span>
            </a>
            <a
              href={GOODREADS_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-lg bg-white/10 px-5 py-3.5 text-sm leading-5 text-white/90 transition-colors hover:bg-white/20"
            >
              Goodreads
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
