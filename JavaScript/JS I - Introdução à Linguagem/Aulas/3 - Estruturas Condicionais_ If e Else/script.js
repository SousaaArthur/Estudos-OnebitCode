const idade = prompt("Informe sua idade:")

if(idade >= 18){
  alert("Você é maior de idade!")
}else if(idade > 12){
  alert("Você é menor de idade!")
} else if(idade < 12){
  alert("Você é criança!")
} else {
  alert("..")
}

//If e Else Operador
const resultado = (6 === 6) ? "Verdadeiro" : "Falso"

console.log(resultado);