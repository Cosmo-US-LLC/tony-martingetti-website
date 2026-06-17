import featuredImage from "@/assets/images/about/featured/tony_featured.webp";
import logo1 from "@/assets/images/about/media/logo_1.webp";
import logo2 from "@/assets/images/about/media/logo_2.webp";
import logo3 from "@/assets/images/about/media/logo_3.webp";
import logo4 from "@/assets/images/about/media/logo_4.webp";
import logo5 from "@/assets/images/about/media/logo_5.webp";
import logo6 from "@/assets/images/about/media/logo_6.webp";
import logo7 from "@/assets/images/about/media/logo_7.webp";
import logo8 from "@/assets/images/about/media/logo_8.webp";

const MEDIA_LOGO_ROWS = [
  [logo1, logo2, logo3],
  [logo4, logo5, logo6],
  [logo7, logo8],
];

function MediaLogoCard({ logo }) {
  return (
    <div className="flex h-16 min-w-0 flex-1 items-center justify-center rounded-[10px] border border-[#dedede] bg-white px-3">
      <img
        src={logo}
        alt=""
        className="max-h-10 w-auto max-w-full object-contain"
      />
    </div>
  );
}

export default function FeaturedIn() {
  return (
    <section
      className="w-full bg-white py-16 md:py-20"
      data-name="Featured In"
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12 px-4 md:px-8 lg:flex-row lg:gap-20">
        <div className="flex w-full flex-1 flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="heading_two text-[#0f172a]">
              Featured In & Quoted By
            </h2>
            <p className="font-sans text-lg leading-7 text-[#4b5563] md:text-xl">
              Tony&apos;s expertise has been recognized by the most respected
              publications in finance, philanthropy, and nonprofits.
            </p>
          </div>

          <div className="flex w-full flex-col gap-4">
            {MEDIA_LOGO_ROWS.map((row, rowIndex) => (
              <div key={rowIndex} className="flex w-full gap-2">
                {row.map((logo, logoIndex) => (
                  <MediaLogoCard key={logoIndex} logo={logo} />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[320px] w-full max-w-[558px] shrink-0 overflow-hidden rounded-2xl md:h-[420px] lg:h-[509px]">
          <img
            src={featuredImage}
            alt="Tony Martignetti featured portrait"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
