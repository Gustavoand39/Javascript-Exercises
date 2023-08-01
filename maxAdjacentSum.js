/* 
    Dado un array de números,
    devuelve la suma más grande
    entre dos números adyacentes.
*/

// const numbers = [1, 8, 4, 2, 9, 10, 3, 5];
const numbers = [-2, -7, -4, -3];

const maxAdjacentArray = (array) => {
    let maxSum = -Infinity; // -Infinity es el menor número posible

    for(let i = 0; i < array.length - 1; i++){
        let sum = array[i] + array[i + 1];
        // Obtenemos el máximo entre la suma actual y el máximo anterior
        maxSum = Math.max(sum, maxSum);
    }

    return maxSum;
}

console.log(maxAdjacentArray(numbers));