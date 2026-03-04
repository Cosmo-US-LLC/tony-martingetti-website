const STATS = [
  { value: "75-90%", label: "Of Gifts Through Wills" },
  { value: "$2.2M", label: "Member Success Story" },
  { value: "1,000+", label: "Programs to Launch" },
];

export default function StatsCard() {
  return (
    <div className="w-full bg-[#F8FAFC] py-8 md:py-8">
      <div
        className="items-center justify-between gap-.5 md:max-w-[1210px] max-w-[390px] mx-auto md:-mt-28 -mt-55 z-10 relative flex md:flex-row flex-col px-10 py-10 md:py-10 md:gap-8 md:px-20 overflow-hidden rounded-xl border-b-4 border-[#10b981] bg-white shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] "
        data-name="Background+HorizontalBorder+Shadow"
      >
        {STATS.map((stat, index) => (
          <div key={stat.label} className="w-full">
            <div
              className="flex flex-col items-center gap-2 text-center justify-center"
              data-name="Container"
            >
              <p className="font-heading text-[24px] font-bold md:leading-[48px] leading-[32px] tracking-[0.96px] text-[#059669] md:text-[48px]">
                {stat.value}
              </p>
              <p className="font-sans text-[16px] md:text-[18px] font-bold uppercase md:leading-5 leading-6 md:tracking-[0.7px] tracking-[1px] text-[#6b7280]">
                {stat.label}
              </p>
            </div>

            {/* Render line only if NOT last item */}
            {index !== STATS.length - 1 && (
              <div className="w-full border md:hidden block my-4"></div>
            )}
        </div>
      ))}
      </div>
    </div>
  );
}
