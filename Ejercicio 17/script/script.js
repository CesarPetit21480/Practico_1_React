/*17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.*/



let valido = false;
let texto = "";

while (!valido) {
    texto = prompt("Ingrese un texto");

    if (texto === null) {
        alert("Por favor, ingrese un texto válido.");
    } else if (texto.trim() === "") {
        alert("Por favor, ingrese un texto válido.");
    } else {
        valido = true;
    }
}

let cantidad = texto.length;
let nuevaPalabra = "";
let ubicacion;
let vocales = ['A', 'E', 'I', 'O', 'U'];
let vocalEncontrada;

for (let index = 0; index < cantidad; index++) {

    let letra = texto[index].toUpperCase();

    let existeVocal = vocales.some(vocal => vocal === letra);

    if (existeVocal) {
        ubicacion = index;
        vocalEncontrada = letra;
        break;
    }
}

console.log(`Posicion primera vocal: ${ubicacion}`);
console.log(`Vocal Encontrada: ${vocalEncontrada}`);
