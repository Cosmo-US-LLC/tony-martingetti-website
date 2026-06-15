import storyImage from "@/assets/images/about/story/tony_story.webp";
import quoteIcon from "@/assets/images/about/icons/quote.svg";
import timelineActiveIcon from "@/assets/images/about/icons/timeline_active.svg";
import timelineInactiveIcon from "@/assets/images/about/icons/timeline_inactive.svg";

const TIMELINE = [
  {
    year: "1997",
    title: "A Pivotal Decision",
    description:
      "In 1997, Tony Martignetti made a decision that would change his career and the futures of hundreds of nonprofits across America. He walked away from practicing law, comfortable but unfulfilling, and discovered Planned Giving.",
    active: true,
  },
  {
    year: "The Following Decades",
    title: "Side-by-Side With Nonprofits",
    description:
      "Over the following decades, Tony worked side-by-side with nonprofits of all sizes from small social service agencies to major universities guiding them through every step of the Planned Giving process: prospect identification, donor cultivation, solicitation, and stewardship.",
    active: false,
  },
  {
    year: "Today",
    title: "A Mission to Launch 1,000 Programs",
    description:
      "Today, through Planned Giving Accelerated, Tony is on a mission to launch 1,000 new Planned Giving programs across the U.S. raising billions for the nonprofits that are changing lives. Tony has thousands of conversations with donors in their 60s, 70s, 80s, and 90s under his belt. He's learned what makes them tick, what makes them hesitate, and how to help them feel excited and confident about leaving a legacy. He brings that wisdom and his lawyer's precision to every nonprofit he serves.",
    active: false,
  },
  {
    year: "Beyond the Work",
    title: "Anything But Boring",
    description:
      "He also has done stand-up comedy. Yes, really. Which is why his approach to a \"boring\" topic feels anything but.",
    active: false,
  },
];

function TimelineItem({ item, isLast }) {
  return (
    <div className="relative flex gap-4 pb-8 md:gap-4 md:pb-[30px]">
      {!isLast && (
        <span
          className="absolute left-[14px] top-[30px] h-[calc(80%-10px)] w-0.5 rounded-full bg-[rgba(208,208,208,0.75)]"
          aria-hidden="true"
        />
      )}
      <img
        src={item.active ? timelineActiveIcon : timelineInactiveIcon}
        alt=""
        className="relative z-10 size-[30px] shrink-0"
        aria-hidden="true"
      />
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <p className="font-sans text-lg font-semibold leading-[22px] tracking-[-1px] text-[#059669]">
          {item.year}
        </p>
        <h3 className="font-heading text-[22px] font-bold uppercase leading-[30px] text-[#0f172a] md:text-[26px]">
          {item.title}
        </h3>
        <p className="paragraph_one text-[#707377]">{item.description}</p>
      </div>
    </div>
  );
}

export default function TonysStory() {
  return (
    <section
      className="w-full bg-white py-16 md:py-20"
      data-name="Tony's Story"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-4 md:px-8 lg:flex-row lg:gap-20">
        <div className="flex w-full max-w-[398px] flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <p className="font-sans text-base font-semibold leading-[22px] text-[#059669]">
              Narrative
            </p>
            <h2 className="font-heading text-[32px] font-bold uppercase leading-tight tracking-[-1px] text-[#0f172a] md:text-[52px] md:leading-[62px]">
              Tony&apos;s Story
            </h2>
            <p className="paragraph_one text-[#707377]">
              From the Courtroom to the Cause
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-xl">
              <img
                src={storyImage}
                alt="Tony Martignetti portrait"
                className="h-auto w-full object-cover"
              />
            </div>
            <blockquote className="flex flex-col gap-2.5 rounded-xl bg-[rgba(5,150,105,0.06)] px-4 py-4">
              <img
                src={quoteIcon}
                alt=""
                className="h-[26px] w-[30px]"
                aria-hidden="true"
              />
              <p className="paragraph_one text-[#4b5563]">
                I wanted to be the evangelist for Planned Giving. So in 2003, I
                founded Martignetti Planned Giving Advisors, LLC and I&apos;ve
                never looked back.
              </p>
            </blockquote>
          </div>
        </div>

        <div className="min-w-0 flex-1">
          {TIMELINE.map((item, index) => (
            <TimelineItem
              key={item.title}
              item={item}
              isLast={index === TIMELINE.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
