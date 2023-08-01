/* 
    Escribe una función que tome un array de números enteros sin repetir,
    que contenga todos los números de 1 a n (donde n es la longitud del array más 1).
    El array estará desordenado y le faltará un número. La función debe devolver el número faltante.
*/

const numbers = [4, 1, 7, 5, 6, 3, 8];

const missingNumber = (array) => {
    // Obtenemos el número mayor del array y le sumamos 1
    const n = Math.max(...array) + 1;

    for (let i = 1; i < n; i++){
        // Si el número no está en el array, lo devolvemos
        if(!array.includes(i)){
            return i;
        }
    }
}

console.log(missingNumber(numbers));