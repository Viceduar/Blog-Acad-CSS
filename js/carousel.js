'use strict';

const itemsEl = document.querySelectorAll(".carousel-item");
const btnLeft = document.querySelector(".btn-carousel--left");
const btnRight = document.querySelector(".btn-carousel--right");

const mediaQueryPhone = 600; //600px phone
const mediaQueryTabPort = 900; //900px tab-port
const mediaQueryTabLand = 1200; //1200px tab-land
const mediaQueryDesktop = 1800; // 1800px desktop

let elemPerView;

//Scroll counters
let scrollsLeft;
let scrollsRight;
let maxScrolls;

//Detect currrent MEDIAQUERY
const mediaSensor = function (width) {
  if (width <= mediaQueryPhone) {
    return mediaQueryPhone;
  } else if (width <= mediaQueryTabPort) {
    return mediaQueryTabPort;
  } else if (mediaQueryTabPort < width) {
    return mediaQueryDesktop;
  }
};

//Get the current MEDIAQUERY
let currentQuery = mediaSensor(window.innerWidth);

//Build the carousel according with MEDIAQUERY
const carouselInit = function () {

  //For phone
  if (currentQuery <= mediaQueryPhone) {
    //only one card in carousel per view
    elemPerView = 1;
  } 
  
  //For Tab-port
  else if (currentQuery <= mediaQueryTabPort) {
    //only two cards in carousel per view
    elemPerView = 2;
  } 
  
  //For Desktop
  else if (currentQuery <= mediaQueryDesktop) {
    //Three cards per view
    elemPerView = 3;
  }

  //Determine how many scrolls can allow according with cards per view
  maxScrolls = Math.ceil(itemsEl.length / elemPerView) - 1;

  scrollsLeft = maxScrolls;
  scrollsRight = 0;


  //Change size of cards
  itemsEl.forEach((c, i) => {
    c.style.left = `${(100 / elemPerView) * i}%`;
    c.style.width = `${100 / elemPerView}%`;
  });
};

carouselInit();

//Detect change in width of the window
window.addEventListener("resize", function () {
  if (currentQuery != mediaSensor(window.innerWidth)) {
    currentQuery = mediaSensor(window.innerWidth);
    carouselInit();
  }
});

//BUTTONS CONTROLS

//Move to right
btnRight.addEventListener("click", function () {

  //If you're not in max of scrolls
  if (scrollsRight != maxScrolls) {
    //Translate all cards to left
    itemsEl.forEach((item) => {
      item.style.left = `calc(${item.style.left} + ${-100}%)`;
    });


    //Update scrolls counters
    scrollsLeft--;
    scrollsRight++;
  }
});

//Move to left
btnLeft.addEventListener("click", function () {

  //if you're not in max of scrolls
  if (scrollsLeft != maxScrolls) {
    //Translate all cards to right
    itemsEl.forEach((item) => {
      item.style.left = `calc(${item.style.left} + ${100}%)`;
    });

    //Update scrolls counters
    scrollsLeft++;
    scrollsRight--;
  }
});
