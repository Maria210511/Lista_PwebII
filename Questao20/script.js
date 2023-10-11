const altura = prompt('Insira a sua altura (escreva em metros):');
const peso = prompt('Insira o seu peso:');

let imc = peso / (altura * altura);

document.write("O seu IMC é: " + " " + imc);