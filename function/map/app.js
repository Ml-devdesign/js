// const numbers = [4, 9, 16, 25];
// const newArr = numbers.map(Math.sqrt)
//  [ 2, 3, 4, 5 ]
// Convert numbers to strings and convert them to strings array format using map() function for faster conversion
// node .\map\app.js

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}
// map() crée un nouveau tableau à partir de l’appel d’un pour chaque élément du tableau.

// map() n’exécute pas la fonction pour les éléments vides.

// map() ne modifie pas le tableau d’origine.