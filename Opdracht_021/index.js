// hier declareer ik de functie

function makeSandwich(topping) {
    console.log("There you go, a sandwich with " + topping);
}

// hier call ik de functie

makeSandwich("oude kaas");

// Kortingsactie



function calculateDiscountedPrice(totalAmount, discount) {
    return (Math.round(totalAmount)) - (Math.round(discount))
}

calculateDiscountedPrice(5, 1);


var minimumForDiscount = 25
var totalAmount = 12
var discount = 2

function calculateNewPrice(totalAmount, discount) {
    console.log((Math.round(totalAmount)) - (Math.round(discount)))
}
if (totalAmount > minimumForDiscount) {
    calculateNewPrice(totalAmount, discount)
} else {
    console.log("Geen korting")
}