import { BOOK_AWARDS } from "@/constants/myBook";

export default function BookAwards() {
  return (
    <section className="w-full bg-[#f4f8f6] px-4 py-12 md:px-[60px] md:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8 md:gap-10">
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="font-script text-2xl leading-[33.6px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
            Now ranking on Amazon
          </p>
          <h2 className="text-[28px] font-bold leading-[39.2px] text-[#0a1730] md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
            #1 New Release in two categories
          </h2>
        </div>

        <div className="mx-auto flex w-full max-w-[1000px] flex-col gap-8 md:flex-row md:gap-10">
          {BOOK_AWARDS.map((award) => (
            <figure key={award.title} className="flex flex-1 flex-col gap-3">
              <a
                href={award.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[120px] items-center justify-center overflow-hidden rounded-lg border bg-white"
              >
                {award.image ? (
                  <img
                    src={award.image}
                    alt={award.title}
                    className="h-auto w-full"
                  />
                ) : (
                  <span className="px-4 text-center text-sm text-[#494949]">
                    {award.placeholder}
                  </span>
                )}
              </a>
              <figcaption className="flex flex-col gap-1">
                <span className="text-base font-bold text-[#0a1730] md:text-lg">
                  {award.title}
                </span>
                <span className="text-sm text-[#494949]">{award.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
