const NAVBAR_OFFSET = 80;

export function scrollToPrinciplesJoin({ focusEmail = false } = {}) {
  const section = document.getElementById("principles-join");

  if (!section) return;

  const y =
    section.getBoundingClientRect().top + window.pageYOffset - NAVBAR_OFFSET;

  window.scrollTo({ top: y, behavior: "smooth" });
}
