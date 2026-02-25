export default function TestimonialCard() {
  return (
    <section
      className="w-full bg-white px-4 md:px-8 py-16 md:py-20"
      data-name="Section"
    >
      <div
        className="relative mx-auto max-w-[784px] w-full shrink-0 rounded-2xl md:px-12 px-4 md:pt-16 pt-14 md:pb-8 pb-6"
        style={{
          backgroundImage:
            "linear-gradient(159.22deg, rgb(236, 253, 245) 0%, rgb(209, 250, 229) 100%)",
        }}
        data-name="Background"
      >
        <div
          className="absolute top-[10px] left-[10px] md:top-[14px] md:left-[20px] font-serif md:text-[96px] text-[72px] leading-[96px] text-[#059669] opacity-20"
          aria-hidden
        >
          "
        </div>

        <div
          className="relative flex w-full flex-col items-start gap-8"
          data-name="Container"
        >
          <blockquote className="w-full" data-name="Quote">
            <p className="font-sans text-2xl font-light italic leading-9 text-[#1f2937] md:text-[30px] md:leading-[36px]">
              Within 6 months of joining Tony's program, we secure{" "}
              <span className="font-bold not-italic text-[#059669]">
                $2.2 million in confirmed gift commitments
              </span>
              . The step-by-step guidance and community support made all the
              difference.
            </p>
          </blockquote>

          <div
            className="flex w-full flex-col items-start gap-0"
            data-name="Attribution"
          >
            <p className="font-heading md:text-[18px] text-[14px] font-bold uppercase leading-7 tracking-[0.36px] text-[#0f172a]">
              Cheryl McCormick
            </p>
            <p className="font-sans text-[14px] md:text-[16px] font-normal leading-6 text-[#4b5563]">
              Development Director
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
