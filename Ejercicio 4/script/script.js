/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” 
deberá indicarse la suma total de los números introducidos.*/

let numero = "";
let suma = 0;
let salida = true;

do {
  numero = prompt("Ingrese un número (presione cancelar para salir):");
  if (numero.toLowerCase() === "cancelar") {
    salida = false;
    break;
  }
  if (!Number.isInteger(parseInt(numero))) {
    alert("Debe ingresar un número entero.");
  } else {
    suma += parseInt(numero);
  }
} while (salida);

alert(`la suma es suma: ${suma}`);
