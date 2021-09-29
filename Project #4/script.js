//getting the deps content (icon and dep name)
//creating a copy to use in the mouseleave event
let dep_com = document.querySelector(".dep-com");
let dep_com_copy = dep_com.cloneNode(true);

let dep_pro = document.querySelector(".dep-pro");
let dep_pro_copy = dep_pro.cloneNode(true);

let dep_event = document.querySelector(".dep-event");
let dep_event_copy = dep_event.cloneNode(true);

let dep_spons = document.querySelector(".dep-spons");
let dep_spons_copy = dep_spons.cloneNode(true);

//com department event listeners
dep_com.addEventListener("mouseenter", function(){
  dep_com.innerHTML = "";
  let nc = document.createElement("p");
  nc.textContent = "At the Communication & Design department, we manage all of the club's...";
  nc.style.fontWeight = "500";
  nc.style.color = "#ffc222";
  nc.style.textAlign = "justify";
  nc.style.paddingLeft = "5%";
  nc.style.paddingRight = "5%";
  dep_com.appendChild(nc);
});

dep_com.addEventListener("mouseleave", function(){
  dep_com.innerHTML = dep_com_copy.innerHTML;
});

//project department event listeners
dep_pro.addEventListener("mouseenter", function(){
  dep_pro.innerHTML = "";
  let nc = document.createElement("p");
  nc.textContent = "At the Project department, we manage all of the club's...";
  nc.style.fontWeight = "500";
  nc.style.color = "#ffc222";
  nc.style.textAlign = "justify";
  nc.style.paddingLeft = "5%";
  nc.style.paddingRight = "5%";
  dep_pro.appendChild(nc);
});

dep_pro.addEventListener("mouseleave", function(){
  dep_pro.innerHTML = dep_pro_copy.innerHTML;
});

//event department event listeners
dep_event.addEventListener("mouseenter", function(){
  dep_event.innerHTML = "";
  let nc = document.createElement("p");
  nc.textContent = "At the Event department, we manage all of the club's...";
  nc.style.fontWeight = "500";
  nc.style.color = "#ffc222";
  nc.style.textAlign = "justify";
  nc.style.paddingLeft = "5%";
  nc.style.paddingRight = "5%";
  dep_event.appendChild(nc);
});

dep_event.addEventListener("mouseleave", function(){
  dep_event.innerHTML = dep_event_copy.innerHTML;
});

////sponsoring department event listeners
dep_spons.addEventListener("mouseenter", function(){
  dep_spons.innerHTML = "";
  let nc = document.createElement("p");
  nc.textContent = "At the Sponsoring department, we manage all of the club's...";
  nc.style.fontWeight = "500";
  nc.style.color = "#ffc222";
  nc.style.textAlign = "justify";
  nc.style.paddingLeft = "5%";
  nc.style.paddingRight = "5%";
  dep_spons.appendChild(nc);
});

dep_spons.addEventListener("mouseleave", function(){
  dep_spons.innerHTML = dep_spons_copy.innerHTML;
});
