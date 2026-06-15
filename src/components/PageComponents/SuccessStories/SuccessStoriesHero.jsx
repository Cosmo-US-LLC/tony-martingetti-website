import hero1 from "@/assets/images/success_stories/hero/hero_1.webp";
import hero2 from "@/assets/images/success_stories/hero/hero_2.webp";
import hero3 from "@/assets/images/success_stories/hero/hero_3.webp";
import hero4 from "@/assets/images/success_stories/hero/hero_4.webp";
import { scrollToSuccessStoriesJoin } from "@/utils/scrollToSuccessStoriesJoin";

const HERO_IMAGES = [
  { src: hero1, alt: "Nonprofit leader testimonial portrait" },
  { src: hero2, alt: "Development professional portrait" },
  { src: hero3, alt: "Fundraising leader portrait" },
  { src: hero4, alt: "Nonprofit executive portrait" },
];

export default function SuccessStoriesHero() {
  return (
    <section
      className="w-full py-16 md:py-20"
      style={{
        backgroundImage:
          "linear-gradient(138.91deg, #0f172a 18.73%, #1e3a8a 100%)",
      }}
      data-name="Success Stories Hero"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 px-4 md:px-8 lg:flex-row lg:gap-[70px]">
        <div className="flex w-full max-w-[605px] flex-col gap-8 lg:gap-[35px]">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <span className="inline-flex w-fit items-center rounded-full border border-white bg-white/10 px-5 py-2 font-sans text-sm font-bold uppercase leading-5 tracking-[0.7px] text-white">
                Real Results, Real People
              </span>
              <h1 className="font-heading text-[32px] font-bold uppercase leading-tight tracking-[-1px] md:text-[52px] md:leading-[62px]">
                <span className="block text-[#059669]">What Nonprofits Say</span>
                <span className="block text-white">About Tony</span>
              </h1>
            </div>
            <p className="paragraph_one text-[#f7f7f7]">
              From small social service agencies to major universities, here&apos;s
              what happens when organizations commit to Planned Giving.
            </p>
          </div>
          <button
            type="button"
            onClick={scrollToSuccessStoriesJoin}
            className="primary_btn_two w-fit cursor-pointer"
          >
            Join the Waitlist Now
          </button>
        </div>

        <div className="grid w-full max-w-[558px] shrink-0 grid-cols-2 gap-3.5">
          {HERO_IMAGES.map((image) => (
            <div
              key={image.alt}
              className="relative h-[160px] overflow-hidden rounded-2xl md:h-[247px]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
