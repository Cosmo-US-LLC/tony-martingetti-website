import BG from "@/assets/images/mybook/features-overlay.webp";

const STEPS = [
  {
    num: "01",
    title: "Step 01",
    desc: "Identify your top Planned Giving prospects from your existing database.",
  },
  {
    num: "02",
    title: "Step 02",
    desc: "Launch with gifts in wills, the most accessible planned gift.",
  },
  {
    num: "03",
    title: "Step 03",
    desc: "Cultivate and solicit your top prospects the right way.",
  },
];

export default function BookLaunchPlan() {
  return (
    <section className="relative w-full overflow-hidden md:h-[800px] h-[900px]">
      <img
        src={BG}
        alt="Tony Martignetti writing"
        className="absolute inset-0 h-full w-full object-cover object-[70%_25%] md:object-top"
      />
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.75) 35%, rgba(0,0,0,0) 65%)",
        }}
      />
      {/* <div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage:
            "linear-gradient(200deg, rgba(0,0,0,0.95) 35%, rgba(0,0,0,0.1) 75%)",
        }}
      /> */}

      <div className="relative flex w-full flex-col gap-40 px-4 py-12 md:gap-6 md:px-[60px] md:py-20">
        <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-2">
          <p className="font-script text-2xl leading-[33.6px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
            What you'll find inside
          </p>
          <h2 className="max-w-[220px] text-[28px] font-bold leading-[39.2px] text-white md:max-w-[620px] md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
            The Martignetti 3-step, 1-week Planned Giving launch
          </h2>
        </div>

        <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-4">
          <div className="flex flex-col gap-4 md:max-w-[620px]">
            {STEPS.map((s) => (
              <div
                key={s.num}
                className="flex items-center gap-6 rounded-lg bg-white p-6"
              >
                <p className="text-3xl font-bold leading-[48px] text-[#951b81] md:text-[48px]">
                  {s.num}
                </p>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold leading-[28.8px] tracking-[-0.48px] text-[#151515]">
                    {s.title}
                  </h3>
                  <p className="text-base leading-[22.4px] tracking-[-0.16px] text-[#494949]">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
