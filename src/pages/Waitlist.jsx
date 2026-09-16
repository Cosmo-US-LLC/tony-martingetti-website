import { usePageMeta } from "@/hooks/usePageMeta";
import HeroSection from "@/components/PageComponents/Home/HeroSection";
import StatsFeature from "@/components/PageComponents/Home/StatsFeature";
import WebinarSeries from "@/components/PageComponents/Home/WebinarSeries";
import WhyChoose from "@/components/PageComponents/Home/WhyChoose";
import Testimonials from "@/components/PageComponents/Home/Testimonials";
import BookPerks from "@/components/PageComponents/Home/BookPerks";
import SignUp from "@/components/PageComponents/Home/SignUp";

function Waitlist() {
  usePageMeta(
    "Scale Your Legacy Fundraising | Planned Giving Accelerated by Tony",
    "Stop missing out on 90% of potential legacy gifts. Get the blueprints, templates, and strategy to build a $2M+ Planned Giving program.",
  );

  return (
    <div>
      <HeroSection />
      <StatsFeature />
      <WebinarSeries />
      <WhyChoose />
      <Testimonials />
      <BookPerks />
      <SignUp />
    </div>
  );
}

export default Waitlist;
