/*10- Realiza un script que pida número de filas y columnas y escriba una tabla. 
Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. 
Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1. */


let fila;
let columna;

let valido = false;

// Validar número de filas
do {
  fila = prompt("Seleccione un Número de Filas:");
  if (!Number.isInteger(parseInt(fila))) {
    alert("Debe ingresar un número entero.");
  } else {
    valido = true;
  }
} while (!valido);

valido = false;

// Validar número de columnas
do {
  columna = prompt("Seleccione un Número de Columnas:");
  if (!Number.isInteger(parseInt(columna))) {
    alert("Debe ingresar un número entero.");
  } else {
    valido = true;
  }
} while (!valido);

// Calcular el número final
let resultado = fila * columna;

document.write('<table border="1" style="border-collapse: collapse; text-align: center;">');

for (let f = 0; f < fila; f++) {
  document.write('<tr>');
  for (let c = 0; c < columna; c++) {
    document.write('<td>' + resultado + '</td>');
    resultado--;
  }
  document.write('</tr>');
}
document.write('</table>');
