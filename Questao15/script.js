let numero = prompt("Digite um número para ver a tabuada de multiplicação:");

numero = +numero;

if (numero == 0 || numero) {

  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    document.write(numero + " x " + i + " = " + resultado +"<br>");
  }
}