import Join500Hero from "@/components/PageComponents/Waitlist/Join500Hero";
import StatsCard from "@/components/PageComponents/Waitlist/StatsCard";
import WhereDoYouStart from "@/components/PageComponents/Waitlist/WhereDoYouStart";
import TonysMission from "@/components/PageComponents/Waitlist/TonysMission";
import BeFirstInLine from "@/components/PageComponents/Waitlist/BeFirstInLine";
import FreeToolkit from "@/components/PageComponents/Waitlist/FreeToolkit";
import WhatYouGet from "@/components/PageComponents/Waitlist/WhatYouGet";
import TestimonialCard from "@/components/PageComponents/Waitlist/TestimonialCard";
import ReadyToTransform from "@/components/PageComponents/Waitlist/ReadyToTransform";

function Waitlist() {
  return (
    <div>
      <Join500Hero />
      <div className="mx-auto max-w-6xl px-6 py-8 md:py-12">
        <StatsCard />
      </div>
      <WhereDoYouStart />
      <TonysMission />
      <BeFirstInLine />
      <FreeToolkit />
      <WhatYouGet />
      <TestimonialCard />
      <ReadyToTransform />
    </div>
  );
}

export default Waitlist;
