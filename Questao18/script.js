const palavra = prompt('Escreva uma palavra:');

const letras = palavra.split('');

const palavraIn = letras.slice().reverse()

if (palavra == palavraIn.join('')) {
  document.write("A palavra" + " " + palavra + " "+ "é um palíndromo");
} else {
  document.write("A palavra"+ " " + palavra + " "+ "não é um palíndromo");
}