// ===================== MOBILE MENU =====================
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const links = document.querySelectorAll(".nav-link");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", isOpen);
});

// Close the menu after clicking a link (mobile)
links.forEach((link) =>
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  })
);

// ===================== NAVBAR SHADOW ON SCROLL =====================
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 10);
});

// ===================== ACTIVE LINK HIGHLIGHT =====================
const sections = document.querySelectorAll("main section");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((link) =>
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`)
        );
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);

sections.forEach((section) => sectionObserver.observe(section));

// ===================== REVEAL ON SCROLL =====================
const revealItems = document.querySelectorAll(".card, .project, .timeline-item, .career-grid");
revealItems.forEach((el) => el.classList.add("reveal"));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((el) => revealObserver.observe(el));

// ===================== FOOTER YEAR =====================
document.getElementById("year").textContent = new Date().getFullYear();
