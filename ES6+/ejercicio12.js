/*Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array 
sea igual al valor del texto que enviaste como parametro.
Haz varios ejemplos y compruebalos.
Sugerencia de función:
function findArrayIndex(array, text) { }
Ej array:*/
function findArrayIndex(array, text) {
  return array.indexOf(text);
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

console.log(findArrayIndex(mainCharacters, "Luke"));
console.log(findArrayIndex(mainCharacters, "Anakin"));
console.log(findArrayIndex(mainCharacters, "Yoda"));

