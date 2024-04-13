let firstName = prompt("What's your first name?");
let lastName = prompt("What's your las name?");
let studies = prompt("What do you study?");
let birth = prompt("What year were you born?");

console.log("First name: " + firstName);
console.log("Last name: " + lastName);
console.log("Studies: " + studies);
console.log("Age: " + (2024 - birth));

alert(
  "User registered successfully!\n" +
  "\nFirst name: " + firstName +
  "\nLast name: " + lastName +
  "\nStudies: " + studies +
  "\nAge: " + (2024 - birth)
)