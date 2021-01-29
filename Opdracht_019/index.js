const yourAge = 23;
const isFemale = true;
const driverStatus = "Bezopen";
const yourName = "Brigitte";
const totalAmount = 50;

if (yourAge >= 18) {
    console.log("Kom binnen schaaaat")
} else {
    console.log("Daaaag schaaaat")
}

if (isFemale) {
    console.log("Ladiesnight")
} else {
    console.log("Hengstenbal")
}

if (driverStatus == "Bob") {
    console.log("Hier heb je je autosleutels")
} else {
    console.log("Jij gaat niet meer rijden vriendin")
}

if (yourAge >= 18 && yourAge <= 25) {
    console.log("50% korting!!")
} else {
    console.log("Geen korting!")
}

if (yourName === "Bram" || yourName === "Sarah") {
    console.log("Gratis pils :)")
} else {
    console.log("Je mag gewoon betalen!")
}

if (totalAmount >= 100) {
    console.log("Gratis fles champagne")
} else if (totalAmount >= 50) {
    console.log("Gratis portie nachos")
} else if (totalAmount >= 25) {
    console.log("Gratis bitterballen")
} else {
    console.log("Geef eens wat meer geld uit joh krent")
}