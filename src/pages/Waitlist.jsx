import { usePageMeta } from "@/hooks/usePageMeta";
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
  usePageMeta(
    "Scale Your Legacy Fundraising | Planned Giving Accelerated by Tony",
    "Stop missing out on 90% of potential legacy gifts. Get the blueprints, templates, and strategy to build a $2M+ planned giving program.",
  );

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
