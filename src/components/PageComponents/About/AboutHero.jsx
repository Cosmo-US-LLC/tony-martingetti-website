import heroImage from "@/assets/images/about/hero/tony_hero.webp";
import { scrollToAboutJoin } from "@/utils/scrollToAboutJoin";

export default function AboutHero() {
  const handleJoinClick = () => {
    scrollToAboutJoin();
  };

  return (
    <section
      className="w-full py-16 md:py-20"
      style={{
        backgroundImage:
          "linear-gradient(138.91deg, #0f172a 18.73%, #1e3a8a 100%)",
      }}
      data-name="About Hero"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 px-4 md:px-8 lg:flex-row lg:gap-[80px]">
        <div className="flex w-full max-w-[605px] flex-col gap-8 lg:gap-[35px]">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <span className="inline-flex w-fit items-center rounded-full border border-white bg-white/10 px-5 py-2 font-sans text-sm font-bold uppercase leading-5 tracking-[0.7px] text-white">
                Meet your expert
              </span>
              <h1 className="font-heading text-[32px] font-bold uppercase leading-tight tracking-[-1px] md:text-[52px] md:leading-[62px]">
                <span className="block text-[#059669]">Tony Martignetti, Esq.</span>
                <span className="block text-white">
                  America&apos;s Planned Giving Guide
                </span>
              </h1>
            </div>
            <p className="paragraph_one text-[#f7f7f7]">
              A man who left the courtroom to champion legacy giving and has
              helped nonprofits raise over $150 million in bequests ever since.
            </p>
          </div>
          <button
            type="button"
            onClick={handleJoinClick}
            className="primary_btn_two w-fit cursor-pointer"
          >
            Join the Waitlist Now
          </button>
        </div>

        <div className="relative h-[320px] w-full max-w-[558px] shrink-0 overflow-hidden rounded-2xl md:h-[420px] lg:h-[509px]">
          <img
            src={heroImage}
            alt="Tony Martignetti in his office"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
