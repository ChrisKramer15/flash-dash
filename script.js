let minimum = document.getElementById('#minOffer');
let distance = document.getElementById('#totDistance');
let grocery = document.getElementById('#groceryCheck');
let offer = document.getElementById('#offerAmt');

let parsedMinimum = parseInt(minimum);
let parsedDistance = parseInt(distance);
let parsedOffer = parseInt(offer);

function analyze() {
    console.log(typeof(offer));
    if(parsedOffer >= parsedMinimum) {
        console.log('pass');
    }
    else {
        console.log('fail');
    }
}
