// ============================================================
//  Sripadh Guptha Yedire — site interactions (kept minimal)
// ============================================================

// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Bar: subtle shadow on scroll
const bar = document.getElementById("bar");
const onScroll = () => bar.classList.toggle("scrolled", window.scrollY > 12);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Bar: mobile menu toggle
const toggle = document.getElementById("barToggle");
const nav = document.getElementById("barNav");
const setMenu = (open) => {
  nav.classList.toggle("open", open);
  toggle.textContent = open ? "[ close ]" : "[ menu ]";
  toggle.setAttribute("aria-expanded", String(open));
};
toggle.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

// Reveal on scroll (subtle fade)
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("in"));
}
