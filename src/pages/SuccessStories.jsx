import { usePageMeta } from "@/hooks/usePageMeta";
import SuccessStoriesHero from "@/components/PageComponents/SuccessStories/SuccessStoriesHero";
import SuccessStats from "@/components/PageComponents/SuccessStories/SuccessStats";
import FeaturedSuccessStory from "@/components/PageComponents/SuccessStories/FeaturedSuccessStory";
import TestimonialLibrary from "@/components/PageComponents/SuccessStories/TestimonialLibrary";
import VideoTestimonials from "@/components/PageComponents/SuccessStories/VideoTestimonials";
import SuccessStoriesFooter from "@/components/PageComponents/SuccessStories/SuccessStoriesFooter";

function SuccessStories() {
  usePageMeta(
    "Success Stories | Tony Martignetti Planned Giving",
    "Read real success stories and testimonials from nonprofits who built planned giving programs with Tony Martignetti.",
  );

  return (
    <div>
      <SuccessStoriesHero />
      <SuccessStats />
      <FeaturedSuccessStory />
      <TestimonialLibrary />
      <VideoTestimonials />
      <SuccessStoriesFooter />
    </div>
  );
}

export default SuccessStories;
