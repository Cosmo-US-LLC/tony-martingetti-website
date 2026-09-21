import STEP1 from "@/assets/images/home/icons/step-01.svg";
import STEP2 from "@/assets/images/home/icons/step-02.svg";
import STEP3 from "@/assets/images/home/icons/step-03.svg";
import STEP4 from "@/assets/images/home/icons/step-04.svg";

const CARDS = [
  {
    num: "#01",
    icon: STEP1,
    title: "Find your best prospects",
    desc: "Identify the bequest prospects already sitting in your database, and know which ones to approach first.",
  },
  {
    num: "#02",
    icon: STEP2,
    title: "Bequests and other gift vehicles",
    desc: "The gift types every nonprofit should understand, explained without the legal fog.",
  },
  {
    num: "#03",
    icon: STEP3,
    title: "Stewardship, recognition and tracking",
    desc: "Keep donors close after the commitment, and keep records clean enough to survive staff turnover.",
  },
  {
    num: "#04",
    icon: STEP4,
    title: "Marketing your program",
    desc: "A multichannel plan that keeps Planned Giving in front of your donors all year.",
  },
];

export default function WebinarSeries() {
  return (
    <section className="w-full bg-[#0a1730] px-4 py-12 md:px-[60px] md:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-10 md:gap-12">
        <div className="mx-auto flex max-w-[800px] flex-col gap-3 text-center md:gap-4">
          <h2 className="text-[28px] font-bold leading-[39.2px] text-white md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
            Inside the webinar series
          </h2>
          <p className="text-base leading-[22.4px] tracking-[-0.16px] text-[#c6c6c6]">
            Four recorded sessions in your learning portal. Watch on your own
            schedule, as many times as you like. Yours free with the book.
          </p>
        </div>

        <div className="flex flex-col gap-5 md:flex-row md:gap-6">
          {CARDS.map((c) => (
            <div
              key={c.num}
              className="flex flex-col items-center gap-5 rounded-2xl bg-white/[0.02] p-5 text-center md:flex-1 md:items-start md:gap-8 md:px-6 md:pb-12 md:pt-12 md:text-left"
            >
              <p
                className="font-script inline-block w-fit bg-clip-text text-[32px] leading-[44.8px] text-transparent"
                style={{
                  backgroundImage: "linear-gradient(to right, #079669, #bd69af)",
                }}
              >
                {c.num}
              </p>
              <img src={c.icon} alt="" className="h-[180px] w-[180px]" />
              <div className="flex flex-col items-center gap-2 md:items-start md:gap-4">
                <h3 className="text-xl font-semibold leading-7 text-white md:text-[28px] md:font-bold md:leading-9 md:tracking-[-0.56px]">
                  {c.title}
                </h3>
                <p className="text-base leading-[22.4px] tracking-[-0.16px] text-[#c6c6c6]">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto max-w-[800px] text-center text-base leading-[22.4px] tracking-[-0.16px] text-white md:text-sm md:leading-[19.6px]">
          After you order, claim your access at the redemption page and the
          series unlocks in your learning portal.
        </p>
      </div>
    </section>
  );
}
