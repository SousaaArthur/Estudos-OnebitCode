let firstCarName = prompt("Enter the name of the first car:");
let firstCarSpeed = parseFloat(prompt("Enter the speed of the first car:"));

let secondCarName = prompt("Enter the name of the second car:");
let secondCarSpeed = parseFloat(prompt("Enter the speed of the second car:"));

if(firstCarSpeed > secondCarSpeed){
  alert(
    "The fastest car is:" +
    "\n\nCar name: " + firstCarName +
    "\nCar speed: " + firstCarSpeed + "km"
  );
} else if(secondCarSpeed > firstCarSpeed){
  alert(
    "The fastest car is:" +
    "\n\nCar name: " + secondCarName +
    "\nCar speed: " + secondCarSpeed + "km"
  );
} else{
  alert(
    "The speed of both cars is the same:" +
    "\n\nFirst car name: " + firstCarName +
    "\nFirst car speed: " + firstCarSpeed + "km" +
    "\n\nSecond car name: " + secondCarName +
    "\nSecond car speed: " + secondCarSpeed + "km"
  );
}