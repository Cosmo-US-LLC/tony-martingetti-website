import AUTHOR_IMAGE from "@/assets/images/mybook/author-image.png";

export default function AboutTheAuthor() {
  return (
    <section className="w-full bg-white px-4 py-12 md:px-[200px] md:py-20">
      <div className="mx-auto flex w-full max-w-[1040px] flex-col gap-8 md:gap-12">
        <h2 className="text-center text-[28px] font-bold leading-[39.2px] text-[#151515] md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
          About the author
        </h2>

        <div className="flex flex-col gap-6">
          <p className="text-left text-base leading-[22.4px] tracking-[-0.16px] text-[#494949] md:text-center">
            Tony Martignetti left a comfortable law career in 1997 to
            champion a cause almost nobody in fundraising wanted to talk
            about. He founded Martignetti Planned Giving Advisors in 2003,
            and in the decades since he has guided nonprofits of every size,
            from small social service agencies to major universities, to more
            than $150 million in secured bequests.
            <br />
            <br />
            He hosts Tony Martignetti Nonprofit Radio, now past 750 episodes,
            is a Temple University School of Law graduate, a Carnegie Mellon
            alumnus and a U.S. Air Force veteran. He has also done stand-up
            comedy, which is roughly the only explanation for how he makes
            wills and bequests entertaining.
            <br />
            <br />
            He wrote this book because the nonprofits that need Planned
            Giving most are the ones most often told they aren't ready for
            it. They are.
          </p>

          <img
            src={AUTHOR_IMAGE}
            alt="Tony Martignetti"
            className="h-[280px] w-full rounded-2xl object-cover md:h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}
