/* 
    Dado un array de números enteros, una "inversión" ocurre cuando
    un par de elementos del array están en el orden incorrecto, es decir,
    el elemento en una posición posterior es menor que el elemento en una posición anterior.
    La función debería retornar el número de inversiones en el array dado.
*/

const reversal = (array) => {
    let count = 0;

    for(let i = 1; i < array.length; i++){
        for(let j = 0; j < i; j++){
            if (array[j] > array[i]) {
                count++;
            }
        }
    }

    return count;
}

console.log(reversal([2, 1, 3, 5, 4]));