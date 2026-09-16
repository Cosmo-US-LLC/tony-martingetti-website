import { scrollToSuccessStoriesJoin } from "@/utils/scrollToSuccessStoriesJoin";

const STATS = [
  { value: "$150M+", desc: "In bequests secured" },
  { value: "29+", desc: "Years in Planned Giving" },
  { value: "$2.2M", desc: "Raised by one Non-Profit" },
];

export default function SuccessStats() {
  return (
    <section className="w-full bg-white px-4 py-12 md:px-[60px] md:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-8 md:gap-12">
        <div className="mx-auto flex max-w-[830px] flex-col gap-3.5 text-center md:gap-[18px]">
          <p className="font-script text-2xl leading-[33.6px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
            Specialist in Planned Giving
          </p>
          <h2 className="text-[28px] font-bold leading-[39.2px] text-[#151515] md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
            Transforming loyal supporters into lasting legacy donors who
            sustain your mission for years to come
          </h2>
        </div>

        <div className="flex w-full flex-col gap-4 md:flex-row md:gap-6">
          {STATS.map((s) => (
            <div
              key={s.desc}
              className="flex flex-col items-center gap-2 rounded-xl px-4 py-6 text-center md:flex-1 md:gap-6 md:rounded-2xl md:px-6 md:py-12"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(238,238,238,0.7) 0%, rgba(136,136,136,0.08) 100%)",
              }}
            >
              <p className="font-script text-2xl leading-[33.6px] text-[#079669] md:text-[64px] md:leading-[89.6px]">
                {s.value}
              </p>
              <p className="text-sm font-semibold leading-[17.5px] text-[#151515] md:text-xl md:font-medium md:leading-7 md:tracking-[-0.5px]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollToSuccessStoriesJoin()}
          className="w-full cursor-pointer rounded-lg bg-[#079669] px-4 py-3 text-base font-semibold leading-[22.4px] text-white md:w-fit"
        >
          Get Free Chapter
        </button>
      </div>
    </section>
  );
}
