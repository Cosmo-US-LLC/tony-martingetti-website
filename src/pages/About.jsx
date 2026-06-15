import { usePageMeta } from "@/hooks/usePageMeta";
import AboutHero from "@/components/PageComponents/About/AboutHero";
import TonysStory from "@/components/PageComponents/About/TonysStory";
import ExpertStats from "@/components/PageComponents/About/ExpertStats";
import CredentialsMilestones from "@/components/PageComponents/About/CredentialsMilestones";
import FeaturedIn from "@/components/PageComponents/About/FeaturedIn";
import AboutFooter from "@/components/PageComponents/About/AboutFooter";

function About() {
  usePageMeta(
    "About Tony Martignetti | Planned Giving Expert",
    "Meet Tony Martignetti, Esq. — America's Planned Giving Guide. Learn about his journey from law to legacy giving and his mission to launch 1,000+ programs.",
  );

  // some changings

  return (
    <div>
      <AboutHero />
      <TonysStory />
      <ExpertStats />
      <CredentialsMilestones />
      <FeaturedIn />
      <AboutFooter />
    </div>
  );
}

export default About;
