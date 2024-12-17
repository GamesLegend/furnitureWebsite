"use strict";

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

const body = document.querySelector("body");
const span = document.querySelector("span");
const nav = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const wrapperDiv = document.querySelectorAll(".wrapper--div");
const darkMode = document.querySelector(".dark--mode");
const darkModeColor = document.querySelector(".dark--mode--color");
const darkModeIcon = document.querySelector('[name="moon-outline"]');
const active = document.querySelector(".active");
const sectionHero = document.querySelector(".section-hero");
const heroHeading = document.querySelector(".hero-heading");
const heroParagraph = document.querySelector(".hero-paragraph");
const visa = document.querySelector(".visa");
const usaToday = document.querySelector(".usa-today");
const newYorkTimes = document.querySelector(".new-york-times");
const iHerb = document.querySelector(".iherb");
const businessInsider = document.querySelector(".business-insider");
const featuredLogo = document.querySelectorAll(".featured-logo");
const featuresIconDescription = document.querySelectorAll(
  ".features-icon-description"
);
const featuresSectionDescription = document.querySelectorAll(
  ".features-section-description"
);
const featuresSectionImgEl = document.querySelectorAll(".features-section-img");
const typeDescription = document.querySelector(".type-description");
const pageLinks = document.querySelectorAll(".page-link");
const logInGoogle = document.querySelector(".log-in-google");
const logInApple = document.querySelector(".log-in-apple");
const ctaBackground = document.querySelector(".cta-background");
const sectionTestimonials = document.querySelector(".section-testimonials");
const testimonialsBox = document.querySelectorAll(".testimonials-box");
const footerIconLInk = document.querySelectorAll(".footer-icon-link");
const footerLink = document.querySelectorAll(".footer-link");
const menuOutline = document.querySelector(".menu-outline");
const closeOutline = document.querySelector(".close-outline");
const pagination = document.querySelector(".pagination");
const typeBoxTrio = document.querySelectorAll(".type-box-trio");
const leftArrow = document.querySelector(".btn-arrow-left");
const rightArrow = document.querySelector(".btn-arrow-right");
///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("navbar-list-link"))
      headerEl.classList.toggle("nav-open");
  });
});

// DARK MODE

// Dark mode event handler
darkMode.addEventListener("click", function () {
  const currentName = darkModeIcon.getAttribute("name");

  // Toggle between "sunny-outline" and "moon-outline"
  const newName =
    currentName === "sunny-outline" ? "moon-outline" : "sunny-outline";

  // Set the new name attribute value for darkModeIcon
  darkModeIcon.setAttribute("name", newName);

  featuresIconDescription.forEach((el) =>
    el.classList.toggle("dark--mode--color")
  );
  featuresSectionDescription.forEach((el) =>
    el.classList.toggle("dark--mode--color")
  );
  pageLinks.forEach((el) => el.classList.toggle("dark--mode--color"));
  testimonialsBox.forEach((el) => el.classList.toggle("active"));
  footerIconLInk.forEach((el) => el.classList.toggle("dark--mode--color"));
  footerLink.forEach((el) => el.classList.toggle("dark--mode--color"));

  document.body.classList.toggle("dark-mode");
  const darkModeActive = document.body.classList.contains("dark-mode");

  if (darkModeActive) {
    // Switch to dark mode logos
    visa.src = "img/logos/visa-light.png";
    usaToday.src = "img/logos/usa-today-light.png";
    iHerb.src = "img/logos/iherb-logo-light.png";
    businessInsider.src = "img/logos/business-insider-light.png";
    newYorkTimes.src = "img/logos/the-new-york-times-light.png";
  } else {
    // Switch back to light mode logos
    visa.src = "img/logos/Visa-01.png";
    usaToday.src = "img/logos/usa-today.png";
    iHerb.src = "img/logos/iHerb-logo.png";
    businessInsider.src = "img/logos/business-insider.png";
    newYorkTimes.src = "img/logos/the-new-york-times.png";
  }

  document.body.classList.toggle("active");
  sectionHero.classList.toggle("transparent");
  headerEl.classList.toggle("transparent");
  // darkMode.classList.toggle("dark--mode--color");
  heroHeading.classList.toggle("dark--mode--color");
  heroParagraph.classList.toggle("dark--mode--color");
  typeDescription.classList.toggle("dark--mode--color");
  // document.querySelector(".dots").classList.toggle("dark--mode--color");
  logInGoogle.classList.toggle("dark--mode--color");
  logInApple.classList.toggle("dark--mode--color");
  ctaBackground.classList.toggle("active");
  sectionTestimonials.classList.toggle("dark--mode--color");
  sectionTestimonials.classList.toggle("active");
  menuOutline.style.color = "#fff";
  // closeOutline.style.color = "#fff";
});

