export default function JoinWaitlistHero() {

  const handleJoinClick = () => {
    const el = document.getElementById("join");

    if (location.pathname === "/waitlist" && el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/waitlist#join");
    }
  };

  return (
    <section className="relative w-full overflow-hidden px-6 py-28 min-h-[85vh] 
         md:min-h-[720px] 
         md:px-12 md:py-20 
         waitlist_hero_bg">
      <div
        className="relative mx-auto flex max-w-[896px] flex-col items-center"
        data-name="Container"
      >
        <div
          className="mb-6 inline-flex items-center justify-center rounded-full border border-[#34d399] bg-[rgba(16,185,129,0.2)] px-5 py-2"
          data-name="Overlay+Border"
        >
          <span className="text-sm font-bold uppercase leading-5 tracking-[0.7px] text-[#6ee7b7]">
            ✨ Limited Spots Available
          </span>
        </div>

        <h1
          className="heading_one text-center text-white"
          data-name="Heading 1"
        >
          <span className="block">Join 500+ Nonprofits</span>
          <span className="block">Waiting to Launch</span>
          <span className="block text-[#34d399]">Their Planned Giving</span>
          <span className="block text-[#34d399]">Programs</span>
        </h1>

        <p
          className="mt-6 max-w-[672px] text-center paragraph_one text-[#DBEAFE]"
          data-name="Subtext"
        >
          Get priority access to Tony Martignetti's proven program + your FREE
          Success Toolkit (valued at $297)
        </p>

        <button
          onClick={handleJoinClick}
          className="primary_btn_two mt-8 shrink-0"
          data-name="Button"
        >
          Join the Waitlist Now
        </button>
      </div>
    </section>
  );
}
