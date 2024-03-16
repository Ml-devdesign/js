// app.js
const readline = require('readline');

// Créez une interface Readline
const rl = readline.createInterface({// Nous utilisons readline.createInterface() pour créer une interface Readline.
  input: process.stdin, // Flux d'entrée standard (console)// process.stdin est le flux d’entrée standard (la console où l’utilisateur saisit des données).
  output: process.stdout, // Flux de sortie standard (console)// process.stdout est le flux de sortie standard (la console où les messages sont affichés).
});

// Posez une question à l'utilisateur
rl.question('Quel est votre nom ? ', (answer) => {// rl.question() pose une question à l’utilisateur et attend sa réponse.
  console.log(`Bonjour, ${answer} !`);// Lorsque l’utilisateur répond, la fonction de rappel est appelée avec la réponse.
  rl.close(); // Fermez l'interface Readline// Enfin, nous fermons l’interface Readline avec rl.close().
});// Exécution de l’application :

// Explication du code :
// Dans le terminal, exécutez votre application :
// node app.js
// Vous verrez la question “Quel est votre nom ?”. Saisissez votre nom et appuyez sur Entrée.
// L’application affichera “Bonjour, [votre nom] !” en réponse.
// En utilisant le module Readline, vous pouvez créer des applications interactives qui lisent et traitent les entrées de l’utilisateur. 😊