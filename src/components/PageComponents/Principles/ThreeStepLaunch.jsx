import TakeawayMarquee from "./TakeawayMarquee";

const STEPS = [
  {
    num: "1.",
    title: "Identify your top prospects in your existing database",
    desc: "Your top prospects are your loyal, committed, long-term donors ages 55–60 and older. You may not even need your CRM database; names often come to mind immediately when you think about who represents your nonprofit.",
  },
  {
    num: "2.",
    title: "Launch with gifts in wills, the most accessible planned gift",
    desc: "You don't need a menu of gift vehicles. Bequests are the most popular planned gift by far, they cost your donor nothing today, and they require no specialised training to ask for. One gift type is all you need to launch.",
  },
  {
    num: "3.",
    title: "Cultivate and solicit your top prospects the right way",
    desc: "Be relational, not transactional. Start with the prospect you find easiest to talk to and the one most invested in your mission. Ask genuinely if they would consider including you in their will.",
  },
];

const TAKEAWAYS = [
  "Your top prospects are your loyal, committed, long-term donors ages 55 and older.",
  "Start with the prospect who is easiest to talk to and most invested in your mission.",
  "Remember Cheryl McCormick's advice: be genuinely interested in how your top prospects want to be remembered.",
  "Charitable bequests, gifts in wills, are the most popular planned gift by far.",
  "Follow Sherry Quam Taylor's admonition: be relational, be yourself.",
  "You can open conversations and reach solicitation inside a single week.",
];

export default function ThreeStepLaunch() {
  return (
    <>
      <section className="w-full bg-white px-4 pb-5 pt-12 md:px-[60px] md:pb-5 md:pt-20">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8 md:gap-12">
          <div className="mx-auto flex max-w-[830px] flex-col gap-3.5 text-center md:gap-[18px]">
            <p className="font-script text-2xl leading-[33.6px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
              Signature framework
            </p>
            <div className="flex flex-col gap-4">
              <h2 className="text-[28px] font-bold leading-[39.2px] text-[#00150b] md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
                The Martignetti 3-step, 1-week Planned Giving launch
              </h2>
              <p className="text-base leading-[22.4px] tracking-[-0.16px] text-[#494949]">
                Everything you need to inaugurate Planned Giving at your
                nonprofit within a week. These are the steps you can start
                taking even next week to launch your Planned Giving program.
                Together they'll equip you to open conversations and get to
                solicitations of your top prospects, all within a week.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col gap-4 md:flex-row md:gap-6">
              {STEPS.map((s) => (
                <div
                  key={s.num}
                  className="flex flex-1 flex-col gap-5 rounded-2xl border border-[#e2e2e2] p-6 md:gap-12 md:border-0 md:p-9"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgba(238,238,238,0.5) 0%, rgba(136,136,136,0) 100%)",
                  }}
                >
                  <p className="font-script text-[40px] leading-[56px] text-[#079669]">
                    {s.num}
                  </p>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-semibold leading-7 text-[#00150b]">
                      {s.title}
                    </h3>
                    <p className="text-base leading-[22.4px] tracking-[-0.16px] text-[#494949]">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-6 rounded-2xl bg-[#079669] p-6 md:flex-row md:items-center md:gap-12 md:p-9">
              <p className="whitespace-nowrap text-center font-script text-[40px] leading-[56px] text-white md:shrink-0">
                Follow Up
              </p>
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold leading-7 text-white">
                  Set up tracking and follow through
                </h3>
                <p className="text-base leading-[22.4px] tracking-[-0.16px] text-white">
                  If they say yes, thank them effusively. If they say maybe,
                  agree on a clear next step and timeframe. Put a reminder in
                  your calendar or CRM. Keep all regular communications
                  flowing you want the donor to know that a planned gift is
                  additive, not a substitute for their other giving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TakeawayMarquee items={TAKEAWAYS} />
    </>
  );
}
