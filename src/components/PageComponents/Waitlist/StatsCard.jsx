const STATS = [
  { value: "75-90%", label: "Of Gifts Through Wills" },
  { value: "$2.2M", label: "Member Success Story" },
  { value: "1,000+", label: "Programs to Launch" },
];

export default function StatsCard() {
  return (
    <div
      className="flex flex-col items-center justify-center gap-6 overflow-hidden rounded-xl border-b-4 border-[#10b981] bg-white px-6 py-8 shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] sm:flex-row sm:gap-8 sm:px-10 sm:py-10 md:gap-8 md:px-10"
      data-name="Background+HorizontalBorder+Shadow"
    >
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col items-center gap-2 text-center"
          data-name="Container"
        >
          <p className="font-heading text-4xl font-bold leading-[48px] tracking-[0.96px] text-[#059669] md:text-[48px]">
            {stat.value}
          </p>
          <p className="font-sans text-sm font-bold uppercase leading-5 tracking-[0.7px] text-[#6b7280]">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
