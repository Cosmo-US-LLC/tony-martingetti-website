import { useState } from "react";
import FAQ_IMAGE from "@/assets/images/landing/faq-image.png";

const FAQS = [
  {
    q: "What exactly am I joining the waitlist for?",
    a: "Planned Giving Accelerated, a book by Tony Martignetti on building a bequest-first Planned Giving program. It isn't published yet. The waitlist is how you get Chapter 1 now and the Founders Rate at launch. If you're in the first 50, you also get a seat on a live working session with Tony.",
  },
  {
    q: "When do I get the free chapter?",
    a: "Immediately. As soon as you join the waitlist, Chapter 1 is emailed to you.",
  },
  {
    q: "How does the first-50 working session work?",
    a: "The first 50 people to join the waitlist get a seat on a live virtual session where Tony works through your program's real bottleneck. Seats go in signup order.",
  },
  {
    q: "What if I'm not in the first 50?",
    a: "You'll still get Chapter 1 free and the Founders Rate locked in. You just won't have a guaranteed seat on the live working session.",
  },
  {
    q: "What is the Founders Rate?",
    a: "A discounted rate on the book reserved for waitlist members. It ends the day the book goes public on Amazon and retail.",
  },
  {
    q: "Do I need a fundraising background to use this?",
    a: "No. The book is written in plain English for executive directors, fundraisers and board members alike, no fundraising background required.",
  },
  {
    q: "Is this only for large nonprofits?",
    a: "No. The bequest-first system is built specifically for small and mid-size nonprofits with limited staff and budget.",
  },
  {
    q: "I'm a consultant, not on staff at a nonprofit. Is this still for me?",
    a: "Yes. Many consultants use the framework to guide their nonprofit clients through launching a Planned Giving program.",
  },
];

function PlusIcon({ open }) {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 0v14M0 7h14" stroke="#00150b" strokeWidth="1.5" className={open ? "opacity-0" : ""} />
        <path d="M0 7h14" stroke="#00150b" strokeWidth="1.5" />
      </svg>
    </span>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-[#fafafa] px-4 py-12 md:px-[60px] md:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8 md:gap-12">
        <div className="mx-auto flex max-w-[290px] flex-col gap-4 text-center">
          <p className="font-script text-2xl leading-[33.6px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
            Questions
          </p>
          <h2 className="text-[28px] font-bold leading-[39.2px] text-[#00150b] md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
            Before You Join
          </h2>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:gap-12">
          <div className="flex flex-col gap-4 md:w-1/2">
            {FAQS.map((f, i) => {
              const open = openIndex === i;
              return (
                <div
                  key={f.q}
                  className={`flex flex-col gap-5 rounded-2xl bg-white p-5 ${open ? "" : ""}`}
                >
                  <button
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    className="flex w-full items-center justify-between gap-6 text-left"
                  >
                    <p
                      className={`text-lg font-medium leading-7 tracking-[-0.5px] ${open ? "text-[#951b81]" : "text-black"}`}
                    >
                      {f.q}
                    </p>
                    <PlusIcon open={open} />
                  </button>
                  {open && (
                    <p className="text-base leading-[22.4px] tracking-[-0.16px] text-[#323232]">
                      {f.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="hidden md:block md:w-1/2">
            <img
              src={FAQ_IMAGE}
              alt=""
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
