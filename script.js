function analyze() {
let minimum = document.querySelector("#minOffer");
let offer = document.querySelector("#offerAmt");
let distance = document.querySelector("#totDistance");
let grocery = document.querySelector("#groceryCheck:checked");

minimum = parseInt(minimum.value);
offer = parseInt(offer.value);
distance = parseInt(distance.value)
if (grocery === null){
    console.log('false');
}
else{
    console.log('true');
}
}
