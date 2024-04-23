// Suggested code may be subject to a license. Learn more: ~LicenseLog:1944793483.

const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"];
console.log(arr);

// Adicionar Elementos
// Push
const tamanho = arr.push("Boromir");
console.log(arr);
console.log(tamanho);

// Unshift
const tamanho2 = arr.unshift("Harry");
console.log(arr);
console.log(tamanho2);

// Remover Elementos
// Pop
const ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

// Shift
const ultimoElemento2 = arr.shift();
console.log(arr);
console.log(ultimoElemento2);

// Pesquisar por um Elemento
// Includes
const inclui = arr.includes("Gandalf");
console.log(inclui);

// indexOf
const indice = arr.indexOf("Gandalf");
console.log(indice);

// Cortar e Concatenar
// Slice
const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4);
console.log(hobbits);
console.log(outros);

// Concat
const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);

// Substituição dos Elementos
// Splice
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o cinzento");
console.log(sociedade);
console.log(elementosRemovidos);

// Iterar sobre os Elementos 
