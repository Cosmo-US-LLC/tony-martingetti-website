export default function DarkQuoteCTA({ quote }) {
  return (
    <section className="w-full bg-[#0a1730] px-4 py-12 md:px-[60px] md:py-20">
      <div className="mx-auto flex max-w-[975px] flex-col items-center gap-4 text-center">
        <p className="text-2xl font-bold leading-8 text-white md:text-[40px] md:leading-[48px] md:tracking-[-0.8px]">
          {quote}
        </p>
        <p className="font-script text-2xl leading-[33.6px] text-[#079669] md:text-[32px] md:leading-[44.8px]">
          Tony Martignetti
        </p>
        <a
          href="https://tony.ma/Amazon"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 w-full cursor-pointer rounded-lg bg-[#079669] px-4 py-3 text-center text-base font-semibold leading-6 tracking-[-0.5px] text-white transition-colors hover:bg-[#057a56] md:w-fit"
        >
          Order Now
        </a>
      </div>
    </section>
  );
}
