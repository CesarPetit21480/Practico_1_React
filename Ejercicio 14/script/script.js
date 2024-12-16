/*14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace.
 Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.*/



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
let corteAnterior = cantidad - 1

for (let index = 0; index < cantidad; index++) {

    if (index === corteAnterior) {
        nuevaPalabra += texto[index];
    }
    else {
        nuevaPalabra += texto[index] + "-";
    }

}
alert(`La nueva Palabra es:  ${nuevaPalabra}`)

