import HERO_BG from "@/assets/images/landing/hero-bg.png";
import CHECK from "@/assets/images/landing/icons/check.svg";
import { useWaitlistForm } from "@/hooks/useWaitlistForm";

const PERKS = [
  "Chapter 1 of the book, free and emailed instantly",
  "The Founders Rate on the book, locked in",
  "First 50 only: a live Q/A session with Tony",
];

export default function LandingHero() {
  const { email, setEmail, status, errorMessage, handleSubmit, isLoading } =
    useWaitlistForm("landing", { form: "book-waitlist" });

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

      <div className="relative flex w-full flex-col gap-6 px-4 pt-[140px] pb-12 md:px-[60px] md:pt-[146px] md:pb-16">
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
              programs from scratch. The book isn't out yet. Join the
              waitlist and Chapter 1 lands in your inbox straight away, free,
              before anyone else can buy the book.
            </p>
          </div>

          <div className="flex flex-col gap-5 rounded-2xl bg-white/10 p-5 backdrop-blur-[12px] md:max-w-[680px] md:p-5">
            <p className="text-xl font-semibold leading-7 text-white">
              Join the waitlist, and you get
            </p>
            <div className="flex flex-col gap-4">
              {PERKS.map((p) => (
                <div key={p} className="flex items-center gap-3">
                  <img src={CHECK} alt="" className="h-6 w-6 shrink-0" />
                  <p className="text-base font-semibold leading-[22.4px] tracking-[-0.16px] text-white">
                    {p}
                  </p>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex flex-col gap-4 md:flex-row">
                <label className="sr-only" htmlFor="landing-hero-email">
                  Email address
                </label>
                <input
                  id="landing-hero-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  disabled={isLoading}
                  className="w-full flex-1 rounded-lg bg-white px-5 py-4 text-base leading-[22.4px] tracking-[-0.16px] text-[#00150b] focus:outline-none focus:ring-2 focus:ring-[#951b81] disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full shrink-0 cursor-pointer rounded-lg bg-[#951b81] px-6 py-4 text-base font-semibold leading-[22.4px] text-white disabled:cursor-not-allowed md:w-fit"
                >
                  {isLoading ? "Sending…" : "Get Chapter 1 Free"}
                </button>
              </div>
              <p className="text-xs leading-[14.4px] text-[#fafafa]">
                Free to join. Chapter 1 arrives immediately. Unsubscribe any
                time. We only email about the book.
              </p>
              {status === "success" && (
                <p className="text-sm font-medium text-white">
                  Thanks! Check your inbox for Chapter 1.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-medium text-red-300">
                  {errorMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
