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

/////////////////////////////////////////////////////////////////////////////////

// var numberOfBottles = 100
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottles";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottle";
//         console.log("\n" + numberOfBottles + " " + bottleWord + " of beer on the wall, " + numberOfBottles + " " + bottleWord + " of beer.");
//         console.log("Take one down, pass it around, no more bottles of beer on the wall.")
//     }
//     else if (numberOfBottles === 0) {
//         console.log("\nNo more bottles of beer on the wall, no more bottles of beer.");
//         console.log("Go to the store and buy some more, " + (numberOfBottles + 99) + " bottles of beer on the wall.");
//     }
//     else {
//         console.log("\n" + numberOfBottles + " " + bottleWord + " of beer on the wall, " + numberOfBottles + " bottles of beer.");
//         console.log("Take one down and pass it around, " + numberOfBottles + " " + bottleWord + " of beer on the wall.");
//     }
//     numberOfBottles--;
// }

/////////////////////////////////////////////////////////////////////////////////

for (var i = 99; i >= 1; i--) {
    if (i > 1) {
        console.log(`\n${i} bottles of beer on the wall, ${i} bottle of beer.`);
        console.log(`Take one down and pass it around, ${i - 1} bottles of beer on the wall.`);
    }
    else {
        console.log(`\n${i} bottle of beer on the wall, ${i} bottle of beer.`);
        console.log('Take one down and pass it around, no more bottles of beer on the wall.');
    }
}
console.log("\nNo more bottles of beer on the wall, no more bottles of beer. ");
console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");