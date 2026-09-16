import AUTHOR_IMAGE from "@/assets/images/landing/author-image.png";

const PILLS = [
  "Since 1997 in Planned Giving",
  "Lawyer by training",
  "Host, Nonprofit Radio",
];

export default function AboutAuthorSection() {
  return (
    <section className="w-full bg-white px-4 py-12 md:px-[60px] md:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8 md:flex-row md:gap-20">
        <div className="flex flex-col gap-6 md:w-1/2">
          <div className="flex flex-col gap-2">
            <p className="font-script text-2xl leading-[33.6px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
              About The Author
            </p>
            <h2 className="text-[28px] font-bold leading-[39.2px] text-[#00150b] md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
              Twenty-Nine Years In The Room With Donors
            </h2>
          </div>

          <p className="text-base leading-[22.4px] tracking-[-0.16px] text-[#494949]">
            Tony Martignetti has worked in Planned Giving since 1997, first
            as director of Planned Giving at Iona College and St. John's
            University, where he built both programs from scratch, then as a
            consultant to nonprofits nationwide. He's helped his clients
            raise more than $150 million in bequests.
            <br />
            <br />
            He's a lawyer by training, a fundraiser by trade, and the host of
            Tony Martignetti Nonprofit Radio, where he's spent two decades
            explaining fundraising in plain English, not legalese.
          </p>

          <div className="flex flex-wrap gap-2">
            {PILLS.map((p) => (
              <span
                key={p}
                className="rounded-full bg-[#fff7fd] px-4 py-2.5 text-sm font-medium leading-5 text-[#951b81]"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="md:w-1/2">
          <img
            src={AUTHOR_IMAGE}
            alt="Tony Martignetti"
            className="h-[320px] w-full rounded-2xl object-cover md:h-[540px]"
          />
        </div>
      </div>
    </section>
  );
}
