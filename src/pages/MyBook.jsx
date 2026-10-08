import { usePageMeta } from "@/hooks/usePageMeta";
import BookHero from "@/components/PageComponents/MyBook/BookHero";
import BookAwards from "@/components/PageComponents/MyBook/BookAwards";
import AboutTheBook from "@/components/PageComponents/MyBook/AboutTheBook";
import BookLaunchPlan from "@/components/PageComponents/MyBook/BookLaunchPlan";
import BookReviews from "@/components/PageComponents/MyBook/BookReviews";
import ClaimAccess from "@/components/PageComponents/MyBook/ClaimAccess";
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
      <BookAwards />
      <AboutTheBook />
      <BookLaunchPlan />
      <ClaimAccess />
      <BookMyths />
      <BookReviews />
      <BookBequestReasons />
      <AboutTheAuthor />
      <BookFooter />
    </div>
  );
}

export default MyBook;
