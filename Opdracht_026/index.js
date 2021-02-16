var person = prompt("Welkom! Wat is je naam?", "");

if (person != null) {
    document.getElementById("name")
    alert(
        "Hey " + person + "!")
}

var inputNumber = parseInt(prompt("Voer een getal in tussen 0 en 25 om te beginnen met raden :)", ""));

const generateNumber = function (min, max) {
    min = Math.ceil(1);
    max = Math.floor(25);
    return Math.floor(Math.random() * (max - min) + min);
}

const checkNumber = function (inputNumber) {
    if (inputNumber <= 25 && inputNumber >= 1) {
        alert("knap van jou");
        //  hier de volgende stappen van het spelletje
    } else if (isNaN(inputNumber)) {
        return prompt("Dat is geen getal. Voer een getal in tussen 0 en 25 om te beginnen met raden.", "");


    } else {
        return prompt("Dat is een te groot of te klein getal. Voer een getal in tussen 0 en 25 om te beginnen met raden.", "");
    }
}
checkNumber(inputNumber);

