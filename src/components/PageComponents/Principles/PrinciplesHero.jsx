import HERO_BG from "@/assets/images/principles/hero-bg.webp";

export default function PrinciplesHero() {
  return (
    <section className="relative -mt-[100px] w-full overflow-hidden bg-[#00150b]">
      <img
        src={HERO_BG}
        alt="Tony Martignetti"
        className="absolute inset-0 h-full w-full object-cover object-[50%_15%] md:object-[75%_30%]"
      />
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,21,11,1) 0%, rgba(0,21,11,0) 45%)",
        }}
      />
      <div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,21,11,1) 0%, rgba(0,21,11,0.33) 50%, rgba(0,21,11,1) 100%)",
        }}
      />

      <div className="relative flex min-h-[500px] w-full flex-col px-4 pt-[140px] pb-12 md:min-h-[100vh] md:px-[60px] md:pt-[188px] md:pb-0">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-7 md:gap-4">
          <div className="flex max-w-[366px] flex-col gap-3 md:pt-0 pt-25 md:max-w-[616px]">
            <p className="font-script text-2xl leading-[33.6px] text-[#2fac66] md:text-[32px] md:leading-[44.8px]">
              Our principles
            </p>
            <h1 className="font-landing text-[40px] font-bold leading-[48px] tracking-[-0.8px] text-white md:text-[48px] md:leading-[57.6px] md:tracking-[-0.96px]">
              The frameworks behind every bequest program we build
            </h1>
            <p className="text-base leading-[22.4px] tracking-[-0.16px] text-[#c6c6c6] md:text-xl md:leading-7 md:tracking-[-0.5px]">
              Three proven steps drawn directly from Tony's new book that
              remove the complexity, the guesswork and the excuses, so any
              nonprofit can start Planned Giving within a week.
            </p>
          </div>

          <div>
            <a
              href="https://tony.ma/Amazon"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full cursor-pointer rounded-lg bg-[#951b81] px-3.5 py-3.5 text-center text-base font-semibold leading-6 tracking-[-0.5px] text-white transition-colors hover:bg-[#7a1569] md:w-fit md:px-6 md:py-3"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
