const min = 1;  
const max = 100;
const num = Math.floor(Math.random() * (max - min + 1) + min);
let tentativas = 0;
let Aviso1 = "Tente novamente!  Dica: Seu número inserido é maior!";
let Aviso2 = "Tente novamente!  Dica: Seu número inserido é menor!";

while (true) {
  let adivinhe = prompt("Adivinhe o número entre 1 e 100:");
  tentativas++;

  if (adivinhe == num) {
    document.write("Parabéns, você acertou o número! <br>"  + "Você tentou" + " " + tentativas+ " " + "vezes.");
    break;
  } else if (adivinhe < num) {
    alert(Aviso1);
  } else {
    alert(Aviso2);
  }
  
}