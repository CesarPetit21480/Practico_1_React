/*12- Realiza un script que genere un número aleatorio entre 1 y 99*/

let ValorRandom = Math.floor(Math.random() * (99 - 1 + 1)) + 1;
document.write("El numero Aleatorio es: " + ValorRandom);
alert(`El numero Aleatorio es:  ${ValorRandom}`);