console.log(window.innerWidth);

// Sticky nav
if (window.innerWidth < 1984) {
  const stickyNav = function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      nav.classList.add("sticky--nav");
    } else {
      nav.classList.remove("sticky--nav");
    }
  };

  const stickyHeaderObs = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0.2,
    // rootMargin: "10px",
  });
  stickyHeaderObs.observe(sectionHero);
}
// Sections fade in
const sectionAppear = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    console.log(entry);
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  }
};

const fadeIn = new IntersectionObserver(sectionAppear, {
  root: null,
  // threshold: 0.1,
  threshold: [0, 0.1, 0.5, 1], // React at multiple visibility levels
  // rootMargin: "0px 0px 150px 0px", // Detect earlier for large sections
  // rootMargin: "-90px",
});

wrapperDiv.forEach((wrapper) => fadeIn.observe(wrapper));

// Lazy Loading Images
const lazyImgFunc = function (entries, observer) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    entry.target.classList.add("features-section-img-remove-blur");
    observer.unobserve(entry.target);
  }
};

const lazyImgObs = new IntersectionObserver(lazyImgFunc, {
  root: null,
  threshold: 0.5,
});
featuresSectionImgEl.forEach((imgEl) => lazyImgObs.observe(imgEl));

// Types of furniture tabbed component
let curTab = 1;
// let maxTab = typeBoxTrio.length;
// console.log(maxTab);
pagination.addEventListener("click", function (e) {
  const clicked = e.target.closest(".page-link");

  if (!clicked) return;

  typeBoxTrio.forEach((el) => el.classList.remove("visible"));
  pageLinks.forEach((link) => link.classList.remove("current-page-link"));

  document
    .querySelector(`.type-box-trio-${clicked.dataset.page}`)
    .classList.add("visible");
  document
    .querySelector(`.page-link-${clicked.dataset.page}`)
    .classList.add("current-page-link");
  curTab++;
  console.log(curTab);

  // console.log(clicked);
});
// rightArrow.addEventListener("click", function (e) {
//   typeBoxTrio.forEach((el) => el.classList.remove("visible"));
//   pageLinks.forEach((link) => link.classList.remove("current-page-link"));
//   if (curTab >= maxTab) {
//     curTab = 0;
//     console.log(curTab);
//   }
//   curTab++;
//   document.querySelector(`.type-box-trio-${curTab}`).classList.add("visible");
//   document
//     .querySelector(`.page-link-${curTab}`)
//     .classList.add("current-page-link");
// });

// leftArrow.addEventListener("click", function (e) {
//   typeBoxTrio.forEach((el) => el.classList.remove("visible"));
//   pageLinks.forEach((link) => link.classList.remove("current-page-link"));

//   if (curTab <= 1) {
//     curTab = 5;
//     console.log(curTab);
//     // curTab--;
//   }
//   curTab--;
//   document.querySelector(`.type-box-trio-${curTab}`).classList.add("visible");
//   document
//     .querySelector(`.page-link-${curTab}`)
//     .classList.add("current-page-link");
// });
