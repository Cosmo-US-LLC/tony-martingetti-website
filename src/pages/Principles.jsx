import { usePageMeta } from "@/hooks/usePageMeta";
import PrinciplesHero from "@/components/PageComponents/Principles/PrinciplesHero";
import ThreeStepLaunch from "@/components/PageComponents/Principles/ThreeStepLaunch";
import SixMyths from "@/components/PageComponents/Principles/SixMyths";
import PrinciplesFAQ from "@/components/PageComponents/Principles/PrinciplesFAQ";
import PrinciplesFooter from "@/components/PageComponents/Principles/PrinciplesFooter";

function Principles() {
  usePageMeta(
    "Principles & Frameworks | Tony Martignetti Planned Giving",
    "Explore Tony Martignetti's proven Planned Giving frameworks — the 3-Step Launch, top myths debunked, and answers to your most common questions.",
  );

  return (
    <div>
      <PrinciplesHero />
      <ThreeStepLaunch />
      <SixMyths />
      <PrinciplesFAQ />
      <PrinciplesFooter />
    </div>
  );
}

export default Principles;
