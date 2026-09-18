import STAT_IMAGE from "@/assets/images/mybook/stat-image.webp";

export default function AboutTheBook() {
  return (
    <section className="w-full bg-white px-4 py-12 md:px-[60px] md:py-20">
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-12 md:flex-row md:gap-20">
        <div className="flex flex-col gap-4 md:w-1/2 md:flex-row md:gap-6">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={STAT_IMAGE}
              alt=""
              className="h-[280px] w-full object-cover md:h-[450px] md:w-[302px]"
            />
            <div
              className="absolute inset-0"
              // style={{
              //   backgroundImage:
              //     "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%)",
              // }}
            />
            <div className="absolute bottom-6 left-6 flex flex-col gap-1">
              <p className="text-4xl font-bold leading-[48px] text-white md:text-[48px] md:leading-[60px]">
                29+
              </p>
              <p className="text-base leading-[22.4px] tracking-[-0.16px] text-white">
                Years of proven results
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:justify-between">
            <div className="flex flex-1 flex-col justify-center gap-1 rounded-lg bg-[#0a1730] p-6">
              <p className="text-4xl font-bold leading-[48px] text-white md:text-[48px] md:leading-[60px]">
                29+
              </p>
              <p className="text-base leading-[22.4px] tracking-[-0.16px] text-[#c6c6c6]">
                Years of proven results
              </p>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-1 rounded-lg bg-[#0a1730] p-6">
              <p className="text-4xl font-bold leading-[48px] text-white md:text-[48px] md:leading-[60px]">
                $150M+
              </p>
              <p className="text-base leading-[22.4px] tracking-[-0.16px] text-[#c6c6c6]">
                In bequests secured for clients
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:w-1/2 md:gap-4">
          <div className="flex flex-col gap-2">
            <p className="font-script text-2xl leading-[33.6px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
              Forget someday, start Monday.
            </p>
            <h2 className="text-[28px] font-bold leading-[39.2px] text-[#151515] md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
              About the book
            </h2>
          </div>
          <p className="text-base leading-[22.4px] tracking-[-0.16px] text-[#494949]">
            If your nonprofit doesn't have an active Planned Giving program,
            you can launch one next week. Tony Martignetti has spent decades
            helping small and mid-size nonprofits build lasting endowments,
            not with complicated gift vehicles or expensive consultants, but
            with a simple, repeatable process starting with bequests.
            <br />
            <br />
            This book cuts through the myths that keep nonprofits stuck, and
            gives you a clear 3-step, 1-week launch plan you can start on
            Monday. Written for executive directors, fundraisers and board
            members who are tired of "someday" and ready to build something
            that lasts.
          </p>
        </div>
      </div>
    </section>
  );
}
