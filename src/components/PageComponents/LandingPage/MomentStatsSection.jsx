import { MOMENT_STATS } from "@/constants/landingPage";

export default function MomentStatsSection() {
  return (
    <section className="w-full bg-[#FAFAFA] py-14 md:py-[60px]" data-name="The Moment">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-4 md:px-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="font-script text-[20px] leading-[28px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
            The Moment
          </span>
          <h2 className="max-w-[720px] text-[24px] font-bold leading-[28.8px] tracking-[-0.48px] text-[#151515] md:text-[40px] md:leading-tight md:tracking-[-0.8px]">
            $18 Trillion Is Moving. Most Nonprofits Aren&apos;t Positioned
          </h2>
          <p className="max-w-[620px] text-base leading-6 text-[#494949]">
            The largest generational wealth transfer in history is already
            underway and it&apos;s showing up in the giving data right now.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {MOMENT_STATS.map((stat) => (
            <div
              key={stat.description}
              className="flex flex-col items-center gap-4 rounded-xl px-6 py-12 text-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(238,238,238,0.4) 0%, rgba(136,136,136,0) 100%)",
              }}
            >
              <div className="flex flex-col items-center gap-6">
                <span className="font-script text-[32px] leading-[44.8px] text-[#079669] md:text-[64px] md:leading-[89.6px]">
                  {stat.value}
                </span>
                <p className="text-base leading-6 text-[#151515]">
                  {stat.description}
                </p>
              </div>
              <span className="flex w-full items-center justify-center rounded-lg bg-[#EDEDED] px-2.5 py-2.5 text-xs text-[#151515]">
                {stat.source}
              </span>
            </div>
          ))}
        </div>

        <p className="mx-auto max-w-[620px] text-center text-sm leading-5 text-[#323232]">
          Most small and mid-size nonprofits don&apos;t have a plan built to
          capture any of it. <span className="font-bold">Planned Giving
          Accelerated</span> is that plan.
        </p>
      </div>
    </section>
  );
}
