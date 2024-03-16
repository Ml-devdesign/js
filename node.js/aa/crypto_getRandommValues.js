/* utilise crypto.getRandomValues pour remplire un tableau Uint16Array avec des valeur aleatoir  */
/* En partant du principe que window.crypto.getRandomValues */
/* est disponible */

let array = new Uint16Array(10); // Crée un nouvel objet Uint16Array avec une longueur de 10 éléments, chaque élément étant un entier non signé de 16 bits initialisé à 0.
self.crypto.getRandomValues(array); // Remplit le tableau 'array' avec des valeurs aléatoires sécurisées provenant de l'API 'crypto'. 'self' représente l'objet global. L'API de cryptographie du navigateur est utilisée pour générer des valeurs aléatoires sécurisées et les stocker dans le tableau 'array'.
console.debug(array); // Affiche le contenu du tableau 'array' dans la console pour vérifier les valeurs aléatoires sécurisées.

//Exemple en js 
// let array = new Uint16Array(10);

// Remplit le tableau 'array' avec des valeurs aléatoires en utilisant Math.random()
// for (let i = 0; i < array.length; i++) {
//     array[i] = Math.floor(Math.random() * 65536); // Génère un nombre aléatoire entre 0 et 65535 inclus (16 bits)
// }
// Dans cet exemple, nous utilisons Math.random() pour générer des nombres aléatoires entre 0 et 1, puis nous multiplions par 65536 pour obtenir des nombres entre 0 et 65535 inclus, qui peuvent être stockés dans un Uint16Array.

// Cependant, je tiens à souligner que cette méthode n'est pas adaptée à la génération de valeurs cryptographiquement sécurisées. Pour des opérations de cryptographie, utilisez plutôt l'API crypto fournie par les navigateurs ou des bibliothèques de cryptographie tierces disponibles pour Node.js ou d'autres environnements JavaScript.




// console.debug(array);

//Node js Exemple similaire 
// const crypto = require('crypto');

// let array = new Uint16Array(10);
// crypto.randomFillSync(array);

// console.debug(array);