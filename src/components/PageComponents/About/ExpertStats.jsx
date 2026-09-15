const STATS = [
  { value: "$150M+", desc: "In bequests secured" },
  { value: "29+", desc: "Years in Planned Giving" },
  { value: "1,000+", desc: "Programs to launch" },
  { value: "800+", desc: "Podcast episodes" },
];

export default function ExpertStats() {
  return (
    <section className="w-full bg-[#fafafa] px-4 py-12 md:px-[60px] md:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8 md:gap-12">
        <div className="mx-auto flex max-w-[830px] flex-col gap-3.5 text-center md:gap-[18px]">
          <p className="font-script text-2xl leading-[33.6px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
            Planned Giving expert
          </p>
          <h2 className="text-[28px] font-bold leading-[39.2px] text-[#151515] md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
            Turn supporter loyalty into legacy gifts that fund your mission
            for decades
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-2 md:flex md:gap-6">
          {STATS.map((s) => (
            <div
              key={s.desc}
              className="flex flex-col items-center gap-4 rounded-2xl px-6 py-10 text-center md:flex-1 md:gap-6 md:px-6 md:py-12"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(238,238,238,0.7) 0%, rgba(136,136,136,0.08) 100%)",
              }}
            >
              <p className="font-script text-2xl leading-[28.8px] text-[#079669] md:text-[48px] md:leading-[56px]">
                {s.value}
              </p>
              <p className="text-base leading-[22.4px] text-[#21021b] md:text-lg md:leading-[26px]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
