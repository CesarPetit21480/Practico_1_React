/*3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
*/

let cadena = "";
let formada = "";
let salida = true;

do {
  cadena = prompt("Ingrese una cadena (presione cancelar para salir):");
  if (cadena.toLowerCase() === "cancelar") {
    salida = false;
  } else {
    if (formada === "") {
      formada = cadena;
    } else {
      formada += "-" + cadena;
    }
  }
} while (salida);

alert(formada);
