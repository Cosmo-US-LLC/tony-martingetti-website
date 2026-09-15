import { AMAZON_BOOK_URL } from "@/constants";

export default function JoinWaitlistHero() {
  return (
    <section className="relative w-full overflow-hidden px-6 py-28 min-h-[85vh] 
         md:min-h-[720px] 
         md:px-12 md:py-20 
         waitlist_hero_bg">
      <div
        className="relative mx-auto flex max-w-[896px] flex-col items-center"
        data-name="Container"
      >
        <div
          className="mb-6 inline-flex items-center justify-center rounded-full border border-[#34d399] bg-[rgba(16,185,129,0.2)] px-5 py-2"
          data-name="Overlay+Border"
        >
          <span className="text-sm font-bold uppercase leading-5 tracking-[0.7px] text-[#6ee7b7]">
            ✨ Book is Live Now
          </span>
        </div>

        <h1
          className="heading_one text-center text-white"
          data-name="Heading 1"
        >
          <span className="block">500+ Nonprofits Are</span>
          <span className="block">Launching Their</span>
          <span className="block text-[#34d399]">Planned Giving</span>
          <span className="block text-[#34d399]">Programs</span>
        </h1>

        <p
          className="mt-6 max-w-[632px] text-center paragraph_one text-[#DBEAFE]"
          data-name="Subtext"
        >
          Get Tony Martignetti's proven program in Planned Giving Accelerated
          - live now on Amazon.
        </p>

        <a
          href={AMAZON_BOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="primary_btn_two mt-8 shrink-0 cursor-pointer"
          data-name="Button"
        >
          Order Now
        </a>
      </div>
    </section>
  );
}
