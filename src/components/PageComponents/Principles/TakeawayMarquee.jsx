function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
      <path d="M3 8l3.5 3.5L13 4.5" stroke="#494949" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function TakeawayMarquee({ items }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative w-full overflow-hidden bg-white px-4 py-4 md:px-0">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
      <div className="marquee-track flex w-max gap-12">
        {doubled.map((text, i) => (
          <div key={i} className="flex shrink-0 items-center gap-3">
            <Check />
            <p className="whitespace-nowrap text-base leading-[22.4px] tracking-[-0.16px] text-[#494949]">
              {text}
            </p>
          </div>
        ))}
      </div>
      <style>{`
        .marquee-track {
          animation: principles-marquee 40s linear infinite;
        }
        @keyframes principles-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
