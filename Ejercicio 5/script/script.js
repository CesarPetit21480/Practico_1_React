/*El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: 

 
Input:  40773821 
Output: ‘L’ */

let salir = true;
let abecedario = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];

do {
  let dni = prompt("Ingregse un DNI");
  if (dni === "cancelar") {
    salir = false;
    break;
  }

  if (dni < 0 || !Number.isInteger(parseInt(dni))) {
    alert("Introduce un número válido.");
  } else {
    let restoNumero = dni % 23;
    let letraCorrecpondiente = abecedario[restoNumero];

    alert(restoNumero);
    alert(letraCorrecpondiente);
  }
} while (salir);
