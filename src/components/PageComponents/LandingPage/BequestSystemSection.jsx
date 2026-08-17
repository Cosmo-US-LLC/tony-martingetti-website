import iconReasons from "@/assets/images/landing_page/icons/icon_reasons.svg";
import iconMyths from "@/assets/images/landing_page/icons/icon_myths.svg";
import iconMeal from "@/assets/images/landing_page/icons/icon_meal.svg";
import iconLaunch from "@/assets/images/landing_page/icons/icon_launch.svg";
import { BEQUEST_SYSTEM_CARDS } from "@/constants/landingPage";

const ICONS = [iconReasons, iconMyths, iconMeal, iconLaunch];

export default function BequestSystemSection() {
  return (
    <section className="w-full bg-[#0A1730] py-14 md:py-[60px]" data-name="The Complete Bequest-First System">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-4 md:px-8">
        <div className="flex flex-col items-center gap-3 text-center lg:flex-row lg:items-start lg:gap-10 lg:text-left">
          <div className="flex flex-1 flex-col items-center gap-3 lg:items-start">
            <span className="font-script text-[20px] leading-[28px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
              Inside The Book
            </span>
            <h2 className="text-[24px] font-bold leading-[28.8px] tracking-[-0.48px] text-white md:text-[40px] md:leading-[46px] md:tracking-[-0.8px]">
              The Complete Bequest-First System
            </h2>
          </div>
          <p className="flex-1 text-base leading-[22.4px] tracking-[-0.16px] text-white lg:pt-2">
            Not a theory book. The actual framework, tested and refined
            across 29 years of planned giving work.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2">
          {BEQUEST_SYSTEM_CARDS.map((card, index) => (
            <div
              key={card.title}
              className="flex flex-col gap-3 rounded-3xl bg-white/[0.04] p-6"
            >
              <img src={ICONS[index]} alt="" className="h-10 w-10" aria-hidden="true" />
              <h3 className="text-base font-semibold leading-6 text-white md:text-[28px] md:font-bold md:leading-[39.2px]">
                {card.title}
              </h3>
              <p className="text-base leading-6 text-white md:text-xl md:leading-7 md:tracking-[-0.5px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
