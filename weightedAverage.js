/*
  Calcula el promedio ponderado:
  Escribe una función llamada calculateWeightedAverage que reciba dos arreglos: numbers y weights.
  El arreglo numbers contiene números y el arreglo weights contiene los pesos correspondientes a cada número.
  Ambos arreglos tienen la misma longitud.
  La función debe calcular el promedio ponderado de los números utilizando los pesos proporcionados y devolver el resultado.
*/

const numbers = [2, 4, 6, 8, 10];
const weights = [1, 2, 3, 4, 5];

// Función flecha en lugar de function
const calculateWeightedAverage = (numbers, weights) => {
    try {
        let sumProducts = 0,
            weightAverage = 0.0,
            total = 0;

        for (const i in numbers) {
            // Suma de los productos de los números por sus pesos
            sumProducts += numbers[i] * weights[i];
            // Suma de los pesos
            weightAverage += weights[i];
        }

        // Validación para evitar división entre cero
        if (weightAverage === 0) {
            throw new Error("No se puede dividir por cero.");
        }

        total = sumProducts / weightAverage;

        // Imprime el resultado con dos decimales
        console.log("El promedio ponderado de los números es: " + total.toFixed(2));
    } catch (error) {
        console.error(error);
    }
};

calculateWeightedAverage(numbers, weights);