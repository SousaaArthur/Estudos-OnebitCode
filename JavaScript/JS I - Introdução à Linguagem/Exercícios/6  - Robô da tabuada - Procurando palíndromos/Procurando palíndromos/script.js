let value = prompt("Insira uma palavra:");
let invertedValue = "";

for (let i = value.length - 1; i >= 0; i--) {
  invertedValue += value[i];
}

if(invertedValue === value) {
  alert("A palavra é um palíndromo");
} else {
  alert(
    "A palavra não é um palíndromo\n\n" + 
    value + " !== " + invertedValue
    );
}


