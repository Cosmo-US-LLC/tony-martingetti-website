import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToAboutJoin } from "./scrollToAboutJoin";
import { scrollToSuccessStoriesJoin } from "./scrollToSuccessStoriesJoin";
import { scrollToPrinciplesJoin } from "./scrollToPrinciplesJoin";
import { scrollToMyBookNotify } from "./scrollToMyBookNotify";
import { scrollToWaitlistJoin } from "./scrollToWaitlistJoin";

export default function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    if (hash === "#about-join") {
      scrollToAboutJoin();
      return;
    }

    if (hash === "#success-stories-join") {
      scrollToSuccessStoriesJoin();
      return;
    }

    if (hash === "#principles-join") {
      scrollToPrinciplesJoin();
      return;
    }

    if (hash === "#my-book-notify") {
      scrollToMyBookNotify();
      return;
    }

    if (hash === "#join") {
      scrollToWaitlistJoin();
      return;
    }

    const element = document.querySelector(hash);

    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [hash]);

  return null;
}