//DOM ELEMENTS
// const slider = document.querySelector(".slider__img");
const links = document.querySelectorAll(".nav__item");
const header = document.querySelector(".header");
const linksContainer = document.querySelector(".nav__links-container");
const iconTop = document.querySelector(".footer__icon-top");
const navScreen = document.querySelector(".icon-navigation");
const navIconOpen = document.querySelector(".nav__icon--open");
const navIconClose = document.querySelector(".nav__icon--close");
const seeMoreBtn = document.querySelector(".btn__sub");
const servicesBtn = document.querySelector(".btn__main");

//HEADER IMAGE CHANGING
// const images = [
//   "./images/bg1.jpg",
//   "./images/bg2.jpg",
//   "./images/bg3.jpg",
//   "./images/bg4.jpg",
//   "./images/bg5.jpg",
// ];

// let i = 0;
// function bgImgChange() {
//   if (i > images.length - 1) {
//     i = 0;
//   }
//   slider.src = images[i];
//   i++;

//   setTimeout(bgImgChange, 3000);
// }
// bgImgChange();

//SMOOTH SCROLLING
links.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .getElementById(e.target.href.split("#")[1])
      .scrollIntoView({ behavior: "smooth" });
  });
});

iconTop.addEventListener("click", (e) => {
  e.preventDefault();
  header.scrollIntoView({ behavior: "smooth" });
});

[seeMoreBtn, servicesBtn].forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .getElementById(e.target.href.split("#")[1])
      .scrollIntoView({ behavior: "smooth" });
  });
});

//STICKY NAVIGATION
const Observer = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries;

    if (!entry.isIntersecting) {
      linksContainer.classList.add("sticky");
    } else {
      linksContainer.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-50px",
  }
);

Observer.observe(header);

//FOR RESPONSIVE NAVIGATION
[navIconOpen, navIconClose].forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target);
    if (e.target.closest(".nav__icon--open")) {
      navScreen.setAttribute(
        "style",
        "width: 25%;opacity: 1;visibility: visible;"
      );
      navIconOpen.classList.toggle("hidden");
      navIconClose.classList.toggle("hidden");
    } else if (e.target.closest(".nav__icon--close")) {
      navScreen.setAttribute(
        "style",
        "width: 0;opacity: 0;visibility: hidden;"
      );
      navIconOpen.classList.toggle("hidden");
      navIconClose.classList.toggle("hidden");
    }
  });
});
