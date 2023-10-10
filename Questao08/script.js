let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

let suposicaoUsuario;

do {
 
  suposicaoUsuario = parseInt(prompt("Adivinhe o número entre 1 e 10:"));


  if (suposicaoUsuario === numeroAleatorio) {
    alert("Parabéns! Você acertou o número.");
  } else {
    alert("Tente novamente.");
  }
} while (suposicaoUsuario !== numeroAleatorio);