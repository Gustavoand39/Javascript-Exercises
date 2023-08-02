/* 
    Desarrolla un programa para clasificar a los estudiantes de Hogwarts en sus respectivas casas:
        * Gryffindor
        * Ravenclaw
        * Hufflepuff
        * Slytherin
    Para lograr esto, el programa debe realizar una serie de preguntas a cada estudiante y basándose
    en sus respuestas, determinar a qué casa pertenecen.
*/

import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Definir un objeto para almacenar las respuestas
const choiceHouse = {
    Gryffindor: 0,
    Ravenclaw: 0,
    Hufflepuff: 0,
    Slytherin: 0,
};

// Función para procesar la respuesta
const processAnswer = (answerChoice) => {
    switch (answerChoice) {
        case 1:
            choiceHouse.Gryffindor++;
            break;
        case 2:
            choiceHouse.Ravenclaw++;
            break;
        case 3:
            choiceHouse.Hufflepuff++;
            break;
        case 4:
            choiceHouse.Slytherin++;
            break;
    }
};

// Función para determinar la casa ganadora
const determineHouseWinner = (choiceHouse) => {
    let max = -Infinity;
    let houseWinner = "";

    // Recorre el objeto choiceHouse
    for (const key in choiceHouse){
        // Si dos casas obtienen la misma puntuación, elige una al azar
        if (choiceHouse[key] === max){
            // Obtener un número aleatorio entre 0 y 1, lo redondea hacia abajo y lo multiplica por 2
            const rand = Math.floor(Math.random() * 2);
            if(rand){
                houseWinner = key;
            }
        } else if (choiceHouse[key] > max){
            // Si una casa obtiene una puntuación mayor que la puntuación máxima, la reemplaza
            max = choiceHouse[key];
            houseWinner = key;
        }
    }

    console.log("\nTu casa es...");

    // Simula un tiempo de espera de 2.5 segundos
    setTimeout(() => {
        console.log(`\n¡Felicidades! Tu casa en Hogwarts es ${houseWinner}. ¡Bienvenido/a a ${houseWinner}!\n`);
    }, 2500);
};

const promptQuestion = (question, callback) => {
    rl.question(question, (answerChoice) => {
        // Convierte la respuesta a un número entero
        const choiceNumber = parseInt(answerChoice, 10);
        // Valida que la respuesta sea un número del 1 al 4
        if (isNaN(choiceNumber) || choiceNumber < 1 || choiceNumber > 4) {
            // Muestra un mensaje de error
            console.log("\nERROR: Entrada inválida. Por favor, ingresa un número del 1 al 4.\n");
            // Llamada recursiva para hacer la pregunta nuevamente
            promptQuestion(question, callback);
        } else {
            // Respuesta válida, ejecuta el callback con el valor
            callback(choiceNumber);
        }
    });
};

// Llamada a la función para comenzar el cuestionario
promptQuestion(
    "\n¡Bienvenido! Ingresa un número para responder.\n\n" +
        "¿Qué cualidad valoras más en ti mismo/a?" +
        "\n\t1. Coraje y valentía" +
        "\n\t2. Sabiduría y conocimiento" +
        "\n\t3. Lealtad y amistad" +
        "\n\t4. Ambición y determinación" +
        "\nTu respuesta: ",
    (answerChoice) => {
        // Procesa la respuesta
        processAnswer(answerChoice);

        // Llamada recursiva para hacer la siguiente pregunta y así sucesivamente
        promptQuestion(
            "\n¿Cómo te enfrentas a los problemas?" +
                "\n\t1. Actúo impulsivamente" +
                "\n\t2. Analizo y planifico cuidadosamente" +
                "\n\t3. Busco el apoyo de mis amigos" +
                "\n\t4. Busco oportunidades para obtener ventaja" +
                "\nTu respuesta: ",
            (answerChoice) => {
                processAnswer(answerChoice);

                promptQuestion(
                    "\n¿Cuál es tu asignatura favorita en Hogwarts?" +
                        "\n\t1. Defensa Contra las Artes Oscuras" +
                        "\n\t2. Historia de la Magia o Runas Antiguas" +
                        "\n\t3. Cuidado de Criaturas Mágicas o Herbología" +
                        "\n\t4. Pociones o Encantamientos"+
                        "\nTu respuesta: ",
                    (answerChoice) => {
                        processAnswer(answerChoice);

                        promptQuestion(
                            "\n¿Qué tipo de libros te atraen más?" +
                                "\n\t1. Aventuras y hazañas heroicas" +
                                "\n\t2. Libros académicos y de enigmas" +
                                "\n\t3. Cuentos sobre la amistad y el amor" +
                                "\n\t4. Libros sobre magia oscura y criaturas mágicas peligrosas" +
                                "\nTu respuesta: ",
                            (answerChoice) => {
                                processAnswer(answerChoice);

                                promptQuestion(
                                    "\n¿Cuál es tu postura ante las reglas y normas?" +
                                        "\n\t1. A veces las rompo si es necesario" +
                                        "\n\t2. Las sigo siempre, son importantes" +
                                        "\n\t3. Intento seguirlas, pero la amistad es más relevante" +
                                        "\n\t4. Las veo como guías flexibles" +
                                        "\nTu respuesta: ",
                                    (answerChoice) => {
                                        processAnswer(answerChoice);

                                        promptQuestion(
                                            "\n¿Qué cualidad crees que es más valiosa en un amigo/a?" +
                                                "\n\t1. Valentía y coraje" +
                                                "\n\t2. Inteligencia y sabiduría" +
                                                "\n\t3. Lealtad y honestidad" +
                                                "\n\t4. Ambición y astucia" +
                                                "\nTu respuesta: ",
                                            (answerChoice) => {
                                                processAnswer(answerChoice);

                                                promptQuestion(
                                                    "\n¿Qué lugar te atrae más en el mundo mágico?" +
                                                        "\n\t1. Bosque Prohibido" +
                                                        "\n\t2. Biblioteca de Hogwarts" +
                                                        "\n\t3. El Gran Comedor o Sala Común" +
                                                        "\n\t4. Mazmorras o Sala de Menesteres" +
                                                        "\nTu respuesta: ",
                                                    (answerChoice) => {
                                                        processAnswer(answerChoice);

                                                        promptQuestion(
                                                            "\n¿Cómo te sientes respecto a la competencia y los desafíos?" +
                                                                "\n\t1. Me emociona y quiero demostrar mi valía" +
                                                                "\n\t2. Me motiva a superarme y aprender más" +
                                                                "\n\t3. No me gusta mucho, prefiero un ambiente colaborativo" +
                                                                "\n\t4. Me gusta, y estoy dispuesto/a a hacer lo necesario para ganar" +
                                                                "\nTu respuesta: ",
                                                            (answerChoice) => {
                                                                processAnswer(answerChoice);
                                                                // Determina la casa ganadora
                                                                determineHouseWinner(choiceHouse);
                                                                // Cierra la interfaz de lectura
                                                                rl.close();
                                                            }
                                                        );
                                                    }
                                                );
                                            }
                                        );
                                    }
                                );
                            }
                        );
                    }
                );
            }
        );
    }
);