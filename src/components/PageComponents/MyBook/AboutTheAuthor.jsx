import tonyAuthorImage from "@/assets/images/my_book/author/tony_author.webp";
import {
  BOOK_AUTHOR_BIO,
  BOOK_FOREWORD_ATTRIBUTION,
  BOOK_FOREWORD_QUOTE,
} from "@/constants/myBook";

export default function AboutTheAuthor() {
  return (
    <section
      className="w-full bg-white py-12 md:py-[60px]"
      data-name="About The Author"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-4 md:gap-12 md:px-8">
        <h2 className="font-heading text-[28px] font-bold uppercase leading-normal tracking-[0.7px] text-[#0f172a] md:text-[34px]">
          About The Author
        </h2>

        <div className="flex w-full flex-col gap-8 rounded-2xl bg-[#f6f8fa] py-5 md:pl-5 pl-4 md:pr-[30px] pr-4 md:gap-8 md:py-5 md:pl-5">
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-20 xl:gap-[70px]">
            <div className="relative mx-auto md:h-[380px] h-[380px] w-full md:max-w-[300px] max-w-[380px] shrink-0 overflow-hidden rounded-xl sm:h-[325px] lg:mx-0">
              <img
                src={tonyAuthorImage}
                alt="Tony Martignetti"
                className="absolute md:h-[126%] h-[380px] max-w-none w-[340px] md:w-[125%] md:-left-[12%] -left-3 top-0 md:-top-[7%] md:object-cover"
              />
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-6 md:gap-20">
              <div className="font-sans text-lg font-normal leading-[26px] text-[#020120]">
                <p>{BOOK_AUTHOR_BIO[0]}</p>
              </div>

              <div className="flex flex-col gap-1">                
                <p className="font-heading text-[22px] font-medium leading-normal text-[#0f172a]">
                  Tony Martignetti, Esq.
                </p>
                <p className="font-sans text-[13px] font-semibold leading-normal tracking-[1px] text-[#059669]">
                  The Planned Giving Evangelist
                </p>
              </div>
            </div>
          </div>

          <blockquote className="flex w-full flex-col gap-2.5 rounded-[20px] border-l-[7px] border-[#059669] bg-[rgba(14,113,89,0.1)] px-6 py-4">
            <p className="font-heading text-[28px] font-normal leading-8 text-[#152652]">
              {BOOK_FOREWORD_QUOTE}
            </p>
            <footer className="font-sans text-[15px] font-normal leading-8 text-[#152652]">
              {BOOK_FOREWORD_ATTRIBUTION}
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
