import tonyAvatarImage from "@/assets/images/my_book/author/tony_avatar.webp";
import {
  BOOK_FOREWORD_ATTRIBUTION,
  BOOK_FOREWORD_QUOTE,
} from "@/constants/myBook";
import QuoteBlock from "@/components/PageComponents/Principles/QuoteBlock";

export default function AboutTheAuthor() {
  return (
    <section
      className="w-full bg-white py-12 md:py-20"
      data-name="About The Author"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 px-4 md:px-8">
        <h2 className="font-heading text-[28px] font-bold uppercase tracking-[0.7px] text-[#0f172a] md:text-[34px]">
          About The Author
        </h2>

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img
              src={tonyAvatarImage}
              alt="Tony Martignetti"
              className="size-[75px] rounded-full object-cover"
            />
            <div>
              <p className="font-heading text-[22px] font-medium text-[#0f172a]">
                Tony Martignetti, Esq.
              </p>
              <p className="font-sans text-[13px] font-semibold uppercase tracking-[1px] text-[#059669]">
                The Planned Giving Evangelist
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-0 font-sans text-lg leading-7 text-[#4b5563]">
          <p>
            If your nonprofit doesn&apos;t have an active Planned Giving
            program, you can launch one next week. Tony Martignetti has spent
            decades helping small- and mid-size nonprofits build lasting
            endowments not with complicated gift vehicles or expensive
            consultants, but with a simple, repeatable process starting with
            bequests. This book cuts through the myths that keep nonprofits stuck, and
            gives you a clear 3-step, 1-week launch plan you can start on
            Monday. Written for executive directors, fundraisers, and board
            members who are tired of &quot;someday&quot; and ready to build
            something that lasts.
          </p>
        </div>

        <QuoteBlock
          quote={BOOK_FOREWORD_QUOTE}
          attribution={BOOK_FOREWORD_ATTRIBUTION}
        />
      </div>
    </section>
  );
}
