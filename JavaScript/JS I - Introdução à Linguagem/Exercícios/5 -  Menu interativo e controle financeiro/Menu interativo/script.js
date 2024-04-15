let menu = "";


do {

  menu = parseFloat(prompt(
    "Escolha uma das opções" +
    "\n\n1. Primeira Opção" +
    "\n2.Segunda Opção" +
    "\n3. Terceira Opção" +
    "\n4. Quarta Opção" +
    "\n5. Encerrar"
  ));
  
  switch(menu){
    case 1:
      alert("Você escolheu a opção 1!");
      break
    case 2:
      alert("Você escolheu a opção 2!");
      break
    case 3:
      alert("Você escolheu a opção 3!");
      break
    case 4:
      alert("Você escolheu a opção 4!");
      break
    case 5:
      alert("Finalizando...");
      break
    default:
      alert("Opção invalida!");
  }
} while(menu !== 5)