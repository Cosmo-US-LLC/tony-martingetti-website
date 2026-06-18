import { BOOK_STATS } from "@/constants/myBook";

function StatRow({ label, value }) {
  return (
    <div className="rounded-xl border border-[#dedede] bg-white p-5">
      <div className="flex items-center justify-between gap-4">
        <p className="font-sans text-lg leading-[22.75px] text-[#0f172a]">
          {label}
        </p>
        <p className="font-heading text-[40px] font-bold uppercase leading-7 tracking-[0.36px] text-[#059669]">
          {value}
        </p>
      </div>
    </div>
  );
}

export default function AboutTheBook() {
  return (
    <section
      className="w-full bg-[#f6f8fa] py-12 md:py-[60px]"
      data-name="About The Book"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 px-4 md:px-8 lg:flex-row lg:items-center lg:gap-[60px]">
        <div className="flex-1">
          <h2 className="heading_two text-[#0f172a]">About The Book</h2>
          <div className="mt-4 space-y-0 font-sans text-lg leading-7 text-[#4b5563]">
            <p>
              If your nonprofit doesn&apos;t have an active Planned Giving
              program, you can launch one next week. Tony Martignetti has spent
              decades helping small and mid-size nonprofits build lasting
              endowments not with complicated gift vehicles or expensive
              consultants, but with a simple, repeatable process starting with
              bequests. This book cuts through the myths that keep nonprofits stuck, and
              gives you a clear 3-step, 1-week launch plan you can start on
              Monday. Written for executive directors, fundraisers, and board
              members who are tired of &quot;someday&quot; and ready to build
              something that lasts.
            </p>
          </div>
        </div>

        <div className="flex w-full max-w-[577px] flex-col gap-6">
          {BOOK_STATS.map((stat) => (
            <StatRow key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
