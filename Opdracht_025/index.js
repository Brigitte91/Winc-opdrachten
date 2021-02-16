// Hey Kiddo excercise

const checkAge = function (age) {
    console.log("entering age..", age)
    if (age >= 18) {
        return true;
    } else if (age < 18) {
        return false;
    }
}


const greetAge = function (age) {
    console.log("checking age")
    if (checkAge(age) == true) {
        console.log("Hello there");
    }
    else {
        console.log("Hey kiddo");
    }
}
greetAge(33);
greetAge(14);

// VAT excercises

const calcVat = function (basePrice) {
    vatAmount = basePrice * 0.21;
    totalAmount = vatAmount + basePrice;
    return [vatAmount, totalAmount];
}

const calcTotal = function (basePrice) {
    console.log(calcVat(basePrice))
}

calcTotal(2)