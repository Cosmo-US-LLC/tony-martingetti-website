import { usePageMeta } from "@/hooks/usePageMeta";
import LandingNav from "@/components/PageComponents/LandingPage/LandingNav";
import LandingHero from "@/components/PageComponents/LandingPage/LandingHero";
import DontNeedSection from "@/components/PageComponents/LandingPage/DontNeedSection";
import LiveSessionSection from "@/components/PageComponents/LandingPage/LiveSessionSection";
import BequestSystemSection from "@/components/PageComponents/LandingPage/BequestSystemSection";
import AboutAuthorSection from "@/components/PageComponents/LandingPage/AboutAuthorSection";
import MomentStatsSection from "@/components/PageComponents/LandingPage/MomentStatsSection";
import ChapterCTASection from "@/components/PageComponents/LandingPage/ChapterCTASection";
import FAQSection from "@/components/PageComponents/LandingPage/FAQSection";
import LandingFooter from "@/components/PageComponents/LandingPage/LandingFooter";

function LandingPage() {
  usePageMeta(
    "Book Waitlist",
    "The bequest-first system behind $150M+ in gifts, in one book. Join the waitlist for Chapter 1, free, plus the Founders Rate and a live working session with Tony Martignetti.",
  );

  return (
    <div className="font-landing">
      <LandingNav />
      <LandingHero />
      <DontNeedSection />
      <LiveSessionSection />
      <BequestSystemSection />
      <AboutAuthorSection />
      <MomentStatsSection />
      <ChapterCTASection />
      <FAQSection />
      <LandingFooter />
    </div>
  );
}

export default LandingPage;
