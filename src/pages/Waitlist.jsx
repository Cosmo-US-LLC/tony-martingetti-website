import JoinWaitlistHero from "@/components/PageComponents/Waitlist/JoinWaitlistHero";
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
      <JoinWaitlistHero />
      <StatsCard />
      <WhereDoYouStart />
      <BeFirstInLine />
      <FreeToolkit />
      <TestimonialCard />
      <WhatYouGet />
      <TonysMission />
      <ReadyToTransform />
    </div>
  );
}

export default Waitlist;
