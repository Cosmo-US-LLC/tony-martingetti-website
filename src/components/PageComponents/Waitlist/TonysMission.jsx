export default function TonysMission() {
  return (
    <section
      className="w-full bg-white px-6 py-16 md:px-12 md:py-20 lg:py-[80px]"
      data-name="Section"
    >
      <div
        className="mx-auto flex max-w-[768px] w-full flex-col items-center gap-6 text-center"
        data-name="Container"
      >
        <h3
          className="font-heading text-3xl font-bold uppercase leading-9 tracking-[0.6px] text-[#0f172a]"
          data-name="Heading 3"
        >
          Tony's Mission
        </h3>

        <p
          className="max-w-[720px] font-sans text-2xl font-normal leading-8 text-[#4b5563]"
          data-name="Mission statement"
        >
          Launch{" "}
          <span className="font-bold text-[#059669]">
            1,000+ new Planned Giving programs
          </span>{" "}
          across the U.S., raising billions for nonprofits that change lives.
        </p>

        <p
          className="font-sans text-lg font-normal leading-7 text-[#6b7280]"
          data-name="Tagline"
        >
          Your organization could be next.
        </p>
      </div>
    </section>
  );
}
