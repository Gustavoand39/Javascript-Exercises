/*
    Escribir una función que tome un número entero positivo como entrada
    y devuelva su representación en binario como una cadena.
*/

const decimalBinary = (num) => {
    // Declaramos una variable para guardar el resultado
    let binary = '';
    while (num > 0) {
        // El residuo de la división lo concatenamos a la variable
        binary = (num % 2) + binary;
        // Dividimos el número entre 2 y lo redondeamos hacia abajo
        num = Math.floor(num / 2);
    }
    
    return binary;
}

console.log(decimalBinary(25)); // 11001