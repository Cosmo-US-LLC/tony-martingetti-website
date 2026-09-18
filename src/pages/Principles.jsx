import { usePageMeta } from "@/hooks/usePageMeta";
import PrinciplesHero from "@/components/PageComponents/Principles/PrinciplesHero";
import ThreeStepLaunch from "@/components/PageComponents/Principles/ThreeStepLaunch";
import DarkQuoteCTA from "@/components/PageComponents/Principles/DarkQuoteCTA";
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
      <DarkQuoteCTA quote="&#8220;Because your work must continue in your community for decades and generations to come, your nonprofit is focusing on long-term gifts.&#8221;" />
      <SixMyths />
      <DarkQuoteCTA quote="&#8220;It's not a conversation about death. It's a conversation about life. The life and longevity of your nonprofit.&#8221;" />
      <PrinciplesFAQ />
      <PrinciplesFooter />
    </div>
  );
}

export default Principles;
