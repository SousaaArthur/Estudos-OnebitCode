let value = parseFloat(prompt("Informe um número: "));
let result = ""

for(let i = 1; i <= 20; i++){
  result += `${value} * ${i} = ${value * i}\n`
}

alert(
  "Resultado:\n\n" +
  result
)