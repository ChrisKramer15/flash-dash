function analyze() {
let minimum = document.querySelector("#minOffer");
let offer = document.querySelector("#offerAmt");
let distance = document.querySelector("#totDistance");
let grocery = document.querySelector("#groceryCheck");
let extraDistance = document.querySelector("#extraDistance");

minimum = parseFloat(minimum.value);
offer = parseFloat(offer.value);
distance = parseFloat(distance.value);
extraDistance = parseFloat(extraDistance.value);

//calculate minutes required to complete order
let approxTime = (distance * 2) + 5

//calculate approx. money received per minute
let rate = offer / approxTime

//if grocery order, minimum required is doubled to account for wait times/effort required
if (grocery.checked){
    minimum *= 2;
}

//if distance is greater than set, minimum offer requirement is raised for estimated time to return to zone
if(distance >= extraDistance) {
    minimum += distance;
}

//condition statements -- verifies minimum amount and rate have been achieved
if(offer >= minimum) {
    if(rate >= setRate){
        console.log('pass');
    }else {
        console.log('fail');
    }
}else {
    console.log('fail');
}

}

//function for displaying value for rate input
function rateDisplay(val) {
    document.getElementById('textInput').value=val;
}
