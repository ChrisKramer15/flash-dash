let offerInput = localStorage.getItem("offerSave");
let minimum = document.querySelector("#minOffer")
minimum.value = offerInput;

let restInput = localStorage.getItem("restSave");
let rest = document.querySelector("#numOrders");
rest.value = restInput;

let distInput = localStorage.getItem("distSave");
let distance = document.querySelector("#extraDistance");
distance.value = distInput;

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
let extraDistance = document.querySelector("#extraDistance");
localStorage.setItem("distSave", extraDistance.value);
let passDisplay = document.querySelector("#pass");
let failDisplay = document.querySelector("#fail");
let numOrders = document.querySelector("#numOrders");
localStorage.setItem("restSave", numOrders.value);
let statusContain = document.querySelector("#primaryContainer");

minimum = parseFloat(minimum.value);
offer = parseFloat(offer.value);
distance = parseFloat(distance.value);
extraDistance = parseFloat(extraDistance.value);
numOrders = parseInt(numOrders.value);

//amount of allowed minutes to complete order
let maxMinutes = 0;
console.log(maxMinutes);
console.log(setRate);
console.log(offer);
maxMinutes = 60 / (setRate / offer) ;
console.log(maxMinutes);
//allowed minutes minus restaurant wait time
let restaurant = 5;
restaurant *= numOrders;
let timeRemaining = maxMinutes - restaurant;
timeRemaining = timeRemaining - (distance * 2);

minimum *= numOrders;
if (distance >= extraDistance){
  timeRemaining = timeRemaining - (distance * 2);  
}


//calculate approx. money received per minute
// let rate = offer / approxTime;

//if grocery order, minimum required is doubled to account for wait times/effort required
if (grocery.checked){
    minimum *= 2;
}

console.log(timeRemaining);

//condition statements -- verifies minimum amount and rate have been achieved
if(offer >= minimum) {
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




