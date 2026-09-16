import WEBINAR_IMAGE from "@/assets/images/landing/webinar-image.png";

const ITEMS = [
  {
    title: "Wealth Screening",
    desc: "You have the data you need in your CRM database to identify your Top Prospects for Planned Giving. No subscription required.",
  },
  {
    title: "A Major Gifts Department",
    desc: "75 to 90% of planned gifts are simply a line in someone's will. You don't need a specialist team to start finding them, just a system.",
  },
  {
    title: "A 12-Month Rollout",
    desc: 'A bequest-first program doesn\'t need a strategic plan, a task force, or a year of "getting ready." It needs a practical, repeatable process.',
  },
];

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
      <path d="M5 5l10 10M15 5L5 15" stroke="#951b81" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function DontNeedSection() {
  return (
    <section className="w-full bg-white px-4 py-12 md:px-[60px] md:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8 md:gap-12">
        <div className="mx-auto flex max-w-[830px] flex-col gap-2 text-center">
          <p className="font-script text-2xl leading-[33.6px] text-[#059669] md:text-[32px] md:leading-[44.8px]">
            What You Don't Need
          </p>
          <div className="flex flex-col gap-4">
            <h2 className="text-[28px] font-bold leading-[39.2px] text-[#00150b] md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
              You Don't Need What They're Selling You
            </h2>
            <p className="text-base leading-[22.4px] tracking-[-0.16px] text-[#494949]">
              Twenty-nine years of Planned Giving work taught Tony what
              actually moves a bequest forward, and it's rarely the thing
              nonprofits are told to buy first.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:gap-12">
          <img
            src={WEBINAR_IMAGE}
            alt=""
            className="h-[280px] w-full rounded-2xl object-cover md:h-auto md:w-1/2"
          />
          <div className="flex flex-col gap-4 md:w-1/2">
            {ITEMS.map((item) => (
              <div key={item.title} className="flex flex-col gap-5 rounded-lg bg-[#fafafa] p-6">
                <div className="flex items-center gap-2">
                  <XIcon />
                  <p className="font-script text-base leading-6 text-[#951b81]">
                    Not required
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold leading-[28.8px] tracking-[-0.48px] text-black">
                    {item.title}
                  </h3>
                  <p className="text-base leading-[22.4px] tracking-[-0.16px] text-[#494949]">
                    {item.desc}
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
