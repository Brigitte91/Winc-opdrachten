let person = prompt("Welkom! Wat is je naam?", "");

if (person != null) {
    document.getElementById("name")
    alert(
        "Hey " + person + "!");
    console.log("Name is " + person);
}

const generateNumber = function (min, max) {
    min = Math.ceil(1);
    max = Math.floor(25);
    return Math.floor(Math.random() * (max - min) + min);
}

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

const compareNumber = function (inputNumber, generateNumber) {
    console.log("running the woohoo");
    if (checkNumber(inputNumber) === true) {
        if (inputNumber === generateNumber) {
            alert("You win");
        } else {
            alert("Try again");
        }
    }
}

let inputNumber = -1;
let index = 5;
let gen_number = generateNumber();
console.log("Winning number is " + gen_number);
while (inputNumber != gen_number && index > 0) {
    index--;
    console.log(index);
    inputNumber = parseInt(prompt("Voer een getal in tussen 0 en 25 om te beginnen met raden :)", ""));
    compareNumber(inputNumber, gen_number);
}

if (inputNumber != gen_number) {
    console.log("Winning number is " + gen_number);
}
