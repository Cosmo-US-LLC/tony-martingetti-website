import { usePageMeta } from "@/hooks/usePageMeta";
import BookHero from "@/components/PageComponents/MyBook/BookHero";
import AboutTheBook from "@/components/PageComponents/MyBook/AboutTheBook";
import BookLaunchPlan from "@/components/PageComponents/MyBook/BookLaunchPlan";
import BookMyths from "@/components/PageComponents/MyBook/BookMyths";
import BookBequestReasons from "@/components/PageComponents/MyBook/BookBequestReasons";
import AboutTheAuthor from "@/components/PageComponents/MyBook/AboutTheAuthor";
import BookFooter from "@/components/PageComponents/MyBook/BookFooter";

function MyBook() {
  usePageMeta(
    "Planned Giving Accelerated | Tony Martignetti's Book",
    "Tony Martignetti's no-nonsense guide to launching a Planned Giving program in one week with bequests. Coming soon — get notified at launch.",
  );

  return (
    <div>
      <BookHero />
      <AboutTheBook />
      <BookLaunchPlan />
      <BookMyths />
      <BookBequestReasons />
      <AboutTheAuthor />
      <BookFooter />
    </div>
  );
}

export default MyBook;
