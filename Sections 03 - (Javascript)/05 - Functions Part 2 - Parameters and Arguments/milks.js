function getMilk(money) {
    var howManyBottles = Math.floor(money / 1.5);
    console.log("I can buy " + howManyBottles + " bottles of milk with " + money + " dollars."
        + " It'll cost me " + howManyBottles * 1.5 + " dollars.");
}

getMilk(5);
getMilk(10);