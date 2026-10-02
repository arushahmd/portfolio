const NAVBAR_HEIGHT = 64;
const HEADING_GAP = 20;

export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const headingId = section.getAttribute("aria-labelledby");
  const heading = headingId ? document.getElementById(headingId) : null;
  const target = heading ?? section;
  const targetTop = target.getBoundingClientRect().top + window.scrollY;
  const top = Math.max(0, targetTop - NAVBAR_HEIGHT - HEADING_GAP);
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.scrollTo({
    top,
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
};
