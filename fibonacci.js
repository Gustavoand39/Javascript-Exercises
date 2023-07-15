import readline from "readline";

// Crear una interfaz de lectura
const rl = readline.createInterface({
    input: process.stdin, // entrada de datos por consola
    output: process.stdout, // salida de datos por consola
});

// Preguntar por un numero
rl.question("Ingrese un numero: ", (n) => {
    fibonacci(n); // Llamar a la funcion fibonacci
    rl.close(); // Cerrar la interfaz de lectura
});

function fibonacci(n) {
    switch (n) {
        case '0': // Si el numero es 0
            console.log(0);
            break;

        case '1': // Si el numero es 1
            console.log("0\n1");
            break;

        default: // Si el numero es mayor a 1
            let primario = 0,
                secundario = 1,
                fib = 0,
                fibSequence = [0, 1]; // Crear un array con los numeros iniciales de fibonacci

            for (let i = 2; i < n; i++) {
                fib = primario + secundario; // Sumar los dos numeros anteriores
                primario = secundario; // El numero secundario pasa a ser el primero
                secundario = fib; // El numero fib pasa a ser el segundo
                fibSequence.push(fib); // Agregar el numero fib al array
            }

            console.log(fibSequence.join(", ")); // Mostrar la secuencia de fibonacci
            break;
    }
}
