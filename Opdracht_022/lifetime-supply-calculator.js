const calculateSupply = function (age, dailyAmount) {
    let totalAmount = Math.round(dailyAmount * 365 * age);
    console.log("You will need " + totalAmount + " to last you until the ripe old age of " + age + "!")
}

calculateSupply(63, 2);
calculateSupply(51, 3.3);
calculateSupply(22, 22);
