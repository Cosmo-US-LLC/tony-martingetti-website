import { useState } from "react";
import STAR from "@/assets/images/home/icons/star.svg";

const TABS = [
  "All stories",
  "Consulting",
  "Program growth",
  "Education",
  "Nonprofit Radio",
  "Leadership",
  "Fundraising",
];

const TESTIMONIALS = [
  {
    text: "“We are truly appreciative for everything Tony has done on behalf of this school. His expertise and discipline have been gifts to our organization.”",
    name: "Susan Braun",
    role: "Administrator, The Waldorf School of Garden City",
  },
  {
    text: "“I had tried to make a substantial gift to my alma mater, but it was frustrating — until Tony started working with them. He listened, understood my goals, and worked with my attorney to fashion a gift instrument to meet my needs. Purposeful, comfortable, and fulfilling.”",
    name: "Frank J. Pannizzo",
    role: "Esq. Donor, New York City",
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

export default function TestimonialLibrary() {
  const [activeTab, setActiveTab] = useState(TABS[0]);
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-white px-4 py-12 md:px-[60px] md:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8 md:gap-[30px]">
        <div className="mx-auto flex max-w-[830px] flex-col gap-3 text-center md:gap-[18px]">
          <p className="font-script text-2xl leading-[33.6px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
            Nationwide Advocacy
          </p>
          <h2 className="text-[28px] font-bold leading-[39.2px] text-[#151515] md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
            The testimonial library
          </h2>
          <p className="text-base leading-[22.4px] tracking-[-0.16px] text-[#494949]">
            Filter through real reflections from leaders representing dynamic
            nonprofit segments.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-5 py-2.5 text-base leading-[22.4px] tracking-[-0.16px] transition-colors ${
                activeTab === tab
                  ? "bg-[#079669] text-white"
                  : "bg-[#ecfef8] text-[#1f1f1f]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <div className="grid md:grid-cols-3 md:gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="flex flex-col justify-between gap-9 rounded-2xl bg-[#fafafa] p-4"
              >
                <div className="flex flex-col gap-6">
                  <Stars />
                  <p className="text-base font-medium leading-[22.4px] tracking-[-0.16px] text-[#151515]">
                    {t.text}
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-base font-semibold leading-[22.4px] text-[#151515]">
                    {t.name}
                  </p>
                  <p className="text-sm leading-[19.6px] text-[#151515]">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              aria-label="Previous"
              onClick={() =>
                setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
              }
              className="flex h-8 w-12 items-center justify-center rounded-full"
            >
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
                <path d="M15 7H1M1 7L7 1M1 7L7 13" stroke="#002316" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="flex items-center gap-3.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`h-3.5 w-3.5 rounded-full transition-colors ${
                    i === active ? "bg-[#079669]" : "bg-[#e2e2e2]"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next"
              onClick={() => setActive((a) => (a + 1) % TESTIMONIALS.length)}
              className="flex h-8 w-12 items-center justify-center rounded-full"
            >
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
                <path d="M1 7H15M15 7L9 1M15 7L9 13" stroke="#002316" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="md:hidden">
          <div className="flex flex-col gap-6 rounded-2xl bg-[#fafafa] p-5">
            <Stars />
            <p className="text-sm leading-[19.6px] text-[#151515]">
              {TESTIMONIALS[active].text}
            </p>
            <div className="flex flex-col gap-1">
              <p className="text-base font-semibold leading-[22.4px] text-[#151515]">
                {TESTIMONIALS[active].name}
              </p>
              <p className="text-sm leading-[19.6px] text-[#151515]">
                {TESTIMONIALS[active].role}
              </p>
            </div>
          </div>
          <div className="mt-5 flex items-center justify-center gap-4">
            <button
              aria-label="Previous"
              onClick={() =>
                setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
              }
              className="flex h-8 w-12 items-center justify-center rounded-full"
            >
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
                <path d="M15 7H1M1 7L7 1M1 7L7 13" stroke="#002316" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="flex items-center gap-3.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`h-3.5 w-3.5 rounded-full transition-colors ${
                    i === active ? "bg-[#079669]" : "bg-[#e2e2e2]"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next"
              onClick={() => setActive((a) => (a + 1) % TESTIMONIALS.length)}
              className="flex h-8 w-12 items-center justify-center rounded-full"
            >
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
                <path d="M1 7H15M15 7L9 1M15 7L9 13" stroke="#002316" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
