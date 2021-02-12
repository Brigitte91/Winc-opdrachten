const clubCheck = function (numberVisitors, age) {
    if (numberVisitors > 100) {
        console.log("It's too busy, come back later")
        return;
    } else if (age >= 18) {
        console.log("Come in")
        return
    }
    else {
        console.log("This is a club for adults")
        return;
    }
}

clubCheck(33, 19);
clubCheck(884, 33);
clubCheck(85, 16);
clubCheck(200, 15);

const average = function () {
    const result = Math.round(numbersList.reduce((a, b) => (a + b)) / numbersList.length);
    return result;
}

let numbersList = [3, 5, 6, 8.8, 5];
console.log(average(numbersList));

