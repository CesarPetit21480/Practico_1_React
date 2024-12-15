/*1- Escribir un programa que solicite la edad y 
si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.*/

let edad = prompt("Ingrese su edad:");


if (!Number.isInteger(parseInt(edad))) {
  console.log("Debe ingresar un número entero.");
} else if (edad >= 18) {
  console.log("Usted puede conducir.");
} else {
  console.log("Usted no puede conducir.");
}


