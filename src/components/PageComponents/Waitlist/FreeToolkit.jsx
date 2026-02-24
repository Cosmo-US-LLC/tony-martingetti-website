const TOOLKIT_ITEMS = [
  {
    id: 1,
    icon: "🗺️",
    title: "5-Step Launch Roadmap",
    description:
      "A clear, actionable plan to go from zero to a thriving program in 90 days",
  },
  {
    id: 2,
    icon: "💬",
    title: "Donor Conversation Scripts",
    description:
      "Word-for-word templates for approaching donors about bequests (without the awkwardness)",
  },
  {
    id: 3,
    icon: "⚠️",
    title: "Top 10 Mistakes Checklist",
    description:
      "Avoid the pitfalls that derail most first-time Planned Giving programs",
  },
  {
    id: 4,
    icon: "📊",
    title: "Prospect ID Worksheet",
    description:
      "Identify your best bequest prospects already in your database, today",
  },
];

export default function FreeToolkit() {
  return (
    <section
      className="w-full bg-[#0f172a] px-6 py-16 md:px-12 md:py-20 lg:px-[72px] lg:py-[80px]"
      data-name="Section"
    >
      <div
        className="mx-auto flex max-w-[1280px] w-full flex-col items-center gap-12 px-6 md:gap-16"
        data-name="Container"
      >
        <div
          className="flex max-w-[768px] flex-col items-center gap-4"
          data-name="Header"
        >
          <h2
            className="font-heading text-center text-3xl font-bold uppercase leading-10 tracking-[0.72px] text-white md:text-[36px] md:leading-[40px]"
            data-name="Heading 2"
          >
            Your FREE Toolkit Includes:
          </h2>
          <p
            className="text-center font-sans text-lg font-normal leading-7 text-[#bfdbfe] md:text-xl md:leading-7"
            data-name="Subtitle"
          >
            Everything you need to start building your Planned Giving program
            today
          </p>
        </div>

        <div
          className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
          data-name="Cards container"
        >
          {TOOLKIT_ITEMS.map((item) => (
            <div
              key={item.id}
              className="flex min-h-0 flex-1 flex-col rounded-xl border border-white/10 bg-white/5 p-8"
              data-name="Overlay+Border"
            >
              <div className="mb-4 text-4xl leading-10" aria-hidden>
                {item.icon}
              </div>
              <h3 className="font-heading mb-3 text-lg font-bold uppercase leading-7 tracking-[0.36px] text-[#34d399]">
                {item.title}
              </h3>
              <p className="font-sans text-base font-normal leading-[23px] text-[#dbeafe]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
