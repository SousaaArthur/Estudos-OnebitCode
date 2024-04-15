let name = prompt("What's your name?");
let question = prompt("Have you ever visited any city? (Yes/No)");

let cities = "";
let score = 0

while(question === "Yes"){

  let questionCity = prompt("Which city have you visited?");
  cities += " - " + questionCity + "\n";
  score++;

  question = prompt("Have you ever visited any other city? (Yes/No)");
}

alert(
  "Cities visited" + 
  "\n\nName: " + name +
  "\nCities visited:" + score + 
  "\nCitiy names\n: " + cities
)