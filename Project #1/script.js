const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

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
  bg.style.filter = `blur(${opa_rounded}px)`;
}
