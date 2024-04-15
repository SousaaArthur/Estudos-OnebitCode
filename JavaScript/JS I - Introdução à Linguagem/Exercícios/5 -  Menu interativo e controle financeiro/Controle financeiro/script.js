let money = parseFloat(prompt("Quanto de dinheiro você tem disponível?"));

let menu;
let add;
let remover;

do{
  menu = parseFloat(prompt(
    "Quantidade de dinheiro atual:" + 
    "\nDinheiro: " + money + "R$" +
    "\n\nOptions:" + 
    "\n1. Adicionar mais dinheiro" + 
    "\n2. Remover Dinheiro" +
    "\n3. Finalizar"
  ));

  switch(menu){
    case 1:
      add = parseFloat(prompt("Quanto de dinheiro você quer adicionar?"));
      money += add
      break
    case 2:
      remover = parseFloat(prompt("Quanto dinheiro você quer remover?"));
      money -= remover
      break
    case 3:
      alert("Finalizando...");
      break
    default:
      alert("Opção invalida!");
  }
} while(menu !== 3);