import { Link } from "react-router-dom";

const BENEFITS = [
  {
    id: 1,
    icon: "🎯",
    title: "Priority Access",
    description:
      "Get first access when enrollment opens, before the general public",
  },
  {
    id: 2,
    icon: "💰",
    title: "Early-Bird Pricing",
    description:
      "Exclusive pricing for waitlist members, save $500 off regular price",
  },
  {
    id: 3,
    icon: "🎁",
    title: "FREE Toolkit",
    description:
      "Instant access to the Planned Giving Success Toolkit (valued at $297)",
  },
];

export default function BeFirstInLine() {
  return (
    <section
      className="w-full bg-[#f8fafc] px-6 py-16 md:px-12 md:py-20 lg:px-[72px] lg:py-[80px]"
      data-name="Section"
    >
      <div
        className="mx-auto flex max-w-[1280px] w-full flex-col items-center gap-10 px-6 md:gap-12"
        data-name="Container"
      >
        <div
          className="flex max-w-[768px] flex-col items-center gap-4"
          data-name="Header"
        >
          <h2
            className="font-heading text-center text-3xl font-bold uppercase leading-10 tracking-[0.72px] text-[#0f172a] md:text-[36px] md:leading-[40px]"
            data-name="Heading 2"
          >
            <span className="block">Be First in Line for Planned Giving</span>
            <span className="block">Accelerated</span>
          </h2>
          <p
            className="text-center font-sans text-lg font-normal leading-7 text-[#4b5563] md:text-xl md:leading-7"
            data-name="Subtitle"
          >
            Tony Martignetti's proven program opens soon, and spots are limited
          </p>
        </div>

        <div
          className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
          data-name="Cards container"
        >
          {BENEFITS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col rounded-xl border-t-4 border-[#10b981] bg-white p-8 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
              data-name="Background+HorizontalBorder+Shadow"
            >
              <div className="mb-4 text-4xl leading-10 text-[#1e293b]" aria-hidden>
                {item.icon}
              </div>
              <h3 className="font-heading mb-3 text-xl font-bold uppercase leading-7 tracking-[0.4px] text-[#0f172a]">
                {item.title}
              </h3>
              <p className="font-sans text-base font-normal leading-[26px] text-[#4b5563]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <Link to="/waitlist#join" className="primary_btn shrink-0" data-name="Button">
          Join the Waitlist Now
        </Link>
      </div>
    </section>
  );
}
