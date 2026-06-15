import { useState } from "react";
import faqCloseIcon from "@/assets/images/principles/icons/faq_close.svg";
import faqPlusIcon from "@/assets/images/principles/icons/faq_plus.svg";
import { PRINCIPLES_FAQS } from "@/constants/principles";

export default function PrinciplesFAQ() {
  const [openId, setOpenId] = useState(PRINCIPLES_FAQS[0].id);

  function toggle(id) {
    setOpenId((current) => (current === id ? null : id));
  }

  return (
    <section
      id="principles-faq"
      className="w-full scroll-mt-20 bg-white py-12 md:py-16"
      data-name="Principles FAQ"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-4 md:px-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="font-sans text-base font-semibold leading-[22px] text-[#059669]">
            Answers &amp; Insights
          </p>
          <h2 className="heading_two text-[#0f172a]">Frequently Asked Questions</h2>
        </div>

        <div className="mx-auto flex w-full max-w-[1037px] flex-col gap-2.5">
          {PRINCIPLES_FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <article
                key={faq.id}
                className="rounded-xl border border-[#f3f4f6] bg-white p-5"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="flex w-full cursor-pointer items-start justify-between gap-6 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex min-w-0 flex-1 flex-col gap-3">
                    <p
                      className={`font-sans text-lg font-bold leading-7 md:text-[22px] md:leading-7 ${
                        isOpen ? "text-[#059669]" : "text-[#0f172a]"
                      }`}
                    >
                      {faq.question}
                    </p>
                    {isOpen && (
                      <p className="font-sans text-base leading-6 text-[#1f2937]">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                  <img
                    src={isOpen ? faqCloseIcon : faqPlusIcon}
                    alt=""
                    className="mt-1 size-6 shrink-0"
                    aria-hidden="true"
                  />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
