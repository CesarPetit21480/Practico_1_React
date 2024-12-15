


/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/
let valido = false;
let numeroFinal

do {
  numeroFinal = prompt("Seleccione un Numero Para la Piramide")

  if (!Number.isInteger(parseInt(numeroFinal))) {
    alert("Debe ingresar un número entero.");
  } else {
    valido = true;;
  }


} while (!valido);


let cont = ""
let accumulador = "";
for (let i = numeroFinal; i >= 1; i--) {
  cont = "";
  for (let j = 0; j < i; j++) {
    cont += (i.toString());
  }
  accumulador += cont;
  accumulador += "\n";
}
console.log(accumulador);