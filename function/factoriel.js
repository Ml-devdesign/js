// Calculer le factoriel d'un nombre

// Fonction utilisant une boucle for
function factorialFor(n) {
    let result = 1;
    // Parcours de 1 à n inclus
    for (let i = 1; i <= n; i++) {
        // Multiplication successive pour calculer le factoriel
        result *= i;
    }
    return result; // Retourne le résultat du factoriel
}

// Fonction utilisant une boucle while
function factorialWhile(n) {
    let result = 1;
    let i = 1;
    // Tant que i est inférieur ou égal à n
    while (i <= n) {
        // Multiplication successive pour calculer le factoriel
        result *= i;
        i++; // Incrémentation de i
    }
    return result; // Retourne le résultat du factoriel
}

// Fonction récursive pour calculer le factoriel
function factorialRecursive(n) {
    // Cas de base : si n est égal à 0 ou 1, retourne 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Appel récursif de la fonction pour calculer le factoriel
    return n * factorialRecursive(n - 1);
}

// Appels des fonctions avec un nombre (dans cet exemple, 5) et affichage du résultat
console.log("Factorial using for loop:", factorialFor(5));
console.log("Factorial using while loop:", factorialWhile(5));
console.log("Factorial using recursive function:", factorialRecursive(5));


// Calculer le factoriel d'un nombre :

// Nous avons trois fonctions : factorialFor, factorialWhile, et factorialRecursive, chacune calculant le factoriel d'un nombre donné.
// La fonction factorialFor utilise une boucle for pour calculer le factoriel.
// La fonction factorialWhile utilise une boucle while pour le calcul.
// La fonction factorialRecursive utilise une approche récursive pour calculer le factoriel.
// Ensuite, nous appelons chaque fonction avec un nombre (dans cet exemple, 5) et affichons le résultat.

// Calculer la somme d'un tableau :

// De manière similaire, nous avons trois fonctions : sumFor, sumWhile, et sumRecursive, chacune calculant la somme des éléments d'un tableau donné.
// sumFor utilise une boucle for, sumWhile utilise une boucle while, et sumRecursive utilise une approche récursive.
// Ensuite, nous appelons chaque fonction avec un tableau (dans cet exemple, [1, 2, 3, 4, 5]) et affichons le résultat.

// Calculer le n-ième nombre de Fibonacci :

// Encore une fois, nous avons trois fonctions : fibonacciFor, fibonacciWhile, et fibonacciRecursive, chacune calculant le n-ième nombre de Fibonacci.
// fibonacciFor utilise une boucle for, fibonacciWhile utilise une boucle while, et fibonacciRecursive utilise une approche récursive.
// Nous appelons ensuite chaque fonction avec un nombre (dans cet exemple, 6) et affichons le résultat.