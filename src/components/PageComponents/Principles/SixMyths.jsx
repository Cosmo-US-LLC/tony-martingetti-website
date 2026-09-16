import { useState } from "react";
import TakeawayMarquee from "./TakeawayMarquee";

const MYTHS = [
  {
    label: "Myth 1",
    title: "Planned Giving is only for our wealthy donors.",
    desc: "Donor loyalty stands alone for Planned Giving prospecting. Charitable bequests are ideal for your small donors because there's no lifetime cost. That puts Planned Giving within every loyal donor's reach.",
  },
  {
    label: "Myth 2",
    title: "Planned Giving is too complicated.",
    desc: "When you focus on gifts in wills, you can launch within a week. Everyone knows what a will is, how wills work, and that they need one. Your team doesn't need specialized training. Planned Giving doesn't have to be complicated to be wildly successful.",
  },
  {
    label: "Myth 3",
    title: "Planned Giving requires expertise.",
    desc: "When you launch Planned Giving, you launch a relationship endeavor, not a legal one. Do you like people? Are you curious about people? Do you believe in your mission? Three yesses is all you need. You don't need a lawyer on your staff or a consultant.",
  },
  {
    label: "Myth 4",
    title: "Planned Giving means offering lots of gift options.",
    desc: "Not at launch and perhaps never. At least 75% of all planned gifts are gifts in wills, so a singular focus on charitable bequests will serve your program well for years. You can expand in years three to five, if you want to. You never have to.",
  },
  {
    label: "Myth 5",
    title: "Planned Giving will hurt our other fundraising.",
    desc: "Research by Professor Russell James at Texas Tech University shows donors who include a gift by will to a nonprofit increase their other giving to that same nonprofit by 75 percent on average. They've elevated you to the level of a dear loved one, so they give more, not less.",
  },
  {
    label: "Myth 6",
    title: "Planned Giving means talking to donors about their death.",
    desc: "Turn this myth on its head and you have the truth. Planned Giving is a conversation about life, the life and sustainability of your nonprofit. Mutual love of your mission bonds you to your loyal donors and transcends every other difference between you.",
  },
];

const TAKEAWAYS = [
  "People of modest means make great Planned Giving prospects.",
  "Planned Giving isn't too complicated for you.",
  "You don't need expertise for Planned Giving success.",
  "You don't need to offer lots of gift options.",
  "Planned Giving will likely help your other fundraising.",
  "Planned Giving is a conversation about life, the life and longevity of your nonprofit.",
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

export default function SixMyths() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <section className="w-full bg-white px-4 pb-5 pt-12 md:px-[60px] md:pb-5 md:pt-20">
        <div className="mx-auto flex w-full max-w-[1084px] flex-col gap-8 md:gap-[50px]">
          <div className="mx-auto flex max-w-[908px] flex-col gap-3.5 text-center md:gap-[18px]">
            <p className="font-script text-2xl leading-[33.6px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
              Myths Debunked
            </p>
            <div className="flex flex-col gap-4">
              <h2 className="text-[28px] font-bold leading-[39.2px] text-[#00150b] md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
                Tony's top 6 myths of Planned Giving debunked
              </h2>
              <p className="text-base leading-[22.4px] tracking-[-0.16px] text-[#616161]">
                The hateful, spiteful, insidious myths that keep fundraisers
                away from Planned Giving, cut off at the knees. These myths
                stifle your sustainability and hinder your endowment growth,
                because they keep you away from successful, scalable Planned
                Giving fundraising. They keep you from doing your critical
                work in the community for the long term.
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            {MYTHS.map((m, i) => {
              const open = openIndex === i;
              return (
                <div key={m.label}>
                  <button
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    className="flex w-full items-start gap-6 py-6 text-left md:gap-12"
                  >
                    <p className="font-script w-[70px] shrink-0 text-2xl leading-[33.6px] text-[#079669] md:w-[90px] md:text-[32px] md:leading-[44.8px]">
                      {m.label}
                    </p>
                    <div className="flex flex-1 flex-col gap-4">
                      <p className="text-lg font-medium leading-7 tracking-[-0.5px] text-[#00150b]">
                        {m.title}
                      </p>
                      {open && (
                        <p className="text-base leading-[22.4px] tracking-[-0.16px] text-[#616161]">
                          {m.desc}
                        </p>
                      )}
                    </div>
                    <ExpandIcon open={open} />
                  </button>
                  {i < MYTHS.length - 1 && (
                    <div className="h-px w-full bg-[#fafafa]" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <TakeawayMarquee items={TAKEAWAYS} />
    </>
  );
}
