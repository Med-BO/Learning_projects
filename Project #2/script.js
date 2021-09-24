const loadText = document.querySelector(".loading-text");
const mc = document.querySelector(".main-container");

let load = 0;
let opa = 30.1;
let opa_rounded = 0;

let int = setInterval(blurring, 18);

function blurring() {
  load++;

  if(load>99){
    clearInterval(int);
  }
  loadText.innerText = `${load}%`;
  loadText.style.opacity = 1 - (load * 0.01) ;
  opa = opa - 0.3;
  opa_rounded = Math.round(opa)
  //console.log(opa_rounded);
  mc.style.filter = `blur(${opa_rounded}px)`;
}

const sliderContainer = document.querySelector(".slider-container");
const rightSlide = document.querySelector(".right-slide");
const leftSlide = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = rightSlide.querySelectorAll("div").length; //the number of div elements we have inside the right slide

let activeSlideIndex = 0;

leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide('up'));
downButton.addEventListener("click", () => changeSlide('down'));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  if(direction === "up"){
    activeSlideIndex++;
    if(activeSlideIndex > slidesLength - 1){  //this is to check if we're at the last slide and we need to reset to the first one
      activeSlideIndex = 0;
    }
  }
  else if(direction === "down"){
    activeSlideIndex--;
    if(activeSlideIndex < 0){
      activeSlideIndex = slidesLength - 1;
  }
}
  rightSlide.style.transform = `translateY(-${activeSlideIndex*sliderHeight}px)`;
  leftSlide.style.transform = `translateY(${activeSlideIndex*sliderHeight}px)`;
}
