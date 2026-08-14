import { Check } from "lucide-react";
import heroBgImage from "@/assets/images/landing_page/hero/hero_bg.png";
import { useWaitlistForm } from "@/hooks/useWaitlistForm";

const BENEFITS = [
  "Chapter 1 of the book, free and emailed instantly",
  "The Founders Rate on the book, locked in",
  "First 50 only: a live working session with Tony",
];

export default function LandingHero() {
  const { email, setEmail, status, errorMessage, handleSubmit, isLoading } =
    useWaitlistForm("book-waitlist", { form: "book-waitlist" });

  return (
    <section
      id="landing-hero"
      className="relative w-full overflow-hidden bg-[#00150B] py-12 md:min-h-[770px] md:py-16"
      data-name="Hero Section"
    >
      <div className="absolute inset-x-0 top-0 flex h-[860px] justify-center md:h-[770px]">
        <div
          className="h-full w-full max-w-[1440px] bg-cover bg-[position:66%_top] md:bg-right"
          style={{ backgroundImage: `url(${heroBgImage})` }}
        />
      </div>
      <div
        className="absolute inset-x-0 top-0 h-[860px] md:hidden"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.75) 60%, rgba(0,0,0,0.82) 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 top-0 hidden h-[770px] md:block"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 45%, rgba(0,0,0,0) 60%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col px-4 md:px-8">
        <div className="flex w-full max-w-[680px] flex-col gap-5">
          <span
            className="font-script text-[20px] leading-[28px] text-[#2FAC66] md:text-[32px] md:leading-[44.8px]"
          >
            New book by Tony Martignetti
          </span>

          <h1 className="text-[40px] font-bold leading-[48px] tracking-[-0.8px] text-white md:text-[48px] md:leading-[57.6px] md:tracking-[-0.96px]">
            Planned Giving Accelerated
          </h1>

          <p className="text-base font-semibold leading-6 text-white md:text-xl md:leading-7 md:tracking-[-0.5px]">
            The bequest-first system behind $150M+ in gifts, in one book.
          </p>

          <p className="text-base leading-[26px] text-white">
            Tony Martignetti spent 29 years building planned giving programs
            from scratch. The book isn&apos;t out yet. Join the waitlist and
            Chapter 1 lands in your inbox straight away, free, before anyone
            else can buy the book.
          </p>

          <div
            id="join-waitlist"
            className="flex w-full flex-col gap-4 rounded-2xl bg-white/10 p-5 md:p-6"
          >
            <p className="text-xl font-semibold leading-7 tracking-[-0.5px] text-white">
              Join the waitlist, and you get
            </p>
            <ul className="flex flex-col gap-3">
              {BENEFITS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#059669]">
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-base font-semibold leading-6 text-white">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-3 sm:flex-row"
            >
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
                className="min-h-[54px] flex-1 rounded-lg bg-white px-4 text-base text-[#00150B] placeholder:text-[#00150B]/60 focus:outline-none focus:ring-2 focus:ring-[#951B81] disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="min-h-[54px] shrink-0 cursor-pointer rounded-lg bg-[#951B81] px-6 text-base font-semibold text-white transition-colors hover:bg-[#7A1668] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? "Submitting…" : "Get Chapter 1 Free"}
              </button>
            </form>

            {status === "success" && (
              <p className="text-sm font-medium text-[#6ee7b7]">
                Thanks! Check your inbox for Chapter 1.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm font-medium text-red-300">
                {errorMessage}
              </p>
            )}

            <p className="text-xs leading-5 text-[#FAFAFA]/80">
              Free to join. Chapter 1 arrives immediately. Unsubscribe any
              time. We only email about the book.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
