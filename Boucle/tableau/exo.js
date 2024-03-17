// Exercice 1:
// Créez un tableau vide appelé months. Ajoutez les douze mois de l'année en utilisant la méthode push.
var months = [];
months.push()

// Exercice 2:
// Écrivez une fonction qui prend un tableau de nombres et renvoie la somme de tous les éléments.
var tableau = [5,6,5,8,,54,54,54,54,54,54,54,54,54];
function somme(tableau) {
    var somme = 0;
    for (var i = 0; i < tableaau.length; i++) {
        somme += tableaau[i];
    }
    return somme;
}

// Exercice 3:
// Créez un tableau d'entiers. Doublez la valeur de chaque élément en utilisant la méthode map.
tableau= tableau.map(n =>  n*2);
console.log(tableau);

// Exercice 4:
// Écrivez une fonction qui prend un tableau de noms et renvoie une nouvelle liste de noms qui commencent par la lettre "A".
tableaux = ['alice', 'charles', 'roger','anna'];


// Exercice 5:
// Créez deux tableaux, firstArray et secondArray, puis fusionnez-les en un seul tableau appelé mergedArray.
let firstArray =[1,2,3,4,5,6,7,8,9,10]
let secondArray =[1,2,3,4,5,6,7,8,9,10]
let merged= firstArray.concat(secondArray)
// merged.append(firstArray, secondArray)



// Exercice 6:
// Écrivez une fonction qui prend un tableau d'entiers et renvoie un nouveau tableau sans nombres pairs.
function pairs(tableau){
    var newArr = [];
    for (var i = 0; i < tableau.length; i++) {
        if (tableau[i] % 2 == 0) {
            newArr.push(tableau[i]);
        }
    }
    return newArr;
}


// Exercice 7:
// Créez un tableau d'objets représentant des livres (avec des propriétés comme title, author, year). Filtrer le tableau pour obtenir une liste des livres publiés après 2000.

// Exercice 8:
// Écrivez une fonction qui prend un tableau d'entiers et renvoie le plus grand nombre.

// Exercice 9:
// Créez un tableau de chaînes de caractères. Triez-les par ordre alphabétique.

// Exercice 10:
// Écrivez une fonction qui prend un tableau de nombres et renvoie un tableau contenant seulement les nombres premiers.

// Exercice 11:
// const firstNames = ["Noé", "Marc", "Dave", "Eva", "Jean", "Alex", "Ada", "Lia", "Maé", "Mya", "Noa"];

// 1) Trier le tableau dans l'ordre Alphabetique
// 2) Associer un attribut "type":"humain" a chaque élève
// 3) Associer à chaque élève une note aléatoire
// 4) Classer les élèves par note croissante
// 5) Calculer la moyenne des élèves