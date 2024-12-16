/*15- Realiza un script que cuente el número de vocales que tiene un texto.*/

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
let cantidadVocales = 0;
let vocales = ['A', 'E', 'I', 'O', 'U'];
let vocalesEncontradas = [];

for (let index = 0; index < cantidad; index++) {

    let letra = texto[index].toUpperCase();

    let existeVocal = vocales.some(vocal => vocal === letra);

    if (existeVocal) {
        cantidadVocales++;
        vocalesEncontradas.push(letra);
    }
}

console.log(`Cantidad de vocales: ${cantidadVocales}`);
console.log(`Vocales Encontradas: ${vocalesEncontradas}`);
