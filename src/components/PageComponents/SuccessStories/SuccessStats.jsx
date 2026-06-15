import { SUCCESS_STATS } from "@/constants/successStories";

export default function SuccessStats() {
  return (
    <section className="w-full bg-white py-10 md:py-12" data-name="Success Stats">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-center gap-0 px-4 md:flex-row md:gap-6 md:px-8">
        {SUCCESS_STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex w-full max-w-[290px] flex-col items-center gap-5 px-8 py-9 text-center"
          >
            <p className="font-heading text-[40px] font-bold uppercase leading-7 tracking-[0.36px] text-[#059669] md:text-[55px]">
              {stat.value}
            </p>
            <p className="font-sans text-base leading-[22.75px] text-[#0f172a]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
