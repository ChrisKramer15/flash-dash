let offerInput = localStorage.getItem("offerSave");
let minimum = document.querySelector("#minOffer")
minimum.value = offerInput;

let restInput = localStorage.getItem("restSave");
let rest = document.querySelector("#numOrders");
rest.value = restInput;

let distInput = localStorage.getItem("distSave");
// distance.value = distInput;

function analyze() {
let radios = document.getElementsByName('rateRadio');
let setRate = 0;
for (let i = 0, length = radios.length; i < length; i++) {
  if (radios[i].checked) {
      setRate = parseFloat(radios[i].value);

    // only one radio can be logically checked, don't check the rest
    break;
  }
}
let minimum = document.querySelector("#minOffer");
localStorage.setItem("offerSave", minimum.value)
let offer = document.querySelector("#offerAmt");
let distance = document.querySelector("#totDistance");
let grocery = document.querySelector("#groceryCheck");
let passDisplay = document.querySelector("#pass");
let failDisplay = document.querySelector("#fail");
let pphDisplay = document.querySelector("#pph");
let numOrders = document.querySelector("#numOrders");
localStorage.setItem("restSave", numOrders.value);
let statusContain = document.querySelector("#primaryContainer");

minimum = parseFloat(minimum.value);
offer = parseFloat(offer.value);
distance = parseFloat(distance.value);
numOrders = parseInt(numOrders.value);

//amount of allowed minutes to complete order
let maxMinutes = 0;
console.log("max minutes: " + maxMinutes)
maxMinutes = 60 / (setRate / offer) ;
//allowed minutes minus restaurant wait time
console.log("max minutes: " + maxMinutes)
let restaurant = 5;
if (grocery.checked) {
  restaurant = 10;
}
restaurant *= numOrders;
let timeRemaining = maxMinutes - restaurant;
console.log(`time remaining: ${timeRemaining}`)
timeRemaining = timeRemaining - (distance * 4);
console.log(`time remaining: ${timeRemaining}`)

minimum *= numOrders;


//calculate approx. money received per minute
// let rate = offer / approxTime;

//if grocery order, minimum required is doubled to account for wait times/effort required
if (grocery.checked){
    minimum *= 2;
}


//condition statements -- verifies minimum amount and rate have been achieved
if(offer >= minimum) {
  pphDisplay.textContent = `$${(offer/(restaurant + (distance * 4)) * 60).toFixed(2)} per hour`
    if(timeRemaining >= 0){
        
        passDisplay.style.display = "block";
        failDisplay.style.display = "none";
        statusContain.style.backgroundColor = "green";
    }else {
        failDisplay.style.display = "block";
        passDisplay.style.display = "none";
        statusContain.style.backgroundColor = "red";
    }
}else {
    failDisplay.style.display = "block";
    passDisplay.style.display = "none";
    statusContain.style.backgroundColor = "red";
}


}




