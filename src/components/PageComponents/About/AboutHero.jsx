import HERO_BG from "@/assets/images/about/hero-bg.png";

export default function AboutHero() {
  return (
    <section className="relative -mt-[100px] w-full overflow-hidden bg-[#21021b]">
      <img
        src={HERO_BG}
        alt="Tony Martignetti"
        className="absolute inset-0 h-full w-full object-cover object-[center_20%] md:object-[center_50%]"
      />
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 40%)",
        }}
      />
      <div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(21,21,21,1) 0%, rgba(21,21,21,0.33) 50%, rgba(21,21,21,1) 100%)",
        }}
      />

      <div className="relative flex min-h-[660px] w-full flex-col px-4 pt-[280px] pb-5 md:min-h-[770px] md:px-[60px] md:pt-[202px] md:pb-0">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-7 md:gap-4">
          <div className="flex max-w-[358px] flex-col gap-1 md:max-w-[616px] md:gap-3">
            <p className="font-script text-2xl leading-[33.6px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
              Meet your expert
            </p>
            <h1 className="font-landing text-[40px] font-bold leading-[48px] tracking-[-0.8px] text-white md:text-[48px] md:leading-[57.6px] md:tracking-[-0.96px]">
              Tony Martignetti, Esq. America's Planned Giving guide
            </h1>
            <p className="mt-3.5 text-base leading-[22.4px] tracking-[-0.16px] text-[#c6c6c6] md:mt-0 md:text-xl md:leading-7 md:tracking-[-0.5px]">
              A man who left the courtroom to champion legacy giving and has
              helped nonprofits raise over $150 million in bequests ever
              since.
            </p>
          </div>

          <div>
            <a
              href="https://tony.ma/Amazon"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full cursor-pointer rounded-lg bg-[#951b81] px-3.5 py-3.5 text-center text-base font-semibold leading-[22.4px] text-white transition-colors hover:bg-[#7a1569] md:w-fit md:px-6 md:py-3"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
