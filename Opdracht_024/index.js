// Declaration 

function calcDecl(numberA) {
    numberB = numberA * numberA;
    numberC = numberB + numberB;
    numberD = numberC * numberC;
    return numberD;
}

console.log(calcDecl(3));

// Expression

const calcExpr = function (numberA) {
    numberB = numberA * numberA;
    numberC = numberB + numberB;
    numberD = numberC * numberC;
    return numberD;
}

console.log(calcExpr(2));

// Arrow 

const calcArrow = numberA => {
    numberB = numberA * numberA;
    numberC = numberB + numberB;
    numberD = numberC * numberC;
    return numberD;
}
console.log(calcArrow(4))