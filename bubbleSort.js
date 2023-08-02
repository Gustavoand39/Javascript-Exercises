/* 
    El algoritmo de ordenamiento de burbuja es un algoritmo simple
    de ordenamiento que funciona comparando cada par adyacente de
    elementos en una lista y los intercambia si están en el orden incorrecto.
    El proceso se repite varias veces hasta que la lista esté completamente ordenada.
*/

const bubbleSort = (array) => {
    let n = array.length - 1;
    while(n > 0){
        for (let i = 0; i < n; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
            }
        }

        n--;
    }

    return array;
}

// console.log(bubbleSort([5, 3, 8, 4, 2]));
// console.log(bubbleSort([9, 3, 6, 1, 8, 2, 7, 5, 4]));
console.log(bubbleSort([20, 15, 10, 25, 5, 30]));