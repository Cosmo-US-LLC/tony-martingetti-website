import HERO_BG from "@/assets/images/home/hero-bg.webp";
import hero_bg_mobile from "@/assets/images/home/hero-bg-mobile.webp";

export default function HeroSection() {
  return (
    <section className="relative -mt-[100px] w-full overflow-hidden bg-[#151515]">
      {/* Desktop: photo is mirrored so the subject sits on the right, facing the headline */}
      <img
        src={HERO_BG}
        alt=""
        className="absolute inset-0 hidden h-full w-full -scale-x-100 object-cover object-center md:block"
      />

      {/* Mobile: its own crop, zoomed into the subject (matches Figma's mobile frame exactly) */}
      {/* <div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage: `url(${hero_bg_mobile})`,
          backgroundRepeat: "no-repeat",
          // backgroundSize: "268.77% 100%",
          // backgroundPosition: "10.51% 0%",
        }}
      /> */}
      <img
        src={hero_bg_mobile}
        alt=""
        className="absolute inset-0 block h-full w-full object-cover md:hidden"
      />
      {/* <div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(21,21,21,0) 0%, rgba(21,21,21,0.7) 50%, rgba(21,21,21,1) 100%)",
        }}
      /> */}

      <div className="relative flex min-h-[100vh] w-full flex-col px-4 pt-[180px] md:min-h-[100vh] md:px-[60px] md:pt-[172px]">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-7 md:gap-4">
          <div className="flex max-w-[358px] flex-col gap-1 md:max-w-[665px] md:gap-4">
            <p className="font-script text-2xl leading-[33.6px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
              Live now
            </p>
            <h1 className="font-landing text-[40px] font-bold leading-[48px] tracking-[-0.8px] text-white md:text-[48px] md:leading-[57.6px] md:tracking-[-0.96px]">
              <span className="md:hidden">
                Join 500+ nonprofits launching Planned Giving programs
              </span>
              <span className="hidden md:inline">
                The book that gets your Planned Giving program off the ground next week
              </span>
            </h1>
            <p className="mt-3.5 text-base leading-[22.4px] tracking-[-0.16px] text-[#c6c6c6] md:mt-0 md:max-w-[616px] md:text-xl md:leading-7 md:tracking-[-0.5px] md:text-white">
              Tony Martignetti's new book is live. Order it today and you get his complete four-part Planned Giving webinar series free, no extra cost.
            </p>
          </div>

          <div className="flex max-w-[358px] flex-col gap-3 md:max-w-[665px] md:gap-2">
            <a
              href="https://tony.ma/Amazon"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full cursor-pointer rounded-lg bg-[#951b81] px-3.5 py-3.5 text-center text-base font-semibold leading-[22.4px] text-white transition-colors hover:bg-[#7a1569] md:w-fit md:px-6 md:py-3"
            >
              Order Now
            </a>
            <p className="text-base leading-[22.4px] tracking-[-0.16px] text-[#939393] md:max-w-[470px] md:text-sm md:leading-[19.6px] md:tracking-normal">
              Available now on Amazon and Barnes & Noble.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
