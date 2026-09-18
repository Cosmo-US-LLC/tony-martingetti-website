import TESTIMONIAL_IMAGE from "@/assets/images/mybook/testimonial-image.webp";
import { scrollToWaitlistJoin } from "@/utils/scrollToWaitlistJoin";

const MYTHS = [
  "Planned Giving is only for our wealthy donors",
  "Planned Giving is too complicated",
  "Planned Giving requires expertise",
  "Planned Giving means offering lots of gift options",
  "Planned Giving will hurt our other fundraising",
  "Planned Giving means talking to donors about their death",
];

function XIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <path d="M6 6l12 12M18 6L6 18" stroke="#951b81" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function BookMyths() {
  return (
    <section className="w-full bg-[#fafafa] px-4 py-12 md:px-[60px] md:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8 md:flex-row md:gap-20">
        <div className="flex flex-col gap-5 md:w-1/2 md:gap-6">
          <div className="flex flex-col gap-2">
            <p className="font-script text-2xl leading-[33.6px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
              Myths this book destroys
            </p>
            <h2 className="text-[28px] font-bold leading-[39.2px] text-[#151515] md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
              Tony's top 6 myths of Planned Giving
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {MYTHS.map((m) => (
              <div key={m} className="flex items-center gap-2">
                <XIcon />
                <p className="text-base leading-[22.4px] tracking-[-0.16px] text-[#151515]">
                  {m}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollToWaitlistJoin()}
            className="w-full cursor-pointer rounded-lg bg-[#079669] px-6 py-3 text-base font-semibold leading-6 tracking-[-0.5px] text-white md:w-fit"
          >
            See all six debunked
          </button>

          <div className="flex flex-col gap-6 rounded-2xl bg-[#fde8f8] p-6">
            <p className="text-xl font-semibold leading-7 tracking-[0.2px] text-[#951b81]">
              "Your mission deserves a longer runway. Start building it next
              week."
            </p>
            <p className="text-lg font-semibold leading-[25px] tracking-[0.18px] text-[#151515]">
              - Tony Martignetti
            </p>
          </div>
        </div>

        <div className="md:w-1/2">
          <img
            src={TESTIMONIAL_IMAGE}
            alt="Tony Martignetti"
            className="h-[320px] w-full rounded-2xl object-cover md:h-full"
          />
        </div>
      </div>
    </section>
  );
}
