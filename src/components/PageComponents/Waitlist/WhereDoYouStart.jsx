// Replace with local asset for production; Figma asset URLs expire after 7 days.
const IMG_TEAM_MEETING =
  "https://www.figma.com/api/mcp/asset/38f7ec3c-478e-4a33-ad9d-4bc262868565";

export default function WhereDoYouStart() {
  return (
    <section
      className="w-full bg-white px-6 py-16 md:px-12 md:py-20 lg:px-[96px] lg:py-[80px]"
      data-name="Section"
    >
      <div
        className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 lg:min-h-0 lg:flex-row lg:gap-12"
        data-name="Container"
      >
        <div
          className="flex flex-1 flex-col gap-6"
          data-name="Content"
        >
          <h3
            className="font-heading text-3xl font-bold uppercase leading-10 tracking-[0.72px] text-[#0f172a] md:text-[36px] md:leading-[40px]"
            data-name="Heading 3"
          >
            <span className="block">You Know Your Donors Want to</span>
            <span className="block">Leave a Legacy. But Where Do You</span>
            <span className="block">Start?</span>
          </h3>

          <p className="font-sans text-lg font-normal leading-7 text-[#4b5563]">
            Most nonprofits leave millions on the table because they don't have a
            Planned Giving program.
          </p>

          <div
            className="w-full rounded-r-lg border-l-4 border-[#10b981] bg-[#ecfdf5] py-6 pl-7 pr-6"
            data-name="Background+VerticalBorder"
          >
            <p className="font-heading text-2xl font-bold leading-8 tracking-[0.48px] text-[#059669]">
              75-90% of planned gifts
            </p>
            <p className="mt-2 font-sans text-base font-normal leading-6 text-[#374151]">
              come through simple wills and bequests, and your donors are ready
              to give.
            </p>
          </div>

          <p className="font-sans text-lg font-normal leading-7 text-[#4b5563]">
            The challenge? Knowing how to ask, who to approach, and how to build
            a program that lasts.
          </p>
        </div>

        <div
          className="relative w-full flex-1 overflow-hidden rounded-xl shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
          data-name="Team meeting"
        >
          <img
            src={IMG_TEAM_MEETING}
            alt="Team meeting and planning session"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
