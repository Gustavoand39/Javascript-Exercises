/*
  Cuenta las palabras repetidas:
  Escribe una función llamada countRepeatedWords que reciba una cadena de texto como parámetro.
  La función debe contar el número de veces que se repiten las palabras en el texto y devolver un objeto con las palabras repetidas y su cantidad.
  Las palabras deben ser consideradas diferentes incluso si tienen signos de puntuación diferentes, como comas, puntos, etc.

  Ejemplo de entrada: "La casa es bonita, bonita y grande."
  Ejemplo de salida: { "la": 1, "casa": 1, "es": 1, "bonita,": 1, "bonita": 1, "y": 1, "grande": 1 }
*/

const countRepeatedWords = sentence => {
    const words = sentence.split(" ");

    const wordsCount = {};

    for(let word in words){
        if(wordsCount.hasOwnProperty(words[word])){
            wordsCount[words[word]] += 1;
        } else {
            wordsCount[words[word]] = 1;
        }
    }

    console.log(wordsCount);
}

// const sentence = "La casa es bonita, bonita y grande. Tu hija tiene una muñeca bonita en su cama.";
// const sentence = "El perro es grande y el gato es pequeño, pero el perro es más juguetón.";
const sentence = "El sol brilla en el cielo azul. El pajaro de color azul canta y las flores florecen.";

countRepeatedWords(sentence);