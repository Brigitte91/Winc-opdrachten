let person = prompt("Welkom! Wat is je naam?", "");

if (person != null) {
    document.getElementById("name")
    alert(
        "Hey " + person + "!");
    console.log("Name is " + person);
}

let inputNumber = parseInt(prompt("Voer een getal in tussen 0 en 25 om te beginnen met raden :)", ""));

const generateNumber = function (min, max) {
    min = Math.ceil(1);
    max = Math.floor(25);
    return Math.floor(Math.random() * (max - min) + min);
}

console.log("Winning number is " + generateNumber())

const checkNumber = function (inputNumber) {
    console.log("Input is " + inputNumber);
    if (inputNumber <= 25 && inputNumber >= 1) {
        return true;
    } else if (isNaN(inputNumber)) {
        prompt("Dat is geen getal. Voer een getal in tussen 0 en 25 om te beginnen met raden.");
        return false;
    } else {
        prompt("Dat is een te groot of te klein getal. Voer een getal in tussen 0 en 25 om te beginnen met raden.");
        return false;
    }
}

checkNumber(inputNumber);


const compareNumber = function (inputNumber, generateNumber) {
    console.log("running the woohoo")
    if (checkNumber(inputNumber) == true) {
        if (checkNumber(inputNumber) == generateNumber) {
            alert("You win")
        } else {
            prompt("Try again");
            checkNumber(inputNumber);
        }
    } else { return checkNumber };
}

