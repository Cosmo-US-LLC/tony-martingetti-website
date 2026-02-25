import IMG_TEAM_MEETING_DESKTOP from "@/assets/images/waitlist/where_do_you/where_do_you_desktop.webp";
import IMG_TEAM_MEETING_MOBILE from "@/assets/images/waitlist/where_do_you/where_do_you_mobile.webp";

export default function WhereDoYouStart() {
  return (
    <section
      className="w-full bg-[#FFFFFF] py-16 md:py-20 "
      data-name="Section"
    >
      <div
        className="mx-auto flex w-full max-w-[1270px] px-4 md:px-8 flex-col md:flex-row items-center gap-10"
        data-name="Container"
      >
        <div
          className="md:hidden relative w-full flex-1 overflow-hidden rounded-xl shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
          data-name="Team meeting"
        >
          <img
            src={IMG_TEAM_MEETING_MOBILE}
            alt="Team meeting and planning session"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div
          className="flex flex-1 flex-col gap-6 text-left"
          data-name="Content"
        >
          <h2 className="heading_two text-[#0f172a]" data-name="Heading 2">
            <span className="block">You Know Your Donors Want to</span>
            <span className="block">Leave a Legacy. But Where Do You</span>
            <span className="block">Start?</span>
          </h2>

          <p className="paragraph_one text-[#4b5563]">
            Most nonprofits leave millions on the table because they don't have
            a Planned Giving program.
          </p>

          <div
            className="w-full rounded-r-lg border-l-4 border-[#10b981] bg-[#ecfdf5] py-6 pl-7 pr-6"
            data-name="Background+VerticalBorder"
          >
            <p className="heading_three text-[#059669]">
              75-90% of planned gifts
            </p>
            <p className="mt-2 font-sans text-base font-normal leading-6 text-[#374151]">
              come through simple wills and bequests, and your donors are ready
              to give.
            </p>
          </div>

          <p className="paragraph_one text-[#4b5563]">
            The challenge? Knowing how to ask, who to approach, and how to build
            a program that lasts.
          </p>
        </div>

        <div
          className="max-md:hidden relative w-full flex-1 h-[620px] overflow-hidden rounded-xl shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
          data-name="Team meeting"
        >
          <img
            src={IMG_TEAM_MEETING_DESKTOP}
            alt="Team meeting and planning session"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
