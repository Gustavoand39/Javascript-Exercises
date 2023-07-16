/* 
    Escribe una función llamada isPalindrome que reciba una palabra
    como parámetro y determine si es un palíndromo. Un palíndromo es una
    palabra que se lee igual de izquierda a derecha que de derecha a izquierda.
*/

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function isPalindrome(w) {
    // Convertir la palabra a minúsculas
    w = w.toLowerCase();
    // Convertir las palabras en arrays
    const word = w.split(""),
        reverseWord = w.split("");
    reverseWord.reverse();
    let isPal = true;

    // Para cada letra de la palabra, compararla con la letra en la misma posición de la palabra invertida
    for (const i in word) {
        // Si todas las letras son iguales, la palabra es un palíndromo
        if (word[i] !== reverseWord[i]) {
            isPal = false;
            break;
        }
    }

    console.log(isPal);
}

rl.question("Ingrese una palabra: ", (word) => {
    isPalindrome(word);
    rl.close();
});