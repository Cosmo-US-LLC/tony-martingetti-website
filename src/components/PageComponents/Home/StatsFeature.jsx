import ILLUSTRATION from "@/assets/images/home/illustration.webp";
import AnimatedStat from "@/components/common/AnimatedStat";

const STATS = [
  {
    targets: [75, 90],
    format: ([a, b]) => `${Math.round(a)}–${Math.round(b)}%`,
    desc: "Of gifts come through wills",
  },
  {
    targets: [2.2],
    format: ([v]) => `$${v.toFixed(1)}M`,
    desc: "Raised by one nonprofit",
  },
  {
    targets: [1000],
    format: ([v]) => `${Math.round(v).toLocaleString()}+`,
    desc: "Programs to launch",
  },
];

export default function StatsFeature() {
  return (
    <section className="w-full bg-white px-4 pt-12 md:px-[60px] md:pt-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8 md:gap-20">
        <div className="flex flex-col gap-8 md:flex-row md:flex-wrap md:items-start md:justify-center md:gap-20">
          {STATS.map((s) => (
            <div
              key={s.desc}
              className="flex flex-col items-center gap-3 text-center md:items-start md:gap-6 md:text-left"
            >
              <AnimatedStat
                targets={s.targets}
                format={s.format}
                className="font-script text-[64px] leading-[89.6px] text-[#079669]"
              />
              <p className="text-xl leading-7 tracking-[-0.5px] text-[#151515] md:text-[28px] md:leading-[39.2px] md:tracking-normal">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:items-stretch md:gap-20">
          <div className="flex flex-col gap-6 md:w-1/2 md:gap-6">
            <div className="flex flex-col gap-4">
              <p className="font-script text-2xl leading-[33.6px] text-[#079669] md:text-[32px] md:leading-[50px]">
                This is....
              </p>
              <h2 className="text-[28px] font-bold leading-[39.2px] text-[#151515] md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
                You know your donors want to leave a legacy. But where do you
                start?
              </h2>
              <p className="text-base leading-[22.4px] tracking-[-0.16px] text-[#494949]">
                Most nonprofits leave millions on the table because they
                don't have a Planned Giving program.
                <br />
                <br />
                The challenge is knowing how to ask, who to approach, and how
                to build a program that lasts. That's exactly what the book
                and the webinar series walk you through.
              </p>
            </div>

            <div
              className="flex flex-col gap-2 rounded-xl px-5 py-5"
              style={{
                backgroundImage: "linear-gradient(to bottom, #ffffff, #f9dff5)",
              }}
            >
              <p className="text-xl font-semibold leading-7 text-[#951b81] md:text-2xl md:font-bold md:leading-[28.8px] md:tracking-[-0.48px]">
                75–90% of planned gifts
              </p>
              <p className="text-sm leading-[19.6px] text-[#951b81] md:text-base md:leading-[22.4px] md:tracking-[-0.16px]">
                Come through simple wills and bequests, and your donors are
                ready to give.
              </p>
            </div>

            <a
              href="https://tony.ma/Amazon"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full cursor-pointer rounded-lg bg-[#079669] px-3.5 py-3.5 text-center text-base font-semibold leading-[22.4px] tracking-[-0.16px] text-white transition-colors hover:bg-[#057a56] md:w-fit md:px-6 md:py-3"
            >
              Order Now
            </a>
          </div>

          <div className="md:w-1/2">
            <img
              src={ILLUSTRATION}
              alt="Tony Martignetti"
              className="h-[302px] w-full rounded-xl object-cover md:h-full md:min-h-[603px] md:rounded-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
