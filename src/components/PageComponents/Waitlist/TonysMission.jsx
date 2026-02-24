export default function TonysMission() {
  return (
    <section
      className="w-full bg-white px-4 py-10 md:px-8 md:py-18"
      data-name="Section"
    >
      <div
        className="mx-auto flex max-w-[768px] w-full flex-col items-center md:gap-6 gap-4 text-center"
        data-name="Container"
      >
        <h2 className="heading_two text-[#0f172a]" data-name="Heading 3">
          Tony's Mission
        </h2>

        <p
          className="max-w-[720px] font-sans md:text-[24px] text-[18px] font-normal md:leading-8 leading-7 text-[#4b5563]"
          data-name="Mission statement"
        >
          Launch{" "}
          <span className="font-bold text-[#059669]">
            1,000+ new Planned Giving programs
          </span>{" "}
          across the U.S., raising billions for nonprofits that change lives.
        </p>

        <p
          className="font-sans md:text-[18px] text-[14px]  font-normal leading-7 text-[#6b7280]"
          data-name="Tagline"
        >
          Your organization could be next.
        </p>
      </div>
    </section>
  );
}
