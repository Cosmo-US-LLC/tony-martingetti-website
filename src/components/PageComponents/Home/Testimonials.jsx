import { useState } from "react";
import AVATAR from "@/assets/images/home/avatar.png";
import STAR from "@/assets/images/home/icons/star.svg";
import { scrollToWaitlistJoin } from "@/utils/scrollToWaitlistJoin";

const REVIEWS = [
  {
    text: "“Fight for this budget line item! Overwhelmed by a $1.3 million annuity program, a rich bequest harvest, state audits, and compliance problems, I turned to Tony — and I'm so glad I did. Accessible, expert, and effective. Worth every cent.”",
    name: "Carole Weaver, Ph.D., CFRE",
    role: "Major Gifts & Planned Giving, The College of New Rochelle",
  },
  {
    text: "“Tony's guidance facilitated our successful navigation of NYS Department of Insurance requirements to formalize our charitable gift annuity program. His thoughtful strategy also enabled us to confirm several estate commitments.”",
    name: "Kathryn J. Sides",
    role: "Director of Development, The Stony Brook School",
  },
  {
    text: "“I had tried to make a substantial gift to my alma mater, but it was frustrating — until Tony started working with them. He listened, understood my goals, and worked with my attorney to fashion a gift instrument to meet my needs. Purposeful, comfortable, and fulfilling.”",
    name: "Frank J. Pannizzo",
    role: "Esq. Donor, New York City",
  },
  {
    text: "“We are truly appreciative for everything Tony has done on behalf of this school. His expertise and discipline have been gifts to our organization.”",
    name: "Susan Braun",
    role: "Administrator, The Waldorf School of Garden City",
  },
  {
    text: "“Your newsletter continues to inspire me. The 'one hour a day' rule is so true — we all need to focus on what is truly important in the development process: reaching out. Thank you for all you're doing for our profession.”",
    name: "Patricia D. Nolan",
    role: "Major Gift Officer, St. John's University",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <img key={i} src={STAR} alt="" className="h-5 w-5" />
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="flex flex-col gap-9 rounded-2xl bg-[#fafafa] p-4 md:p-4">
      <div className="flex flex-col gap-6">
        <Stars />
        <p className="text-sm leading-[19.6px] text-[#151515] md:text-xl md:font-medium md:leading-7 md:tracking-[-0.5px]">
          {review.text}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <img
          src={AVATAR}
          alt={review.name}
          className="hidden h-16 w-16 shrink-0 rounded-full object-cover md:block"
        />
        <div className="flex flex-col gap-1">
          <p className="text-base font-semibold leading-[22.4px] text-[#151515]">
            {review.name}
          </p>
          <p className="text-sm leading-[19.6px] text-[#151515]">
            {review.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-white px-4 py-12 md:px-[60px] md:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8 md:flex-row md:items-center md:gap-12">
        <div className="flex flex-col gap-3 md:w-[386px] md:shrink-0 md:gap-2">
          <p className="font-script text-2xl leading-[33.6px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
            Satisfied Customers
          </p>
          <div className="flex flex-col gap-4">
            <h2 className="text-[28px] font-bold leading-[39.2px] text-[#151515] md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
              What people say about me
            </h2>
            <p className="text-base leading-[22.4px] tracking-[-0.16px] text-[#494949]">
              4.9 out of 5 based on 127 Google Reviews
            </p>
          </div>
          <button
            onClick={() => scrollToWaitlistJoin()}
            className="mt-3 w-full cursor-pointer rounded-lg bg-[#079669] px-6 py-3 text-base font-semibold leading-[22.4px] text-white md:mt-6 md:w-fit"
          >
            Get my free chapter
          </button>
        </div>

        <div className="hidden md:grid md:flex-1 md:grid-cols-2 md:items-center md:gap-4">
          <div className="flex flex-col gap-4">
            {REVIEWS.slice(0, 2).map((r) => (
              <ReviewCard key={r.name} review={r} />
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {REVIEWS.slice(2, 5).map((r) => (
              <ReviewCard key={r.name} review={r} />
            ))}
          </div>
        </div>

        <div className="md:hidden">
          <div className="overflow-hidden">
            <ReviewCard review={REVIEWS[active]} />
          </div>
          <div className="mt-5 flex items-center justify-center gap-4 rounded-full py-2">
            <button
              aria-label="Previous review"
              onClick={() =>
                setActive((a) => (a - 1 + REVIEWS.length) % REVIEWS.length)
              }
              className="flex h-8 w-12 items-center justify-center rounded-full"
            >
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
                <path
                  d="M15 7H1M1 7L7 1M1 7L7 13"
                  stroke="#002316"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="flex items-center gap-3.5">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to review ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`h-3.5 w-3.5 rounded-full transition-colors ${
                    i === active ? "bg-[#079669]" : "bg-[#e2e2e2]"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next review"
              onClick={() => setActive((a) => (a + 1) % REVIEWS.length)}
              className="flex h-8 w-12 items-center justify-center rounded-full"
            >
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
                <path
                  d="M1 7H15M15 7L9 1M15 7L9 13"
                  stroke="#002316"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
