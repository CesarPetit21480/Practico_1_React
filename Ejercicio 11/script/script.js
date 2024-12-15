/*11- Realiza un script que pida por teclado 3 edades
 y 3 nombres e indique el nombre del mayor. */


let valido = false;
let edad1;
let edad2;
let edad3;

let p1 = prompt("Ingrese Nombre Persona 1");

// Validar número edad
do {
  edad1 = Number(prompt("Ingrese edad persona 1"));
  if (!Number.isInteger(parseInt(edad1))) {
    alert("Debe ingresar un número entero.");
  } else {
    valido = true;
  }
} while (!valido);

let p2 = prompt("Ingrese Nombre Persona 2");



valido = false;
// Validar número edad 2
do {
  edad2 = Number(prompt("Ingrese edad persona 2"));
  if (!Number.isInteger(parseInt(edad2))) {
    alert("Debe ingresar un número entero.");
  } else {
    valido = true;
  }
} while (!valido);


valido = false;
let p3 = prompt("Ingrese Nombre Persona 3");


valido = false;
// Validar número edad 3
do {
  edad3 = Number(prompt("Ingrese edad persona 3"));
  if (!Number.isInteger(parseInt(edad3))) {
    alert("Debe ingresar un número entero.");
  } else {
    valido = true;
  }
} while (!valido);




if (edad1 > edad2 && edad1 > edad3) {
  alert(`la persona de mayor edad es es ${p1}`);
}
else if (edad2 > edad1 && edad2 > edad3) {
  alert(`la persona de mayor edad es es ${p2}`);
}
else
  alert(`la persona de mayor edad es es ${p2}`);

