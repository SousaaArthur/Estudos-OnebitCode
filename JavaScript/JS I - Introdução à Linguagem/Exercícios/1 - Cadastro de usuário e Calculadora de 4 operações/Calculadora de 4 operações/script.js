let firstNumber = parseFloat(prompt("Enter a first number:"));
let secondNumber = parseFloat(prompt("Enter a second number:"));

let sum = firstNumber + secondNumber;
let subtaction = firstNumber - secondNumber;
let multiplication = firstNumber * secondNumber;
let division = firstNumber / secondNumber;

console.log("Sum: " + sum);
console.log("Subtaction: " + subtaction);
console.log("Multiplication: " + multiplication);
console.log("Division: " + division);

alert(
  "Results of the 4 operations!\n" +
  "\nSum: " + sum +
  "\nSubtaction: " + subtaction +
  "\nMultiplication: " + multiplication +
  "\nDivision: " + division
)