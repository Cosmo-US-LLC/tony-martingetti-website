import { useState } from "react";

const FAQS = [
  {
    q: "What is the Martignetti 18 reasons why bequests are the place to launch your Planned Giving?",
    a: "These are Tony's 18 reasons why charitable bequests are the right place to start, like numbers 1-4: 1. Most popular planned gift, by far. 2. You don't need to educate your potential donors. 3. You don't need to educate your staff. 4. No lifetime cost.",
  },
  {
    q: "What is the Martignetti 3-Step, 1-Week Planned Giving Launch?",
    a: "It's the signature framework above: identify your top prospects, launch with gifts in wills, and cultivate and solicit them the right way, all within a single week.",
  },
  {
    q: "What is the Martignetti MEAL Plan?",
    a: "A simple sequence for donor conversations: Meet, Explain, Ask, Listen, keeping every Planned Giving conversation relational rather than transactional.",
  },
  {
    q: "What is the Planned Giving Multiplier?",
    a: "It's the compounding effect of consistently asking loyal donors about bequests: a handful of conversations a year, sustained over time, multiplies into a meaningful pipeline of future gifts.",
  },
  {
    q: "Is Planned Giving only for big nonprofits like universities and hospital systems?",
    a: "No. Any nonprofit with loyal, long-term donors can launch a Planned Giving program, regardless of size or budget.",
  },
  {
    q: "How do I identify my top prospects?",
    a: "Look for loyal, committed donors ages 55 and older. Names often come to mind immediately when you think about who represents your nonprofit best.",
  },
  {
    q: "What planned gift should I ask for first?",
    a: "Start with bequests, gifts in wills. They're the most popular planned gift, cost the donor nothing today, and require no specialised training to ask for.",
  },
  {
    q: "Is a Planned Giving conversation about death?",
    a: "No. It's a conversation about life, the life and longevity of your nonprofit's mission.",
  },
  {
    q: "Do donors leave bequests for the tax benefits?",
    a: "Rarely. Most donors leave bequests because of loyalty and a desire to see their values live on, not for tax advantages.",
  },
  {
    q: "Will asking for planned gifts cause donors to reduce their annual giving?",
    a: "No, in most cases Planned Giving conversations strengthen the relationship and often increase a donor's overall engagement and giving.",
  },
];

function ExpandIcon({ open }) {
  return (
    <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center">
      <svg
        width="17"
        height="8"
        viewBox="0 0 17 8"
        fill="none"
        className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      >
        <path d="M1 1L8.5 7L16 1" stroke="#00150b" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export default function PrinciplesFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-[#fafafa] px-4 py-12 md:px-[60px] md:py-20">
      <div className="mx-auto flex w-full max-w-[1084px] flex-col gap-8 md:gap-[50px]">
        <div className="mx-auto flex max-w-[519px] flex-col gap-3.5 text-center md:gap-[18px]">
          <p className="font-script text-2xl leading-[33.6px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
            Answers &amp; insights
          </p>
          <h2 className="text-[28px] font-bold leading-[39.2px] text-[#00150b] md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
            Frequently Asked questions
          </h2>
        </div>

        <div className="flex flex-col">
          {FAQS.map((f, i) => {
            const open = openIndex === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  className="flex w-full items-start gap-3 py-4 text-left"
                >
                  <div className="flex flex-1 flex-col gap-3">
                    <p className="text-base leading-[22.4px] tracking-[-0.16px] text-[#00150b]">
                      {f.q}
                    </p>
                    {open && (
                      <p className="text-base leading-[22.4px] tracking-[-0.16px] text-[#616161]">
                        {f.a}
                      </p>
                    )}
                  </div>
                  <ExpandIcon open={open} />
                </button>
                <div className="h-px w-full bg-[#858585]/[0.16]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
