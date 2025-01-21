/*
let restInput = localStorage.getItem("restSave");
let rest = document.querySelector("#numPlaces");
rest.value = restInput;
let orderInput = localStorage.getItem("orderSave");
let ord = document.querySelector("#numOrders");
ord.value = orderInput;

function analyze() {
let radios = document.querySelector('#customRange1');
radios = parseFloat(radios.value);

let offer = document.querySelector("#offerAmt");
let distance = document.querySelector("#totDistance");
let grocery = document.querySelector("#groceryCheck");
let passDisplay = document.querySelector("#pass");
let failDisplay = document.querySelector("#fail");
let pphDisplay = document.querySelector("#pph");
let numOrders = document.querySelector("#numOrders");
let numPlaces = document.querySelector("#numPlaces")
localStorage.setItem("restSave", numPlaces.value);
localStorage.setItem("orderSave", numOrders.value);
let statusContain = document.querySelector("#primaryContainer");

offer = parseFloat(offer.value);
distance = parseFloat(distance.value);
numOrders = parseInt(numOrders.value);
numPlaces = parseInt(numPlaces.value);

//amount of allowed minutes to complete order
let maxMinutes = 0;
maxMinutes = 60 / (radios / offer) ;
//allowed minutes minus restaurant wait time
let restaurant = (5 * numOrders);
if (grocery.checked) {
  restaurant = 10;
}
if(numPlaces > 1){
  restaurant = (5 * numPlaces) * 1.5
}
restaurant *= numPlaces;
let timeRemaining = maxMinutes - restaurant;
timeRemaining = timeRemaining - (distance * 4);
let perHour = (offer/(restaurant + (distance * 4)) * 60).toFixed(2)
pphDisplay.textContent = `$${perHour} per hour`

//condition statements -- verifies rate has been achieved
if(perHour >= radios){
  passDisplay.style.display = "block";
  failDisplay.style.display = "none";
  statusContain.style.backgroundColor = "green";
  }else {
      failDisplay.style.display = "block";
      passDisplay.style.display = "none";
      statusContain.style.backgroundColor = "red";
  }
}

*/

//requirements
const minAmt = document.querySelector("#minAmt");
const dollarPerHour = document.querySelector("#dph");
//order details
const offer = document.querySelector("#offer");
const distance = document.querySelector("#distance");
const stops = document.querySelector("#stops");
//result details
const totMinutes = (distance * 2) + ((stops - 1) * 5) + 10
const pph = (totMinutes / 60) * offer


