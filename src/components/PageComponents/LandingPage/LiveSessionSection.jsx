const CARDS = [
  {
    label: "You bring",
    title: "The thing that's stuck",
    desc: "No board buy-in. No idea who to approach. A donor conversation that stalled. Whatever is actually stopping your program from moving.",
  },
  {
    label: "Tony brings",
    title: "29 years of doing this",
    desc: "He built Planned Giving programs at Iona College and St. John's University from zero, and has helped clients raise $150M+ in bequests since.",
  },
  {
    label: "You leave with",
    title: "A clear next move",
    desc: "Where your Planned Giving effort should be pointed, what to do first, and what to stop wasting time on.",
  },
];

export default function LiveSessionSection() {
  return (
    <section className="w-full bg-[#fafafa] px-4 py-12 md:px-[60px] md:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8 md:gap-12">
        <div className="mx-auto flex max-w-[830px] flex-col gap-2 text-center">
          <p className="font-script text-2xl leading-[33.6px] text-[#059669] md:text-[32px] md:leading-[44.8px]">
            Waitlist Bonus · First 50 Only
          </p>
          <div className="flex flex-col gap-4">
            <h2 className="text-[28px] font-bold leading-[39.2px] text-[#00150b] md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
              A Live Working Session With Tony
            </h2>
            <p className="text-base leading-[22.4px] tracking-[-0.16px] text-[#494949]">
              Not a webinar and not a sales pitch. The first 50 people on the
              waitlist get a seat on a virtual session where Tony works
              through the real bottlenecks in your programs.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          {CARDS.map((c) => (
            <div
              key={c.label}
              className="flex flex-1 flex-col gap-3 rounded-2xl bg-white p-6 shadow-[0_0_24px_rgba(0,0,0,0.04)]"
            >
              <span className="w-fit rounded-lg bg-[#fde8f8] px-3 py-2">
                <span className="text-xs font-bold leading-[14.4px] text-[#951b81]">
                  {c.label}
                </span>
              </span>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold leading-[39.2px] text-black">
                  {c.title}
                </h3>
                <p className="text-lg leading-[26px] text-black">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
