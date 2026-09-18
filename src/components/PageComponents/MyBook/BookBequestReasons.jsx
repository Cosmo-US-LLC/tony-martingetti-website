import { useState } from "react";
import REASONS_IMAGE from "@/assets/images/mybook/reasons-image.webp";
import REASON_ICON from "@/assets/images/mybook/icons/reason-icon.svg";

const REASONS = [
  {
    title: "No education required",
    desc: "Every American adult already understands what a will is. You're activating a concept your donors already know, not teaching a new one.",
  },
  {
    title: "No lifetime cost",
    desc: "A bequest costs your donor nothing today, which opens the door to gifts many times larger than anything they've given while alive.",
  },
  {
    title: "The most popular planned gift, by far",
    desc: "Expect 75-90% of your planned gifts to be simple gifts in wills.",
  },
  {
    title: "You'll grow your endowment",
    desc: "Most bequests arrive as unrestricted cash, the fastest way to build the fund that protects your mission for decades.",
  },
  {
    title: "No tax issues",
    desc: "Fewer than 1% of estates owe federal estate tax, so there's nothing complicated to navigate.",
  },
  {
    title: "Everyone needs a will",
    desc: "Your prospect pool is already sitting in your donor database.",
  },
];

export default function BookBequestReasons() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-[#0a1730] px-4 py-12 md:px-[60px] md:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8 md:gap-12">
        <div className="flex flex-col gap-4 md:flex-row md:gap-20">
          <h2 className="text-[28px] font-bold leading-[39.2px] text-white md:w-1/2 md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
            The Martignetti 18 reasons why bequests are the place to launch
            your Planned Giving
          </h2>
          <p className="text-base leading-[22.4px] tracking-[-0.16px] text-white md:w-1/2">
            You don't need a complicated gift menu to launch Planned Giving.
            You need one gift type, and eighteen rock-solid reasons why it's
            the right one. Here are six to get you started.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:gap-20">
          <img
            src={REASONS_IMAGE}
            alt=""
            className="h-[320px] w-full rounded-2xl object-cover  object-[70%_center] md:h-[700px] md:w-[600px]"
            style={{ objectPosition: "70% center" }}
          />
          <div className="flex flex-col gap-4 md:w-1/2">
            {REASONS.map((r, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={r.title}
                  className="flex flex-col rounded-lg border border-white/0 bg-white/[0.02]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="flex w-full cursor-pointer items-center gap-4 p-6 text-left"
                  >
                    <img src={REASON_ICON} alt="" className="h-9 w-9 shrink-0" />
                    <h3 className="flex-1 text-2xl font-bold leading-9 tracking-[-0.56px] text-white">
                      {r.title}
                    </h3>
                    <span className="shrink-0 text-2xl font-light leading-none text-white">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="px-6 pb-6 pl-[76px] text-base leading-6 tracking-[-0.16px] text-white">
                      {r.desc}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
