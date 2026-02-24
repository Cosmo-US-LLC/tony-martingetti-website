import icon_1 from "@/assets/images/waitlist/free_toolkit/card1.svg";
import icon_2 from "@/assets/images/waitlist/free_toolkit/card2.svg";
import icon_3 from "@/assets/images/waitlist/free_toolkit/card3.svg";
import icon_4 from "@/assets/images/waitlist/free_toolkit/card4.svg";

const TOOLKIT_ITEMS = [
  {
    id: 1,
    icon: icon_1,
    title: "5-Step Launch Roadmap",
    description:
      "A clear, actionable plan to go from zero to a thriving program in 90 days",
  },
  {
    id: 2,
    icon: icon_2,
    title: "Donor Conversation Scripts",
    description:
      "Word-for-word templates for approaching donors about bequests (without the awkwardness)",
  },
  {
    id: 3,
    icon: icon_3,
    title: "Top 10 Mistakes Checklist",
    description:
      "Avoid the pitfalls that derail most first-time Planned Giving programs",
  },
  {
    id: 4,
    icon: icon_4,
    title: "Prospect ID Worksheet",
    description:
      "Identify your best bequest prospects already in your database, today",
  },
];

export default function FreeToolkit() {
  return (
    <section
      className="w-full bg-[#0f172a] py-16 md:py-20 "
      data-name="Section"
    >
      <div
        className="mx-auto flex max-w-[1280px] px-4 md:px-8 w-full flex-col items-center gap-12 md:gap-16"
        data-name="Container"
      >
        <div
          className="flex max-w-[768px] flex-col items-center gap-4"
          data-name="Header"
        >
          <h2
            className="heading_two text-center text-white"
            data-name="Heading 2"
          >
            Your FREE Toolkit Includes:
          </h2>
          <p
            className="text-center paragraph_one text-[#bfdbfe]"
            data-name="Subtitle"
          >
            Everything you need to start building your Planned Giving program
            today
          </p>
        </div>

        <div
          className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-4"
          data-name="Cards container"
        >
          {TOOLKIT_ITEMS.map((item) => (
            <div
              key={item.id}
              className="flex min-h-0 flex-1 flex-col md:items-start items-center rounded-xl border border-white/10 bg-white/5 p-7"
              data-name="Overlay+Border"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="mb-4 w-10 h-10 text-[#34d399]"
                aria-hidden
              />
              <h3 className="heading_three mb-3 text-[#34d399]">
                {item.title}
              </h3>
              <p className="font-sans text-base text-center md:text-left font-normal leading-[23px] text-[#dbeafe]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
