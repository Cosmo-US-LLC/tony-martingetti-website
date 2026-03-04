import { Link } from "react-router-dom";

const BENEFITS = [
  {
    id: 1,
    text: "Weekly expert-led training on prospect identification, board engagement, marketing, and donor cultivation",
  },
  {
    id: 2,
    text: "Peer networking community of nonprofit leaders facing the same challenges",
  },
  {
    id: 3,
    text: "Done-for-you templates for letters, brochures, policies, and more",
  },
  {
    id: 4,
    text: "Live Q&A sessions with Tony Martignetti for personalized guidance",
  },
];

function CheckIcon() {
  return (
    <div
      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#059669] text-xs font-normal leading-4 text-white"
      aria-hidden
    >
      ✓
    </div>
  );
}

export default function WhatYouGet() {

  const handleJoinClick = () => {
    const el = document.getElementById("join");

    if (location.pathname === "/waitlist" && el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/waitlist#join");
    }
  };

  return (
    <section
      className="w-full bg-[#f8fafc] px-6 py-16 md:px-12 md:py-20"
      data-name="Section"
    >
      <div
        className="mx-auto flex max-w-[1024px] w-full flex-col items-center gap-8 md:gap-10"
        data-name="Container"
      >
        <h2
          className="heading_two text-center text-[#0f172a]"
          data-name="Heading 2"
        >
          What You'll Get Inside Planned Giving Accelerated
        </h2>

        <div
          className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-4"
          data-name="Benefits grid"
        >
          {BENEFITS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-4 rounded-lg bg-white p-6 md:p-8 shadow-sm"
              data-name="Background"
            >
              <div
                className="flex shrink-0 md:pt-1"
                data-name="Margin"
              >
                <CheckIcon />
              </div>
              <p className="card_body text-[#374151]">{item.text}</p>
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
