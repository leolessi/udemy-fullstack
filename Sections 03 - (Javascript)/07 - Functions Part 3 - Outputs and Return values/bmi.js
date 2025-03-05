function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2);
    return Math.round(bmi);

}
var wight = prompt("Enter your weight in kg: ");
var height = prompt("Enter your height in meters: ");

console.log("BMI = " + bmiCalculator());