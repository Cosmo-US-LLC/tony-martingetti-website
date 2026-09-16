import CHECK from "@/assets/images/landing/icons/check.svg";
import { useWaitlistForm } from "@/hooks/useWaitlistForm";

const PERKS = [
  {
    title: "Chapter 1 of the book, free and emailed instantly",
    desc: "The opening chapter of Planned Giving Accelerated, in your inbox today.",
  },
  {
    title: "The Founders Rate on the book, locked in",
    desc: "It ends the day the book goes public on Amazon and retail.",
  },
  {
    title: "First 50 only: a live working session with Tony",
    desc: "Bring your program's bottleneck. Tony works through it live. Seats go in signup order.",
  },
];

const SEATS_CLAIMED = 31;
const SEATS_TOTAL = 50;

export default function ChapterCTASection() {
  const { email, setEmail, status, errorMessage, handleSubmit, isLoading } =
    useWaitlistForm("landing", { form: "book-waitlist" });

  return (
    <section
      id="landing-join"
      className="w-full scroll-mt-24 bg-[#0a1730] px-4 py-12 md:px-[60px] md:py-20"
    >
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-center gap-8 md:gap-12">
        <div className="flex max-w-[830px] flex-col items-center gap-2 text-center">
          <p className="font-script text-2xl leading-[33.6px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
            Waitlist
          </p>
          <div className="flex flex-col gap-4">
            <h2 className="text-[28px] font-bold leading-[39.2px] text-white md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
              Start With Chapter 1. Free
            </h2>
            <p className="text-base leading-[22.4px] tracking-[-0.16px] text-white">
              Planned Giving Accelerated isn't published yet. Joining the
              waitlist costs nothing and gets you reading today.
            </p>
          </div>
        </div>

        <div className="flex w-full max-w-[600px] flex-col gap-6 rounded-2xl bg-white/[0.04] p-6 backdrop-blur-[12px]">
          <div className="flex flex-col gap-5">
            <p className="text-xl font-semibold leading-7 text-white">
              Join the waitlist, and you get
            </p>
            <div className="flex flex-col gap-5">
              {PERKS.map((p) => (
                <div key={p.title} className="flex items-start gap-3">
                  <img src={CHECK} alt="" className="mt-0.5 h-6 w-6 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <p className="text-base font-semibold leading-[22.4px] text-white">
                      {p.title}
                    </p>
                    <p className="text-sm leading-[19.6px] text-[#c6c6c6]">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <p className="text-base font-semibold leading-[22.4px] text-white">
                  Working session seats claimed
                </p>
                <p className="text-base font-semibold leading-[22.4px] text-white">
                  {SEATS_CLAIMED} / {SEATS_TOTAL}
                </p>
              </div>
              <div className="h-1.5 w-full rounded-full bg-[#616161]">
                <div
                  className="h-1.5 rounded-full bg-[#079669]"
                  style={{ width: `${(SEATS_CLAIMED / SEATS_TOTAL) * 100}%` }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex flex-col gap-4 md:flex-row">
                <label className="sr-only" htmlFor="landing-email">
                  Email address
                </label>
                <input
                  id="landing-email"
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
                time.
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
