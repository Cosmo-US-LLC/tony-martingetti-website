import HERO_BG from "@/assets/images/mybook/hero-bg.png";
import AMAZON_BADGE from "@/assets/images/mybook/amazon-badge-cropped.png";

export default function BookHero() {
  return (
    <section className="relative -mt-[100px] w-full overflow-hidden bg-[#151515]">
      <img
        src={HERO_BG}
        alt="Planned Giving Accelerated book"
        className="absolute inset-0 h-full w-full object-cover object-[75%_50%]"
      />
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 45%)",
        }}
      />
      <div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(21,21,21,1) 0%, rgba(21,21,21,0.33) 50%, rgba(21,21,21,1) 100%)",
        }}
      />

      <div className="relative flex min-h-[560px] w-full flex-col px-4 pt-[140px] pb-12 md:min-h-[770px] md:px-[60px] md:pt-[190px] md:pb-0">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 md:gap-6">
          <div className="flex max-w-[400px] flex-col gap-3 md:max-w-[680px] md:gap-4">
            <p className="font-script text-2xl leading-[33.6px] text-[#2fac66] md:text-[32px] md:leading-[44.8px]">
              Book is Now Live!
            </p>
            <h1 className="font-landing text-[36px] font-bold leading-[42px] tracking-[-0.8px] text-white md:text-[48px] md:leading-[57.6px] md:tracking-[-0.96px]">
              Planned Giving Accelerated
            </h1>
            <p className="text-base leading-[22.4px] tracking-[-0.16px] text-[#c6c6c6] md:text-xl md:leading-7 md:tracking-[-0.5px]">
              The Cut Through the Sh!t, No Nonsense, Practical, Step-by-Step
              Guide to Start Legacy Giving Fundraising at Your Small to
              Mid-Size Nonprofit Simply In One Week With Bequests.
            </p>
          </div>

          <div className="flex w-full max-w-[680px] flex-col gap-2.5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                className="w-full cursor-pointer rounded-lg bg-[#059669] px-6 py-4 text-base font-semibold leading-[22.4px] text-white sm:w-auto"
              >
                Order Now
              </button>
              <div className="flex w-full items-center justify-center gap-3 rounded-lg bg-white/10 px-6 py-4 sm:w-fit sm:justify-start">
                <img
                  src={AMAZON_BADGE}
                  alt="Amazon Kindle"
                  className="h-6 w-auto object-contain"
                />
                <p className="whitespace-nowrap text-sm leading-[19.6px] text-white/85">
                  Order on Amazon: Live Now
                </p>
              </div>
            </div>
            <p className="text-base leading-[22.4px] tracking-[-0.16px] text-white">
              Free opening chapter, sent immediately. No purchase needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
