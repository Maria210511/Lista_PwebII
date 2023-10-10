function maiorNumero(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}
let num1 = prompt("Digite o primeiro número:");
let num2 = prompt("Digite o segundo número:");
let num3 = prompt("Digite o terceiro número:");


let resultado = maiorNumero(num1, num2, num3);
alert("O maior número é: " + resultado);