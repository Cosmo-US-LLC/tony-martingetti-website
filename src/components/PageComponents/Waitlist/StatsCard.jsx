const STATS = [
  { value: "75-90%", label: "Of Gifts Through Wills" },
  { value: "$2.2M", label: "Member Success Story" },
  { value: "1,000+", label: "Programs to Launch" },
];

export default function StatsCard() {
  return (
    <div className="w-full bg-[#F8FAFC] py-8 md:py-8">
      <div
        className="items-center justify-between gap-6 md:max-w-[1210px] max-w-[340px] mx-auto md:-mt-20 -mt-16 z-10 relative flex md:flex-row flex-col px-10 py-10 md:gap-8 md:px-20 overflow-hidden rounded-xl border-b-4 border-[#10b981] bg-white shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] "
        data-name="Background+HorizontalBorder+Shadow"
      >
        {STATS.map((stat) => (
          <>
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 text-center"
              data-name="Container"
            >
              <p className="font-heading text-[24px] font-bold md:leading-[48px] leading-[32px] tracking-[0.96px] text-[#059669] md:text-[48px]">
                {stat.value}
              </p>
              <p className="font-sans text-sm font-bold uppercase md:leading-5 leading-4 md:tracking-[0.7px] tracking-[1px] text-[#6b7280]">
                {stat.label}
              </p>
            </div>
            <div className="w-full border md:hidden block"></div>
          </>
        ))}
      </div>
    </div>
  );
}
