/*6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
*/

let valido = false;
let numeroFinal

do {
  numeroFinal = prompt("Seleccione un Numero Para la Piramide < 50")

  if (!Number.isInteger(parseInt(numeroFinal))) {
    alert("Debe ingresar un número entero.");
  } else if (parseInt(numeroFinal) > 50) {
    alert("Debe ingresar un número menos que 50");
  } else {
    valido = true;;
  }
} while (!valido);




let cont = ""
let accumulador = "";
for (let i = 1; i <= numeroFinal; i++) {
  cont = "";
  for (let j = 0; j < i; j++) {
    cont += (i.toString());
  }
  accumulador += cont;
  accumulador += "\n";
}
console.log(accumulador);



