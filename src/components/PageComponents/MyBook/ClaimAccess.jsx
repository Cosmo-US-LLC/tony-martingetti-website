import WEBINAR_IMAGE from "@/assets/images/mybook/webinar-image.png";

const SESSIONS = [
  {
    num: "Session 01",
    title: "Find your best prospects",
    desc: "Identify the bequest prospects already sitting in your database, and know which ones to approach first.",
    image: true,
  },
  {
    num: "Session 02",
    title: "Bequests and other gift vehicles",
    desc: "The gift types every nonprofit should understand, explained without the legal fog.",
  },
  {
    num: "Session 03",
    title: "Stewardship, recognition and tracking",
    desc: "Keep donors close after the commitment, and keep records clean enough to survive staff turnover.",
  },
  {
    num: "Session 04",
    title: "Marketing your program",
    desc: "A multichannel plan that keeps Planned Giving in front of your donors all year.",
  },
];

const CLAIM_STEPS = [
  {
    label: "First",
    desc: "Identify your top Planned Giving prospects from your existing database.",
  },
  {
    label: "Next",
    desc: "Visit the redemption page and enter your email and order number.",
  },
  {
    label: "Finally",
    desc: "Your learning portal login arrives by email and the four sessions unlock.",
  },
];

export default function ClaimAccess() {
  return (
    <section className="w-full bg-white px-4 py-12 md:px-[60px] md:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8 md:gap-12">
        <div className="mx-auto flex max-w-[830px] flex-col gap-2 text-center">
          <p className="font-script text-2xl leading-[33.6px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
            Free with every order
          </p>
          <div className="flex flex-col gap-4">
            <h2 className="text-[28px] font-bold leading-[39.2px] text-[#151515] md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
              Order the book, get the webinar series free
            </h2>
            <p className="text-base leading-[22.4px] tracking-[-0.16px] text-[#494949]">
              Four recorded sessions with Tony, delivered in your learning
              portal. Watch on your own schedule, as many times as you like.
              Nothing extra to pay.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:gap-4">
          <div className="flex flex-col justify-start gap-3.5 overflow-hidden rounded-lg bg-[#151515] md:w-[40%] md:shrink-0">
            <p className="px-6 pt-6 font-script text-2xl leading-[33.6px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
              {SESSIONS[0].num}
            </p>
            <div className="flex flex-col gap-2 px-6">
              <h3 className="text-2xl font-bold leading-9 tracking-[-0.56px] text-white">
                {SESSIONS[0].title}
              </h3>
              <p className="text-base leading-6 tracking-[-0.16px] text-[#aeaeae]">
                {SESSIONS[0].desc}
              </p>
            </div>
            <img
              src={WEBINAR_IMAGE}
              alt=""
              className="mt-auto w-full object-contain "
            />
          </div>

          <div className="flex flex-col gap-4 md:w-[60%]">
            {SESSIONS.slice(1).map((s) => (
              <div
                key={s.num}
                className="flex flex-col gap-3.5 rounded-lg bg-[#fafafa] p-6"
              >
                <p className="font-script text-2xl leading-[33.6px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
                  {s.num}
                </p>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold leading-9 tracking-[-0.56px] text-[#151515]">
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

        <div className="flex flex-col gap-8 rounded-2xl bg-[#0a1730] p-6 md:gap-16 md:p-8">
          <h3 className="text-center text-2xl font-bold leading-[28.8px] text-white md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
            How to claim your access
          </h3>
          <div className="flex flex-col gap-6 md:flex-row md:gap-12">
            {CLAIM_STEPS.map((s, i) => (
              <div
                key={s.label}
                className="flex flex-1 flex-row items-start gap-4 md:flex-col md:gap-5"
              >
                <div className="flex items-center gap-4 md:w-full">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-[6px] border-[#023d29] bg-[#079669]" />
                  {i < CLAIM_STEPS.length - 1 && (
                    <div className="hidden h-0.5 flex-1 bg-[#ecfef8]/20 md:block" />
                  )}
                </div>
                <div className="flex flex-col gap-1 md:gap-2">
                  <h4 className="text-xl font-bold leading-[27px] text-white md:text-2xl md:leading-[39.2px]">
                    {s.label}
                  </h4>
                  <p className="text-base leading-[22.4px] tracking-[-0.16px] text-[#c6c6c6]">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm leading-5 text-white">
            The claim link is printed inside the book and lives at{" "}
            <span className="text-[#2fac66]">the redemption page.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
