const swiperPopular = new Swiper(".popular-container", {
  slidesPerView: "auto",
  spaceBetween: 20,
  width: 1400,
  pagination: {
    el: ".swiper-pagination",
  },
});
function showDestinationPopup(shabira) {
  if (document.getElementById(shabira).style.visibility === "hidden") {
    document.getElementById(shabira).style.visibility = "visible";
  } else {
    document.getElementById(shabira).style.visibility = "hidden";
  }
}
const swiper = new Swiper(".hero", {
  direction: "horizontal",
  slidesPerView: 1,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    speed: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  on: {
    slideChange: function () {
      if (swiper.activeIndex === 0) {
        document.querySelector(".slide-desc-container .slide-1").style.display =
          "flex";
        document.querySelector(".slide-desc-container .slide-2").style.display =
          "none";
        document.querySelector(".slide-desc-container .slide-3").style.display =
          "none";
      } else if (swiper.activeIndex === 1) {
        document.querySelector(".slide-desc-container .slide-1").style.display =
          "none";
        document.querySelector(".slide-desc-container .slide-2").style.display =
          "flex";
        document.querySelector(".slide-desc-container .slide-3").style.display =
          "none";
      } else if (swiper.activeIndex === 2) {
        document.querySelector(".slide-desc-container .slide-1").style.display =
          "none";
        document.querySelector(".slide-desc-container .slide-2").style.display =
          "none";
        document.querySelector(".slide-desc-container .slide-3").style.display =
          "flex";
      }
    },
  },
});

const heroSection = document.querySelector("#hero");
const navUp = document.querySelector("#nav-up");

window.addEventListener("scroll", () => {
  const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
  if (window.scrollY >= heroBottom - 80 - navUp.offsetHeight) {
    navUp.classList.add("scrolled");
    // Add dark mode to nav items
    document.querySelectorAll("#nav-up a").forEach((item) => {
      item.classList.add("nav-dark");
    });
  } else {
    navUp.classList.remove("scrolled");
    // Remove dark mode from nav items
    document.querySelectorAll("#nav-up a").forEach((item) => {
      item.classList.remove("nav-dark");
    });
  }
});

const navDown = document.querySelector("#nav-down");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 54) {
    navDown.classList.add("scrolled");
  } else {
    navDown.classList.remove("scrolled");
  }
});
