import { Link } from "react-router-dom";
import icon_1 from "@/assets/images/waitlist/be_first/icon_1.svg";
import icon_2 from "@/assets/images/waitlist/be_first/icon_2.svg";
import icon_3 from "@/assets/images/waitlist/be_first/icon_3.svg";

const BENEFITS = [
  {
    id: 1,
    icon: icon_1,
    title: "Priority Access",
    description:
      "Get first access when enrollment opens, before the general public",
  },
  {
    id: 2,
    icon: icon_2,
    title: "Early-Bird Pricing",
    description: "Exclusive pricing for waitlist members",
  },
  {
    id: 3,
    icon: icon_3,
    title: "FREE Toolkit",
    description:
      "Instant access to the Planned Giving Success Toolkit (valued at $297)",
  },
];

export default function BeFirstInLine() {
  const handleJoinClick = () => {
    const el = document.getElementById("join");

    if (location.pathname === "/waitlist" && el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/waitlist#join");
    }
  };

  return (
    <section className="w-full bg-[#f8fafc] py-16 md:py-20" data-name="Section">
      <div
        className="mx-auto flex max-w-[1280px] px-4 md:px-8 w-full flex-col items-center gap-10 md:gap-12"
        data-name="Container"
      >
        <div
          className="flex max-w-[768px] flex-col items-center gap-4"
          data-name="Header"
        >
          <h2
            className="heading_two text-center md:max-w-[600px] max-w-[300px] text-[#0f172a]"
            data-name="Heading 2"
          >
            Be First in Line for Planned Giving Accelerated
          </h2>
          <p
            className="text-center paragraph_one text-[#4b5563]"
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
              className="flex flex-col rounded-xl md:items-start items-center  border-t-4 border-[#10b981] bg-white md:p-8 p-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"
              data-name="Background+HorizontalBorder+Shadow"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="mb-4 w-10 h-10 text-[#1e293b]"
                aria-hidden
              />

              <h3 className="heading_three mb-3 text-[#0f172a]">
                {item.title}
              </h3>
              <p className="card_body text-[#4b5563] text-center md:text-left">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <button
          onClick={handleJoinClick}
          className="primary_btn shrink-0"
          data-name="Button"
        >
          Join the Waitlist Now
        </button>
      </div>
    </section>
  );
}
