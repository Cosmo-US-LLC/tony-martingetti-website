const STATS = [
  {
    value: "$124T",
    desc: "Projected to change hands in the U.S. through 2048",
    source: "Cerulli Associates, Dec 2024",
  },
  {
    value: "$18T",
    desc: "Of that total is projected to go specifically to charity",
    source: "Cerulli Associates, Dec 2024",
  },
  {
    value: "$124T",
    desc: "Bequest giving grew in 2025 alone the strongest of any source",
    source: "Giving USA 2026",
  },
  {
    value: "3 of 4",
    desc: "Years bequests have grown 20%+, the last four years running",
    source: "Giving USA 2026",
  },
];

export default function MomentStatsSection() {
  return (
    <section className="w-full bg-[#fafafa] px-4 py-12 md:px-[60px] md:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8 md:gap-12">
        <div className="mx-auto flex max-w-[830px] flex-col gap-2 text-center">
          <p className="font-script text-2xl leading-[33.6px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
            The Moment
          </p>
          <div className="flex flex-col gap-4">
            <h2 className="text-[28px] font-bold leading-[39.2px] text-[#151515] md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
              $18 Trillion Is Moving.
              <br />
              Most Nonprofits Aren't Positioned
            </h2>
            <p className="text-base leading-[22.4px] tracking-[-0.16px] text-[#494949]">
              The largest generational wealth transfer in history is already
              underway and it's showing up in the giving data right now.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {STATS.map((s, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 rounded-2xl px-4 py-8 text-center md:px-6 md:py-12"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, rgba(238,238,238,0.7) 0%, rgba(136,136,136,0.08) 100%)",
                }}
              >
                <p className="font-script text-3xl leading-[45px] text-[#079669] md:text-[64px] md:leading-[89.6px]">
                  {s.value}
                </p>
                <p className="text-sm leading-5 text-[#151515] md:text-base md:leading-[22.4px]">
                  {s.desc}
                </p>
                <span className="mx-auto rounded-lg bg-[#ededed] px-3 py-3 text-xs leading-[19.6px] text-[#151515]">
                  {s.source}
                </span>
              </div>
            ))}
          </div>
          <p className="mx-auto max-w-[620px] text-center text-sm leading-[19.6px] text-[#323232]">
            Most small and mid-size nonprofits don't have a plan built to
            capture any of it. Planned Giving Accelerated is your plan.
          </p>
        </div>
      </div>
    </section>
  );
}
