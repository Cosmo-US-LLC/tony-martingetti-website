import audienceImage from "@/assets/images/landing_page/dont_need/audience.png";
import { DONT_NEED_ITEMS } from "@/constants/landingPage";

function XIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path
        d="M1 1L9 9M9 1L1 9"
        stroke="#951B81"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function DontNeedSection() {
  return (
    <section className="w-full bg-white py-14 md:py-[60px]" data-name="You Don't Need">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-4 md:px-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="font-script text-[20px] leading-[28px] text-[#059669] md:text-[32px] md:leading-[44.8px]">
            What You Don&apos;t Need
          </span>
          <h2 className="text-[28px] font-bold leading-tight tracking-[-0.6px] text-[#00150B] md:text-[40px] md:tracking-[-0.8px]">
            You Don&apos;t Need What They&apos;re Selling You
          </h2>
          <p className="max-w-[620px] text-base leading-6 text-[#494949]">
            Twenty-nine years of planned giving work taught Tony what
            actually moves a bequest forward, and it&apos;s rarely the thing
            nonprofits are told to buy first.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-6">
          <div className="w-full shrink-0 overflow-hidden rounded-xl lg:max-w-[480px] lg:rounded-2xl">
            <img
              src={audienceImage}
              alt="Nonprofit conference audience"
              className="h-[280px] w-full object-cover lg:h-full"
            />
          </div>

          <div className="flex w-full flex-col gap-3.5">
            {DONT_NEED_ITEMS.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-2 rounded-lg bg-[#FAFAFA] p-5"
              >
                <span className="inline-flex w-fit items-center gap-1.5 font-script text-base text-[#951B81]">
                  <XIcon />
                  Not required
                </span>
                <h3 className="text-[20px] font-semibold leading-6 text-black md:text-2xl md:font-bold md:leading-[28.8px] md:tracking-[-0.48px]">
                  {item.title}
                </h3>
                <p className="text-base leading-6 text-[#494949]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
