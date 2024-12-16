/*16 - Realiza un script que pida una cadena de texto y la devuelva al revés.Es decir, 
si tecleo “hola que tal” deberá mostrar “lat euq aloh”.*/

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
let palabraNueva = "";

for (let index = cantidad - 1; index >= 0; index--) {
    palabraNueva += texto[index];
}

alert(`Palabra al Reves: ${palabraNueva}`);
