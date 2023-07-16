/* 
    Escribe una función llamada sumOfMultiples que reciba dos parámetros, num1 y num2.
    La función debe calcular la suma de todos los múltiplos de num1 y num2 que sean menores que 100.
    Los múltiplos comunes a ambos números se deben contar solo una vez en la suma total.
*/

// Array donde se guardarán los múltiplos
const multiples = [];

// Función para generar los múltiplos de un número
function generateMultiples(num) {
    let i = 1;
    while (true) {
        const result = num * i;
        if (result > 99) {
            break;
        } else {
            multiples.push(result); // Se guardan TODOS los múltiplos en el array
        }
        i++;
    }
}


function sumOfMultiples(num1, num2) {
    generateMultiples(num1);
    generateMultiples(num2);

    /* 
        Ordenar el array de menor a mayor
        La comparación de números funciona así:
        *   Si la resta de a - b es negativa, a se ordena antes que b.
        *   Si la resta de a - b es positiva, b se ordena antes que a.
        *   Si la resta de a - b es cero, a y b se mantienen sin cambios entre sí pero ordenados con respecto a todos los demás elementos.
    */
    multiples.sort((a, b) => a - b);

    let sum = 0;
    const array = []; // Array donde se guardarán los múltiplos sin repetir

    for (const num of multiples) {
        // Si el número no está en el array, se suma y se guarda
        if (!array.includes(num)) {
            sum += num;
            array.push(num);
        }
    }

    console.log(`Los múltiplos de ${num1} y ${num2} son: ${array.join(", ")}`);
    console.log(`La suma total de los múltiplos es: ${sum}`);
}

sumOfMultiples(5, 10);