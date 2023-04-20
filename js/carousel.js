const itemsEl = document.querySelectorAll(".carousel__item");
const btnLeft = document.querySelector(".btn__carousel--left");
const btnRight = document.querySelector(".btn__carousel--right");

const elemPerView = 3;
const maxScrolls = Math.ceil(itemsEl.length / elemPerView) - 1;

let scrollsLeft = maxScrolls;
let scrollsRight = 0;

itemsEl.forEach((c, i) => {
  c.style.left = `${(100 / elemPerView) * i}%`;
  c.style.width = `${100 / elemPerView}%`;
});

btnRight.addEventListener("click", function () {
  if (scrollsRight != maxScrolls) {
    itemsEl.forEach((item) => {
      item.style.left = `calc(${item.style.left} + ${-100}%)`;
    });

    scrollsLeft--;
    scrollsRight++;
  }
});

btnLeft.addEventListener("click", function () {
  if (scrollsLeft != maxScrolls) {
    itemsEl.forEach((item) => {
      item.style.left = `calc(${item.style.left} + ${100}%)`;
    });

    scrollsLeft++;
    scrollsRight--;
  }
});
