let stopsInput = localStorage.getItem("stopsSave");
let stops = document.querySelector("#numStops");
stops.value = stopsInput;

function analyze() {
  let radios = document.querySelector('#customRange1');
  radios = parseFloat(radios.value);
  
  
  let offer = document.querySelector("#offer");
  let distance = document.querySelector("#distance");
  let passDisplay = document.querySelector("#pass");
  let failDisplay = document.querySelector("#fail");
  let pphDisplay = document.querySelector("#pph");
  let numStops = document.querySelector("#numStops");
  localStorage.setItem("stopsSave", numStops.value);
  let statusContain = document.querySelector("#primaryContainer");
  
  offer = parseFloat(offer.value);
  distance = parseFloat(distance.value);
  numStops = parseInt(numStops.value);
  
  //amount of allowed minutes to complete order
  let maxMinutes = 0;
  maxMinutes = 60 / (radios / offer) ;
  //allowed minutes minus restaurant wait time
  let restaurant = 10;
  // let timeRemaining = maxMinutes - restaurant;
  // timeRemaining = timeRemaining - (distance * 3);
  // let perHour = (offer/(restaurant + (distance * 4)) * 60).toFixed(2)
  let disTime = distance * 3
  let stopsTime = (numStops - 1) * 5
  let totTime = (restaurant + disTime + stopsTime) / 60
  let perHour = (offer / totTime)
  pphDisplay.textContent = `$${perHour} per hour`
  
  //condition statements -- verifies rate has been achieved
  if(perHour >= radios){
    // passDisplay.style.display = "block";
    // failDisplay.style.display = "none";
    statusContain.style.backgroundColor = "green";
    }else {
        // failDisplay.style.display = "block";
        // passDisplay.style.display = "none";
        statusContain.style.backgroundColor = "red";
    }
}


