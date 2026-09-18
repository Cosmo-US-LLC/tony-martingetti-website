import { useState } from "react";
import FAQ_IMAGE from "@/assets/images/landing/faq-image.webp";

const FAQS = [
  {
    q: "What is Planned Giving Accelerated?",
    a: "A book by Tony Martignetti on building a bequest-first Planned Giving program. It's live now on Amazon and Barnes & Noble.",
  },
  {
    q: "How fast can I actually use it?",
    a: "The book gives you a practical, step by step path to your first ask. No consultant, no new hire, no year of planning to plan.",
  },
  {
    q: "What formats is the book available in?",
    a: "Paperback, Kindle, and hardback, available now on Amazon and Barnes & Noble.",
  },
  {
    q: "Do I need a wealthy donor base for this to work?",
    a: "No. Loyalty predicts a bequest far better than gift size does. Tony's seen donors who gave modestly for years leave six-figure gifts in their wills. Your most loyal donors are your best prospects, not your biggest ones.",
  },
  {
    q: "Do I need a fundraising background to use this?",
    a: "No. The book is written for CEOs, Executive Directors, Development Directors, board members, and volunteers, not just career fundraisers. No prior planned giving experience required.",
  },
  {
    q: "Is this only for large nonprofits?",
    a: "It's built for the opposite. The whole system assumes you don't have a major gifts department, a big budget, or a dedicated planned giving officer.",
  },
  {
    q: "I'm a consultant, not on staff at a nonprofit. Is this still for me?",
    a: "Yes. Many consultants use this same framework as the starting system they bring to every client engagement, regardless of the nonprofit's size.",
  },
];

function PlusIcon({ open }) {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 0v14M0 7h14" stroke="#00150b" strokeWidth="1.5" className={open ? "opacity-0" : ""} />
        <path d="M0 7h14" stroke="#00150b" strokeWidth="1.5" />
      </svg>
    </span>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-[#fafafa] px-4 py-12 md:px-[60px] md:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8 md:gap-12">
        <div className="mx-auto flex max-w-[290px] flex-col gap-4 text-center">
          <p className="font-script text-2xl leading-[33.6px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
            Questions
          </p>
          <h2 className="text-[28px] font-bold leading-[39.2px] text-[#00150b] md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
            Before You Order
          </h2>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:gap-12">
          <div className="flex flex-col gap-4 md:w-1/2">
            {FAQS.map((f, i) => {
              const open = openIndex === i;
              return (
                <div
                  key={f.q}
                  className={`flex flex-col gap-5 rounded-2xl bg-white p-5 ${open ? "" : ""}`}
                >
                  <button
                    onClick={() => setOpenIndex(open ? -1 : i)}
                    className="flex w-full items-center justify-between gap-6 text-left"
                  >
                    <p
                      className={`text-lg font-medium leading-7 tracking-[-0.5px] ${open ? "text-[#951b81]" : "text-black"}`}
                    >
                      {f.q}
                    </p>
                    <PlusIcon open={open} />
                  </button>
                  {open && (
                    <p className="text-base leading-[22.4px] tracking-[-0.16px] text-[#323232]">
                      {f.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <div className=" md:block md:w-1/2">
            <img
              src={FAQ_IMAGE}
              alt=""
              className="md:h-[750px] h-[300px] w-full rounded-2xl object-cover md:object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
