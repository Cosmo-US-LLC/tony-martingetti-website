import { CheckCircle2 } from "lucide-react";
import { useWaitlistForm } from "@/hooks/useWaitlistForm";
import {
  WAITLIST_BENEFITS,
  WORKING_SESSION_SEATS_CLAIMED,
  WORKING_SESSION_SEATS_TOTAL,
} from "@/constants/landingPage";

export default function ChapterCTASection() {
  const { email, setEmail, status, errorMessage, handleSubmit, isLoading } =
    useWaitlistForm("book-waitlist", { form: "book-waitlist" });

  const seatsPercent = Math.round(
    (WORKING_SESSION_SEATS_CLAIMED / WORKING_SESSION_SEATS_TOTAL) * 100,
  );

  return (
    <section className="w-full bg-[#0A1730] py-14 md:py-[60px]" data-name="Start With Chapter 1. Free">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 px-4 md:px-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="font-script text-[20px] leading-[28px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
            Waitlist
          </span>
          <h2 className="text-[24px] font-bold leading-[28.8px] tracking-[-0.48px] text-white md:text-[40px] md:leading-tight md:tracking-[-0.8px]">
            Start With Chapter 1. Free
          </h2>
          <p className="max-w-[540px] text-base leading-6 text-white">
            Planned Giving Accelerated isn&apos;t published yet. Joining the
            waitlist costs nothing and gets you reading today.
          </p>
        </div>

        <div className="flex w-full max-w-[600px] flex-col gap-6 rounded-2xl bg-white/[0.04] p-6 md:p-8">
          <p className="text-xl font-semibold leading-7 tracking-[-0.5px] text-white">
            Join the waitlist, and you get
          </p>

          <ul className="flex flex-col gap-5">
            {WAITLIST_BENEFITS.map((benefit) => (
              <li key={benefit.title} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#079669]"
                  strokeWidth={2}
                />
                <div className="flex flex-col gap-1">
                  <span className="text-base font-semibold text-white">
                    {benefit.title}
                  </span>
                  <span className="text-sm leading-5 text-[#C6C6C6]">
                    {benefit.description}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-sm font-semibold text-white">
              <span>Working session seats claimed</span>
              <span>
                {WORKING_SESSION_SEATS_CLAIMED} / {WORKING_SESSION_SEATS_TOTAL}
              </span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#616161]">
              <div
                className="h-full rounded-full bg-[#079669]"
                style={{ width: `${seatsPercent}%` }}
              />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col gap-3 sm:flex-row"
          >
            <label className="sr-only" htmlFor="landing-cta-email">
              Email address
            </label>
            <input
              id="landing-cta-email"
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
            Free to join. Chapter 1 arrives immediately. Unsubscribe any time.
          </p>
        </div>
      </div>
    </section>
  );
}
