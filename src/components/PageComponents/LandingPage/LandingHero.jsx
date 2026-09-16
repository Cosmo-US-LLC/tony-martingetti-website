import { Link } from "react-router-dom";
import HERO_BG from "@/assets/images/landing/hero-bg.png";

export default function LandingHero() {
  return (
    <section className="relative -mt-[100px] w-full overflow-hidden bg-[#00150b]">
      <img
        src={HERO_BG}
        alt="Planned Giving Accelerated book"
        className="absolute inset-0 h-full w-full object-cover object-[75%_50%]"
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0) 60%)",
        }}
      />

      <div className="relative flex min-h-[560px] w-full flex-col gap-6 px-4 pt-[140px] pb-12 md:min-h-[770px] md:px-[60px] md:pt-[250px] md:pb-16">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6">
          <div className="flex max-w-[400px] flex-col gap-2 md:max-w-[680px]">
            <p className="font-script text-2xl leading-[33.6px] text-[#2fac66] md:text-[32px] md:leading-[44.8px]">
              New book by Tony Martignetti
            </p>
            <div className="flex flex-col gap-3.5">
              <h1 className="font-landing text-[32px] font-bold leading-[38px] tracking-[-0.8px] text-white md:text-[48px] md:leading-[57.6px] md:tracking-[-0.96px]">
                Planned Giving Accelerated
              </h1>
              <p className="text-lg font-semibold leading-7 tracking-[-0.5px] text-white">
                The bequest-first system behind $150M+ in gifts, in one book.
              </p>
            </div>
            <p className="text-base leading-[25.2px] tracking-[-0.5px] text-white">
              Tony Martignetti spent 29 years building Planned Giving
              programs from scratch. The book is out. This book is the
              complete system, a practical, step-by-step guide to help
              nonprofits start building stronger Planned Giving programs.
            </p>
            <Link
              to="/my-book"
              className="mt-2 w-full cursor-pointer rounded-lg bg-[#951b81] px-6 py-4 text-center text-base font-semibold leading-[22.4px] text-white transition-colors hover:bg-[#7a1569] md:w-fit"
            >
              Get Your Copy Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
