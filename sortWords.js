// Dado un arreglo de palabras, ordenarlas alfabéticamente en orden ascendente.

const words = ["banana", "manzana", "kiwi", "naranja", "pera", "uva"];
let sorted = false;

while (!sorted) {
    sorted = true; // Se asume que el array está ordenado

    for (let i = 0; i < words.length - 1; i++) {
        if (words[i] > words[i + 1]) {
            // Si la palabra actual es mayor que la siguiente, se intercambian
            [words[i], words[i + 1]] = [words[i + 1], words[i]]; // Destructurar el array
            sorted = false; // El array no está ordenado
        }
    }
}

console.log(words);