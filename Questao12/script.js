function isPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
    for (let num = 2; num < numero; num++) {
      if (numero % num === 0) {
        return false;
      }
    }
    return true;
  }
  
  let numeroInserido = parseInt(prompt("Digite um número:"));
  
  if (isPrimo(numeroInserido)) {
    alert(numeroInserido + " é um número primo.");
  } else {
    alert(numeroInserido + " não é um número primo.");
  }