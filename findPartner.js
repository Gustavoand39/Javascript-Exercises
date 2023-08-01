/* 
    Escribe una función que tome un array de números enteros y un número
    entero objetivo como entrada. La función debe encontrar un par de números
    en el array cuya suma sea igual al objetivo y devolver un array con esos dos números.
    Si no se encuentra ningún par que cumpla la condición, la función debe devolver un array vacío.
*/

const findPartner = (array, objetive) => {
    const partners = [];

    for(let i = 0; i < array.length; i++){
        const n = array[i] < 0 ? objetive + array[i] : objetive - array[i];
        if(array.includes(n) && (array[i] + n == objetive) && array[i] !== n){
            partners.push(array[i], n);
            return partners;
        }
    }

    return partners;
}

// console.log(findPartner([1, 5, 9, 2, 6, 4], 6));
// console.log(findPartner([1, 2, 3, 4, 5], 10));
console.log(findPartner([-3, 0, 2, 5, 9, -2], 7));