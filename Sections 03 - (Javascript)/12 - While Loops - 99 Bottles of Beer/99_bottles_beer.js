// var count = 100;

// function bottlesOfBeer() {
//     while (count >= 0) {
//         if (count >= 2) {
//             console.log(count + " bottles of beer on the wall, " + count + " bottles of beer."
//                 + "Take one down and pass it around, " + (count - 1) + " bottle of beer on the wall.");
//         }
//         else if (count === 1) {
//             console.log(count + " bottle of beer on the wall, " + count + " bottle of beer."
//                 + "Take one down and pass it around, no more bottles of beer on the wall.");
//         }
//         else {
//             console.log("No more bottles of beer on the wall, no more bottles of beer."
//                 + "Go to the store and buy some more, 99 bottles of beer on the wall.");
//         }
//         count--;
//     }
// }

// bottlesOfBeer();

var numberOfBottles = 100
while (numberOfBottles >= 1) {
    var bottleWord = "bottles";
    if (numberOfBottles === 1) {
        bottleWord = "bottle";
    }
    console.log(numberOfBottles + bottleWord + " of beer on the wall. " + numberOfBottles + bottleWord + " of beer.");
    console.log("Take one down, pass it around, " + (numberOfBottles - 1) + bottleWord + " of beer on the wall.")
    numberOfBottles--;
}