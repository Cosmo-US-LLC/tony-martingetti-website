import checkIcon from "@/assets/images/principles/icons/check.svg";

export default function MythCard({ number, myth, reality, icon: Icon }) {
  return (
    <article
      className="group flex cursor-default flex-col gap-[30px] rounded-xl border border-gray-200 md:border-transparent bg-white px-4 md:px-6 py-[30px] shadow-[0px_3px_3px_rgba(37,37,37,0.07)] transition-[border-color,box-shadow] hover:border-[#0e7159] hover:shadow-[0px_3px_3px_rgba(37,37,37,0.15)]"
    >
      <div className="flex gap-3">
        <Icon className="size-[38px] shrink-0 text-[#0e7159] transition-colors duration-250 md:text-[#c2d2e2] md:group-hover:text-[#0e7159]" />
        <div className="flex min-w-0 flex-col gap-3">
          <p className="font-heading text-base font-bold uppercase leading-8 text-[#0f172a]">
            {number}
          </p>
          <p className="font-sans text-lg leading-5 text-[#020120]">{myth}</p>
        </div>
      </div>

      <div className="flex gap-2.5 rounded-lg bg-[#edf8f1] px-3 py-4">
        <img src={checkIcon} alt="" className="mt-1 size-5 shrink-0" aria-hidden="true" />
        <div className="flex min-w-0 flex-col gap-3">
          <p className="font-heading text-lg font-bold uppercase leading-8 text-[#0e7159]">
            Debunked:
          </p>
          <p className="font-sans text-lg leading-[26px] text-[#020120]">{reality}</p>
        </div>
      </div>
    </article>
  );
}
