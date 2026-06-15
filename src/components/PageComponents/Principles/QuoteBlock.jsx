export default function QuoteBlock({ quote, attribution }) {
  return (
    <blockquote className="w-full rounded-[30px] border-l-[7px] border-[#059669] bg-[rgba(14,113,89,0.1)] py-4 pl-6 pr-6 md:pl-10 md:pr-[87px]">
      <p className="font-heading text-xl leading-8 text-[#152652] md:text-[28px] md:leading-8">
        {quote}
      </p>
      <footer className="mt-2 font-sans text-[15px] leading-8 text-[#152652]">
        {attribution}
      </footer>
    </blockquote>
  );
}
