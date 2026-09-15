import STORY_1997 from "@/assets/images/about/story-1997.png";
import STORY_DECADES from "@/assets/images/about/story-decades.png";
import STORY_TODAY from "@/assets/images/about/story-today-overlay.png";
import STORY_BEYOND from "@/assets/images/about/story-beyond.png";

const CHAPTERS = [
  {
    index: "01",
    year: "1997",
    title: "A pivotal decision",
    desc: "In 1997, Tony made a decision that would change his career and the futures of hundreds of nonprofits across America. He walked away from practicing law, comfortable but unfulfilling, and discovered Planned Giving.",
    image: STORY_1997,
    imagePosition: "5% 35%",
    dark: false,
  },
  {
    index: "02",
    year: "The following decades",
    title: "Side-by-side with nonprofits",
    desc: "Over the following decades, Tony worked side-by-side with nonprofits of all sizes, from small social service agencies to major universities, guiding them through every step of the Planned Giving process: prospect identification, donor cultivation, solicitation and stewardship.",
    image: STORY_DECADES,
    imagePosition: "center 25%",
    dark: false,
  },
  {
    index: "03",
    year: "Today",
    title: "A mission to launch 1,000 programs",
    desc: "Tony aims to launch 1,000 Planned Giving programs across the U.S., raising billions for nonprofits. With thousands of donor conversations, he understands their motivations and hesitations, helping them confidently leave a legacy. He applies this insight and legal precision to every nonprofit he supports.",
    image: STORY_TODAY,
    imagePosition: "95% 35%",
    dark: false,
  },
  {
    index: "04",
    year: "Beyond the work",
    title: "Anything but boring",
    desc: 'He has also done stand-up comedy. Yes, really. Which is why his approach to a "boring" topic feels anything but.',
    image: STORY_BEYOND,
    imagePosition: "center 20%",
    dark: true,
  },
];

export default function TonysStory() {
  return (
    <section className="w-full bg-white px-4 py-12 md:px-[60px] md:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8 md:flex-row md:items-stretch md:gap-0 md:overflow-hidden md:rounded-2xl md:border md:border-[#e2e2e2]">
        <aside className="flex flex-col gap-8 md:w-[320px] md:shrink-0 md:border-r md:border-[#e2e2e2] md:px-10 md:py-12">
          <div className="flex flex-col gap-4">
            <p className="font-script text-2xl leading-[33.6px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
              Narrative
            </p>
            <div className="flex flex-col gap-2.5">
              <h2 className="text-[28px] font-bold leading-[39.2px] text-[#151515] md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
                Tony's story
              </h2>
              <p className="text-base leading-[22.4px] text-[#494949] md:text-base md:leading-[19.2px]">
                From the courtroom to the cause
              </p>
            </div>
          </div>
        </aside>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:flex md:flex-1 md:gap-0">
          {CHAPTERS.map((c) => (
            <div
              key={c.index}
              className={`flex flex-col gap-6 rounded-xl border p-8 md:flex-1 md:gap-6 md:rounded-none md:border-y-0 md:border-l-0 md:border-r md:last:border-r-0 ${
                c.dark ? "bg-[#0a1730] border-[#0a1730]" : "border-[#e2e2e2] bg-transparent"
              }`}
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-start justify-between">
                  <p
                    className={`text-base font-semibold leading-[22.4px] ${c.dark ? "text-white" : "text-[#151515]"}`}
                  >
                    {c.year}
                  </p>
                  <p className="text-xl leading-[25px] text-[#aeaeae]">
                    {c.index}
                  </p>
                </div>
                <p
                  className={`text-2xl font-bold leading-[28.8px] tracking-[-0.48px] ${c.dark ? "text-white" : "text-[#151515]"}`}
                >
                  {c.title}
                </p>
              </div>
              <p
                className={`text-sm leading-[19.6px] ${c.dark ? "text-[#c6c6c6]" : "text-[#494949]"}`}
              >
                {c.desc}
              </p>
              {c.image && (
                <img
                  src={c.image}
                  alt=""
                  className="mt-auto h-[220px] w-full rounded-lg object-cover"
                  style={{ objectPosition: c.imagePosition || "center" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
