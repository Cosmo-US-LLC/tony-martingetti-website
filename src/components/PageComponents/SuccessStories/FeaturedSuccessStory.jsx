import AVATAR from "@/assets/images/home/avatar.webp";
import STAR from "@/assets/images/home/icons/star.svg";

const STORIES = [
  {
    text: "“Fight for this budget line item! Overwhelmed by a $1.3 million annuity program, a rich bequest harvest, state audits and compliance problems, I turned to Tony — and I'm so glad I did. Accessible, expert and effective. Worth every cent.”",
    name: "Carole Weaver, Ph.D., CFRE",
    role: "Major Gifts & Planned Giving, The College of New Rochelle",
    dot: "#079669",
  },
  {
    text: "“Tony's guidance facilitated our successful navigation of NYS Department of Insurance requirements to formalize our charitable gift annuity program. His thoughtful strategy also enabled us to confirm several estate commitments.”",
    name: "Kathryn J. Sides",
    role: "Director of Development, The Stony Brook School",
    dot: "#951b81",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <img key={i} src={STAR} alt="" className="h-5 w-5" />
      ))}
    </div>
  );
}

export default function FeaturedSuccessStory() {
  return (
    <section className="w-full bg-[#0a1730] px-4 py-12 md:px-[60px] md:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8 md:gap-12">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between md:gap-12">
          <div className="flex flex-col gap-2">
            <p className="font-script text-2xl leading-[33.6px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
              Proven milestones
            </p>
            <h2 className="text-[28px] font-bold leading-[39.2px] text-white md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
              Featured success stories
            </h2>
          </div>
          <p className="max-w-[636px] text-base leading-[22.4px] text-[#e2e2e2] md:pb-1">
            Deeply impactful commitments secured through strategic Planned
            Giving.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          {STORIES.map((s) => (
            <div key={s.name} className="flex flex-1 flex-col gap-5 rounded-2xl bg-white/[0.02] p-5 md:gap-9 md:p-6">
              <div className="flex flex-col gap-5 md:gap-6">
                <Stars />
                <p className="text-sm leading-[19.6px] text-white md:text-base md:leading-[22.4px] md:tracking-[-0.16px]">
                  {s.text}
                </p>
              </div>
              <div className="flex items-center gap-4">
                {/* <img
                  src={AVATAR}
                  alt={s.name}
                  className="hidden h-16 w-16 shrink-0 rounded-full object-cover md:block"
                /> */}
                <div className="flex flex-col gap-1">
                  <p className="text-base font-semibold leading-[22.4px] text-white md:text-xl md:leading-7 md:tracking-[-0.5px]">
                    {s.name}
                  </p>
                  <p className="text-sm leading-[19.6px] text-[#c6c6c6]">{s.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
