//Adding choices
document.querySelector("textarea").addEventListener("keyup",function(e){
  let text = e.target.value;
  const choices = text.split(",").filter(choices => choices.trim() !== '').map(choices => choices.trim()); //filter and map are used to prevent the inclusion of whitespace in the words
  document.getElementById("choices-container").innerHTML = ""; //This is necessary so we only add in the whole word and not add every time we input a character
  choices.forEach((item) => {
    let e = document.createElement("p");
    e.textContent = item;
    document.getElementById("choices-container").appendChild(e);
  });
  if (e.key === "Enter"){ //We'll start the random selection when the user presses enter
    document.querySelector("textarea").value = "";
    let choices = document.getElementById("choices-container").querySelectorAll("p");
    //console.log(choices);
    let i = 0;
    let iteration = setInterval(function(){ //Highlights an element every 200ms
      let r = Math.floor(Math.random() * choices.length);
      choices[r].style.backgroundColor = "#c766ed";
      setTimeout(function(){
        choices[r].style.backgroundColor = "white";
      }, 190);
      i++;
      if(i >= choices.length * 2){ //this is the number of repetitions before stopping at the final choice
        clearInterval(iteration);
        setTimeout(function(){ //Without this timeout, we risk changing the final choice background to white
          let r = Math.floor(Math.random() * choices.length);
          choices[r].style.backgroundColor = "#c766ed"; //This is the final result that will be left highlighted
          choices[r].style.color = "white";
          choices[r].style.transform = "scale(1.2)";
        },190);
      }
    },200);
  }
});

//This code does the same functionnality but through the press of a button instead of the keyup event
// document.getElementById("btn").addEventListener("click", function(){
//   let text = document.querySelector("textarea").value;
//   //console.log(text);
//   const choices = text.split(",");
//   //console.log(choices);
//   choices.forEach((item) => {
//     let e = document.createElement("p");
//     e.textContent = item;
//     document.getElementById("choices-container").appendChild(e);
//   });
// });

//Selecting random choice through a button press event listener
// document.getElementById("choose").addEventListener("click", function(){
//   document.querySelector("textarea").value = "";
//   let choices = document.getElementById("choices-container").querySelectorAll("p");
//   //console.log(choices);
//   let i = 0;
//   let iteration = setInterval(function(){ //Highlights an element every 200ms
//     let r = Math.floor(Math.random() * choices.length);
//     choices[r].style.backgroundColor = "#c766ed";
//     setTimeout(function(){
//       choices[r].style.backgroundColor = "white";
//     }, 190);
//     i++;
//     if(i >= choices.length * 2){ //this is the number of repetitions before stopping at the final choice
//       clearInterval(iteration);
//       setTimeout(function(){ //Without this timeout, we risk changing the final choice background to white
//         let r = Math.floor(Math.random() * choices.length);
//         choices[r].style.backgroundColor = "#c766ed"; //This is the final result that will be left highlighted
//         choices[r].style.color = "white";
//         choices[r].style.transform = "scale(1.2)";
//       },190);
//     }
//   },200);
// });
