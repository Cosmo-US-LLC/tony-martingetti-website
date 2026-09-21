import REASON_HEART from "@/assets/images/home/icons/reason-heart.svg";
import REASON_CALL from "@/assets/images/home/icons/reason-call.svg";
import REASON_WEBINAR from "@/assets/images/home/icons/reason-webinar.svg";

const REASONS = [
  {
    icon: REASON_HEART,
    title: "The book",
    desc: "Get the full playbook, not just a preview.",
  },
  // {
  //   icon: REASON_CALL,
  //   title: "A Group call with Tony",
  //   desc: "Twenty minutes, one on one, on your organisation's Planned Giving program. Limited to the first 50 people on the list.",
  // },
  {
    icon: REASON_WEBINAR,
    title: "The webinar series, free",
    desc: "Order the book and Tony's complete four-part webinar series is yours at no extra cost.",
  },
];

export default function WhyChoose() {
  return (
    <section className="w-full bg-white px-4 py-12 md:px-[60px] md:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8 md:gap-12">
        <div className="mx-auto flex max-w-[686px] flex-col gap-4 text-center md:gap-[18px]">
          <p className="font-script text-2xl leading-[33.6px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
            Why Choose me?
          </p>
          <div className="flex flex-col gap-2 md:gap-2.5">
            <h2 className="text-[28px] font-bold leading-[39.2px] text-[#151515] md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
              What you get when you order
            </h2>
            {/* <p className="text-base leading-[22.4px] tracking-[-0.16px] text-[#494949]">
              All three, the moment you order.
            </p> */}
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          {REASONS.map((r) => (
            <div
              key={r.title}
              className="flex flex-col items-center gap-4 p-5 text-center md:flex-1 md:items-start md:gap-[84px] md:p-6 md:text-left"
              style={{
                background:
                  "linear-gradient(180deg, rgba(47, 172, 102, 0.16) 0%, rgba(47, 172, 102, 0.00) 100%)",
                borderRadius: "16px",
              }}
            >
              <img src={r.icon} alt="" className="h-8 w-8 md:h-[54px] md:w-[54px]" />
              <div className="flex flex-col items-center gap-2 md:items-start md:gap-3">
                <h3 className="text-xl font-semibold leading-7 text-[#151515] md:text-2xl md:font-bold md:leading-[28.8px] md:tracking-[-0.48px]">
                  {r.title}
                </h3>
                <p className="text-base leading-[22.4px] tracking-[-0.16px] text-[#494949] md:text-base">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-2">
          <a
            href="https://tony.ma/Amazon"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full cursor-pointer rounded-lg bg-[#079669] px-6 py-4 text-center text-base font-bold leading-6 text-white transition-colors hover:bg-[#057a56] md:w-fit"
          >
            Order Now
          </a>
          {/* <p className="text-center text-sm leading-[19.6px] text-[#494949]">
            No purchase needed. First 50 on the list also get a group call
            with Tony.
          </p> */}
        </div>
      </div>
    </section>
  );
}
