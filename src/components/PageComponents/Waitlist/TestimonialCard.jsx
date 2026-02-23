export default function TestimonialCard() {
  return (
    <section
      className="w-full bg-white px-6 py-16 md:px-12 md:py-20 lg:py-[80px]"
      data-name="Section"
    >
      <div
        className="relative mx-auto max-w-[896px] w-full shrink-0 rounded-2xl p-8 md:p-14"
        style={{
          backgroundImage:
            "linear-gradient(159.22deg, rgb(236, 253, 245) 0%, rgb(209, 250, 229) 100%)",
        }}
        data-name="Background"
      >
        <div
          className="absolute left-6 top-16 -translate-y-1/2 font-serif text-[96px] leading-[96px] text-[#059669] opacity-20"
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
            <p className="font-heading text-lg font-bold uppercase leading-7 tracking-[0.36px] text-[#0f172a]">
              Cheryl McCormick
            </p>
            <p className="font-sans text-base font-normal leading-6 text-[#4b5563]">
              Development Director
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
