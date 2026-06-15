const STATS = [
  { value: "$150M+", label: "In bequests secured" },
  { value: "29+", label: "Years in planned giving" },
  { value: "1000+", label: "Programs to launch" },
  { value: "750+", label: "Podcast Episodes" },
];

function StatCard({ value, label }) {
  return (
    <div className="flex h-[180px] flex-col justify-between rounded-xl bg-white px-4 py-6 md:h-[210px] md:px-6 md:py-8">
      <p className="font-sans text-base font-normal uppercase leading-[22.75px] text-[#0f172a] md:text-lg">
        {label}
      </p>
      <p className="font-heading text-[40px] font-bold uppercase leading-7 tracking-[0.36px] text-[#059669] md:text-[55px]">
        {value}
      </p>
    </div>
  );
}

export default function ExpertStats() {
  return (
    <section
      className="w-full bg-[#f8fafc] py-12 md:py-[60px]"
      data-name="Expert Stats"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-4 md:px-8 lg:flex-row lg:items-start lg:gap-20">
        <div className="flex flex-1 flex-col justify-center gap-1.5">
          <p className="font-sans text-base font-semibold leading-[22px] text-[#059669]">
            Planned Giving Expert
          </p>
          <h2 className="heading_two max-w-[578px] text-[#0f172a] md:leading-[46px]">
            Turn Supporter Loyalty Into Legacy Gifts That Fund Your Mission for
            Decades
          </h2>
        </div>

        <div className="grid w-full max-w-[576px] grid-cols-2 gap-5 sm:grid-cols-2 lg:shrink-0">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
