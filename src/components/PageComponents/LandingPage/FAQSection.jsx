import { useState } from "react";
import faqAudienceImage from "@/assets/images/landing_page/faq/audience.png";
import { FAQ_ITEMS } from "@/constants/landingPage";

function PlusIcon({ active, className = "" }) {
  const color = active ? "#951B81" : "#000000";
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {active ? (
        <path
          d="M3 3L13 13M13 3L3 13"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M8 2.5V13.5M2.5 8H13.5"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-[#FAFAFA] py-14 md:py-[60px]" data-name="Before You Join">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-4 md:px-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="font-script text-[20px] leading-[28px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
            Questions
          </span>
          <h2 className="text-[28px] font-bold leading-tight tracking-[-0.6px] text-[#00150B] md:text-[40px] md:tracking-[-0.8px]">
            Before You Join
          </h2>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
          <div className="flex w-full flex-col gap-3">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.question} className="rounded-2xl bg-white">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-base font-semibold md:text-lg md:font-medium ${
                        isOpen ? "text-[#951B81]" : "text-black"
                      }`}
                    >
                      {item.question}
                    </span>
                    <PlusIcon active={isOpen} className="mt-1 shrink-0" />
                  </button>
                  {isOpen && (
                    <p className="px-6 pb-5 text-base leading-6 text-[#323232]">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="w-full shrink-0 overflow-hidden rounded-xl lg:max-w-[420px] lg:rounded-2xl">
            <img
              src={faqAudienceImage}
              alt="Nonprofit conference audience"
              className="h-[280px] w-full object-cover lg:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
