import { Link } from "react-router-dom";

// Optional background texture; replace with local asset for production.
const IMG_BACKGROUND =
  "https://www.figma.com/api/mcp/asset/1d062e0d-4bce-4222-b931-5d0ea8960039";

export default function Join500Hero() {
  return (
    <section
      className="relative w-full overflow-hidden px-6 py-20 md:px-12 md:py-24 lg:px-[72px] lg:py-32"
      style={{
        backgroundImage:
          "linear-gradient(135deg, rgb(15, 23, 42) 0%, rgb(30, 58, 138) 100%)",
      }}
      data-name="Section"
    >
      <div
        className="absolute inset-0 opacity-10"
        data-name="Image"
        aria-hidden
      >
        <img
          src={IMG_BACKGROUND}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div
        className="relative mx-auto flex max-w-[896px] flex-col items-center"
        data-name="Container"
      >
        <div
          className="mb-6 inline-flex items-center justify-center rounded-full border border-[#34d399] bg-[rgba(16,185,129,0.2)] px-5 py-2"
          data-name="Overlay+Border"
        >
          <span className="font-sans text-sm font-bold uppercase leading-5 tracking-[0.7px] text-[#6ee7b7]">
            ✨ Limited Spots Available
          </span>
        </div>

        <h1
          className="font-heading text-center text-4xl font-bold uppercase leading-tight tracking-[1.44px] text-white md:text-5xl lg:text-[72px] lg:leading-[72px]"
          data-name="Heading 1"
        >
          <span className="block">Join 500+ Nonprofits</span>
          <span className="block">Waiting to Launch</span>
          <span className="block text-[#34d399]">Their Planned Giving</span>
          <span className="block text-[#34d399]">Programs</span>
        </h1>

        <p
          className="mt-6 max-w-[672px] text-center font-sans text-lg font-light leading-7 text-[#dbeafe] md:text-xl md:leading-7"
          data-name="Subtext"
        >
          Get priority access to Tony Martignetti's proven program + your FREE
          Success Toolkit (valued at $297)
        </p>

        <Link
          to="/waitlist#join"
          className="primary_btn mt-8 shrink-0"
          data-name="Button"
        >
          Join the Waitlist Now
        </Link>
      </div>
    </section>
  );
}
