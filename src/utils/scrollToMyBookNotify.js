const NAVBAR_OFFSET = 80;

export function scrollToMyBookNotify({ focusEmail = true } = {}) {
  const section =
    document.getElementById("my-book-hero-notify") ||
    document.getElementById("my-book-notify");
  const emailInput = document.getElementById("book-hero-email");

  if (!section) return;

  const y =
    section.getBoundingClientRect().top + window.pageYOffset - NAVBAR_OFFSET;

  window.scrollTo({ top: y, behavior: "smooth" });

  if (focusEmail && emailInput) {
    window.setTimeout(() => emailInput.focus({ preventScroll: true }), 450);
  }
}
