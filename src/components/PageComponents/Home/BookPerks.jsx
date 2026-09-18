import AUTHOR from "@/assets/images/home/author.webp";
import PERK_BOOK from "@/assets/images/home/icons/perk-book.svg";
import PERK_WEBINAR from "@/assets/images/home/icons/perk-webinar.svg";
import PERK_SCRIPT from "@/assets/images/home/icons/perk-script.svg";
import PERK_WORKSHEET from "@/assets/images/home/icons/perk-worksheet.svg";

const PERKS = [
  {
    icon: PERK_BOOK,
    title: "The book",
    desc: "Prospect identification, gift vehicles, stewardship and marketing, all on demand.",
  },
  {
    icon: PERK_WEBINAR,
    title: "Four recorded webinars",
    desc: "A clear, actionable plan to go from zero to a working Planned Giving program in 90 days.",
  },
  {
    icon: PERK_SCRIPT,
    title: "Donor conversation script",
    desc: "Word-for-word templates for raising bequests, without the awkwardness.",
  },
  {
    icon: PERK_WORKSHEET,
    title: "Worksheets and checklists",
    desc: "The Prospect ID worksheet and the Top 10 Mistakes checklist that derail most first-time programs.",
  },
];

export default function BookPerks() {
  return (
    <section className="w-full bg-white px-4 pb-12 pt-12 md:px-[60px] md:pb-12 md:pt-0">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col overflow-hidden rounded-3xl bg-[#ecfef8] md:flex-row md:rounded-[48px]">
        <div className="flex flex-col gap-6 px-4 pt-6 md:w-1/2 md:gap-6 md:py-20 md:pl-16 md:pr-0">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-bold leading-[28.8px] tracking-[-0.48px] text-[#151515] md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
              What you get with the book
            </h2>
            <p className="text-base leading-[22.4px] tracking-[-0.16px] text-[#494949]">
              Discover the exclusive benefits available at the book's launch.
            </p>
          </div>

          <div className="flex flex-col gap-5 md:gap-[30px]">
            {PERKS.map((p) => (
              <div key={p.title} className="flex items-start gap-4 md:gap-9">
                <img src={p.icon} alt="" className="h-8 w-8 shrink-0 md:h-12 md:w-12" />
                <div className="flex flex-col gap-1 md:gap-2">
                  <h3 className="text-base font-semibold leading-[22.4px] text-[#151515] md:text-2xl md:font-bold md:leading-[28.8px] md:tracking-[-0.48px]">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-[19.6px] text-[#494949] md:text-base md:leading-[22.4px] md:tracking-[-0.16px]">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://tony.ma/Amazon"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-6 w-full cursor-pointer rounded-lg bg-[#079669] px-6 py-4 text-center text-base font-bold leading-6 text-white transition-colors hover:bg-[#057a56] md:mb-0 md:w-fit"
          >
            Order Now
          </a>
        </div>

        <div className="md:w-1/2">
          <img
            src={AUTHOR}
            alt="Tony Martignetti"
            className="h-[405px] w-full object-cover md:h-full"
          />
        </div>
      </div>
    </section>
  );
}
