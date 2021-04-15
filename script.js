function analyze() {
let minimum = document.querySelector("#minOffer");
let offer = document.querySelector("#offerAmt");
let distance = document.querySelector("#totDistance");
let grocery = document.querySelector("#groceryCheck");
//setRate, setDistance still need to be completed

minimum = parseFloat(minimum.value);
offer = parseFloat(offer.value);
distance = parseFloat(distance.value);

//calculate minutes required to complete order
let approxTime = (distance * 2) + 5

//calculate approx. money received per minute
let rate = offer / approxTime

//if grocery order, minimum required is doubled to account for wait times/effort required
if (grocery.checked){
    minimum *= 2;
}

//if distance is greater than set, minimum offer requirement is raised for estimated time to return to zone
if(distance >= setDistance) {
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
