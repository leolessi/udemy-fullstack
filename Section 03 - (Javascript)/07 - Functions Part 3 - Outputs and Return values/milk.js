function getMilk(money, costPerBottle) {
    console.log("You can buy " + calcBottles(money, costPerBottle) + " bottles of milk");
    return calcChange(money, costPerBottle);
}

function calcBottles(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);

    return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle;

    return change;
}

var change = getMilk(5);
console.log("You have " + change + " change left");