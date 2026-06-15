const NAVBAR_OFFSET = 80;

export function scrollToWaitlistJoin({ focusEmail = true } = {}) {
  const section = document.getElementById("join");
  const emailInput = document.getElementById("waitlist-email");

  if (!section) return;

  const y =
    section.getBoundingClientRect().top + window.pageYOffset - NAVBAR_OFFSET;

  window.scrollTo({ top: y, behavior: "smooth" });

  if (focusEmail && emailInput) {
    window.setTimeout(() => emailInput.focus({ preventScroll: true }), 450);
  }
}
