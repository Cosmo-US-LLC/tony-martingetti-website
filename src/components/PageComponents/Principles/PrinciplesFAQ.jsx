import { useState } from "react";

const FAQS = [
  {
    q: "What is the Martignetti 18 reasons why bequests are the place to launch your Planned Giving?",
    a: "These are Tony's 18 reasons why charitable bequests are the right place to start, like numbers 1-4: 1. Most popular planned gift, by far. 2. You don't need to educate your potential donors. 3. You don't need to educate your staff. 4. No lifetime cost.",
  },
  // {
  //   q: "What is the Martignetti 3-Step, 1-Week Planned Giving Launch?",
  //   a: "It's the signature framework above: identify your top prospects, launch with gifts in wills, and cultivate and solicit them the right way, all within a single week.",
  // },
  {
    q: "What is the Martignetti MEAL Plan?",
    a: "Meals Expertly Allow Learning. The shared table, the understood cadence of meal service, the natural pauses with eating, and the timing, all create an environment ideal for learning a lot about your donor or potential donor.",
  },
  {
    q: "What is Planned Giving Multiplier?",
    a: "The number of times greater a donor’s charitable bequest is, than their total lifetime giving.",
  },
  {
    q: "Is Planned Giving only for big nonprofits like universities and hospital systems?",
    a: "No. Tony wrote this book specifically for small- and mid-size nonprofits. The myths that it requires large budgets, dedicated officers, or complex gift vehicles are false. You can launch with bequests alone and build a wildly successful program.",
  },
  {
    q: "How do I identify my top prospects?",
    a: "Look for loyal, committed, long-term donors ages 55–60 and older with whom someone at your nonprofit has a strong enough relationship that the donor routinely takes your calls. When you describe these criteria in a room, names start coming to mind before you finish the sentence.",
  },
  {
    q: "What planned gift should I ask for first?",
    a: "A gift by will, a charitable bequest. It is the most popular planned gift by far. Everyone knows what a will is, how wills work, and that they need one. You don't need to educate your donors on the mechanics.",
  },
  {
    q: "Is a Planned Giving conversation a conversation about death?",
    a: "No. It is a conversation about life, the life and sustainability of your nonprofit's work. You and your donor share a love of your mission. Focus there, and the conversation becomes natural.",
  },
  {
    q: "Do donors leave bequests for the tax benefits?",
    a: "Rarely. Fewer than one percent of estates face federal estate taxation. Donors leave bequests because they love your mission and want their values to keep working after they are gone. Tax advantages are only for the very wealthy.",
  },
  {
    q: "Will asking for planned gifts cause donors to reduce their annual giving?",
    a: "Research shows the opposite. Donors who include your nonprofit in their will increase their other giving by an average of 75 percent. They feel closer to your work and give you more.",
  },
  {
    q: "How long does it take to start a Planned Giving program?",
    a: "You can begin within a week. You will not close a bequest in a week, but you can identify your top prospects, understand why you are launching with gifts in wills, and have your first solicitation conversations underway, all in that time.",
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
