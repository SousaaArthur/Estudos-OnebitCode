let firstCharacterName = prompt("Enter the first character's name:");
let attackQuantity = parseFloat(prompt("Enter the attack amount of the first character:"));

let secondCharacterName = prompt("Enter the second character's name:");
let quantityLife = parseFloat(prompt("Enter the life amount of the second character:"));
let defensePoint = parseFloat(prompt("Enter the second character's defense amount:"));
let shieldQuestion = prompt("Does the second character have a shield? (Yes/No)");

let damage = 0;

if(attackQuantity > defensePoint && shieldQuestion === "No" || "no"){
  damage = attackQuantity - defensePoint;
} else if(attackQuantity > defensePoint && shieldQuestion === "Yes" || "yes"){
  damage = (attackQuantity - defensePoint) / 2;
}

quantityLife -= damage

alert(firstCharacterName + " dealt " + damage + " points of damage to " + secondCharacterName);
alert(
  firstCharacterName + "\nAttack Quantity: " + attackQuantity + "\n\n" +
  secondCharacterName + "\nQuantity Life: " + quantityLife + 
  "\nDefense Point: " + defensePoint +
  "\nShield Question: " + shieldQuestion
)