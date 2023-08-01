/* 
    Generar una lista de números del 1 al n (donde n es un número entero dado como entrada)
    con algunas condiciones especiales:

        * Para los múltiplos de 3, en lugar de imprimir el número, se debe imprimir la palabra "Fizz".
        * Para los múltiplos de 5, en lugar de imprimir el número, se debe imprimir la palabra "Buzz".
        * Para los números que son múltiplos tanto de 3 como de 5, se debe imprimir la palabra "FizzBuzz".
*/

const fizzBuzz = (n) => {
    const array = [];

    for(let i = 1; i <= n; i++){
        if ((i % 5 == 0) && (i % 3 == 0)){
            array.push("FizzBuzz");
        } else if (i % 3 == 0) {
            array.push("Fizz");
        } else if (i % 5 == 0){
            array.push("Buzz");
        } else {
            array.push(i);
        }
    }

    return array;
}

console.log(fizzBuzz(20));