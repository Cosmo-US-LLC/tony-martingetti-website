const NAVBAR_OFFSET = 80;

export function scrollToAboutJoin({ focusEmail = true } = {}) {
  const section = document.getElementById("about-join");
  const emailInput = document.getElementById("about-waitlist-email");

  if (!section) return;

  const y =
    section.getBoundingClientRect().top + window.pageYOffset - NAVBAR_OFFSET;

  window.scrollTo({ top: y, behavior: "smooth" });

  if (focusEmail && emailInput) {
    window.setTimeout(() => emailInput.focus({ preventScroll: true }), 450);
  }
}
