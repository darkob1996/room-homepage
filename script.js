const moveLeftButton = document.querySelector(".slider__move--left");
const moveRightButton = document.querySelector(".slider__move--right");
const burger = document.querySelector(".picture__navigation--burger");
const closeButton = document.querySelector(".sticky-navigation__close");
const stickyNavigation = document.querySelector(".sticky-navigation");
const overlay = document.querySelector(".overlay");
const logo = document.querySelector(".picture__navigation--logo");

let position = 1;

const moveRight = function () {
  // 1. dio
  if (position < 1) position = 1;
  position++;

  if (position === 2) {
    document.querySelector(`.picture__photo--${position}`).style.transform =
      "translateX(100%)";
  }

  if (position === 3) {
    document.querySelector(`.picture__photo--${position}`).style.transform =
      "translateX(200%)";
  }

  // 2 dio. slider
  if (position === 2) {
    document.querySelector(`.slider__part-${position - 1}`).style.display =
      "none";
    document.querySelector(`.slider__part-${position}`).style.display = "block";
  }

  if (position === 3) {
    document.querySelector(`.slider__part-${position - 1}`).style.display =
      "none";
    document.querySelector(`.slider__part-${position}`).style.display = "block";
  }
};

const moveLeft = function () {
  if (position >= 4) position = 3;
  position--;

  if (position === 2) {
    document.querySelector(`.picture__photo--${position + 1}`).style.transform =
      "translateX(-100%)";
  }

  if (position === 1) {
    document.querySelector(`.picture__photo--${position + 1}`).style.transform =
      "translateX(-100%)";
  }

  // 2 dio. slider
  if (position === 1) {
    document.querySelector(`.slider__part-${position + 1}`).style.display =
      "none";
    document.querySelector(`.slider__part-${position}`).style.display = "block";
  }

  if (position === 2) {
    document.querySelector(`.slider__part-${position + 1}`).style.display =
      "none";
    document.querySelector(`.slider__part-${position}`).style.display = "block";
  }
};

moveRightButton.addEventListener("click", moveRight);
moveLeftButton.addEventListener("click", moveLeft);

burger.addEventListener("click", function () {
  burger.classList.toggle("hidden");
  stickyNavigation.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
  logo.classList.toggle("hidden");
});

closeButton.addEventListener("click", function () {
  burger.classList.toggle("hidden");
  stickyNavigation.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
  logo.classList.toggle("hidden");
});
