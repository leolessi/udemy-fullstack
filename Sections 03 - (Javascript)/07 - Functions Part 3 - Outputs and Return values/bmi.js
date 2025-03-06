// function bmiCalculator(weight, height) {
//     var bmi = weight / Math.pow(height, 2);
//     return Math.round(bmi);

// }
// var wight = prompt("Enter your weight in kg: ");
// var height = prompt("Enter your height in meters: ");

// console.log("BMI = " + bmiCalculator());

function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2);
    var interpretation;

    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    } else {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }

    return interpretation;
}