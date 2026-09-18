const NAVBAR_OFFSET = 80;

export function scrollToLandingJoin({ focusEmail = true } = {}) {
  const section = document.getElementById("landing-join");
  const emailInput = document.getElementById("landing-email");

  if (!section) return;

  const y =
    section.getBoundingClientRect().top + window.pageYOffset - NAVBAR_OFFSET;

  window.scrollTo({ top: y, behavior: "smooth" });

  if (focusEmail && emailInput) {
    window.setTimeout(() => emailInput.focus({ preventScroll: true }), 450);
  }
}
