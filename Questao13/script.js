let somaNotas = 0;

for (let i = 1; i <= 5; i++) {
  let nota = prompt("Digite a nota " + i + ":");

    somaNotas += Number(nota); 
 
}

let media = somaNotas / 5;


alert("A média das notas é: " + media);