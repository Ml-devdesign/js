const listeMots = ["Gredin", "Mécréant", "Vilain", "Sauvage"]
let score = 0

let result = prompt("Le Mot et : " + listeMots[0])

// if (score === 0 , score < listeMots , score++ ) {
//     result = prompt("Le Mot et : " + listeMots[score])
// }

// switch (result) {
    if (result === listeMots[0]) {
        score++
        console.log("ok")  
    } 

    result = prompt("Le Mot et : " + listeMots[1])
    if (result === listeMots[1]) {
        score++
        console.log("Pas bien")  
    }

    result = prompt("Le Mot et : " + listeMots[2])
    if (result === listeMots[2]) {
        score++
        console.log("Bien") 
    }

    result = prompt("Le Mot et : " + listeMots[3])
    if (result === listeMots[3]) {
        score++
        console.log("Hora" + " Ton score :  " + score)  
    }

    // if (result !== "listeMots") {
    //     console.log("Erreur")
    // }
 
    

    // Basic Array Methods
        // Array length
        // Array toString()
        // Array at()
        // Array join() => document.getElementById("demo").innerHTML = fruits.join(" * "); 
        // Array pop() =>La méthode supprime le dernier élément d’un tableau 
        // Array push() => La méthode ajoute un nouvel élément à un tableau (à la fin)  ++ let length = fruits.push("Kiwi"); renvoie la nouvelle longueur du tableau
        // Array reverse() => La méthode permet de revenir un tableau en ordre décroiss
        // Array shift() => La méthode supprime le premier élément du tableau et « décale » tous les d’autres éléments à un indice inférieur
        // Array sort() => La méthode permet de trier un tableau en ordre décroiss
        // Array splice() => La méthode permet de supprimer un élément d’un tableau et
        // Array shift() => La méthode supprime le premier élément du tableau et «
        // Array unshift() => La méthode ajoute un nouvel élément à un tableau à la
        // Array delete() => La méthode permet de supprimer un élément d’un tableau
        // Array concat() => La méthode permet de concaténer un tableau à un autre tableau
        // Array copyWithin() => La méthode permet de copier un tableau à un autre tableau
        // Array flat() => La méthode permet de convertir un tableau en tableau de nouvelles
        // Array splice() => La méthode permet de supprimer un élément d’un tableau et
        // Array toSpliced() => La méthode permet de convertir un tableau en tableau de nouvel
        // Array slice() => La méthode permet de convertir un tableau en tableau de nouvel

    // See Also:

    // Search Methods
        // Array indexOf() => La méthode permet de trouver l’index de l’élé
        // Array lastIndexOf() => La méthode permet de trouver l’index du dernier élé   
        // Array includes() =>  Cela nous permet de vérifier si un élément est présent dans un tableau (y compris NaN, contrairement à indexOf).
        // Array find() => const numbers = [4, 9, 16, 25, 29];
            // let first = numbers.find(myFunction);
            // function myFunction(value, index, array) {
            // return value > 18;
            // }la fonction prend 3 arguments :La valeur de l’article L’index des éléments Le tableau lui-même
        // Array findIndex() => La méthode permet de trouver l’index du premier él
        // Array findLast() => La méthode permet de trouver le dernier élément qui ré
        // Array findLastIndex() => La méthode permet de trouver le dernier élément qui ré

    // Sort Methods
    // Alpabetic Sort :
        // Array sort()
        // Array reverse()
        // Array toSorted()
        // Array toReversed()
        // Sorting Objects

    // Numeric Sort :
        // Numeric Sort
        // Random Sort
        // Math.min()
        // Math.max()
        // Home made Min()
        // Home made Max()

    // Iteration Methods 
    // Array Iteration Methods
    // Array iteration methods operate on every array item:
        // Array forEach
        // Array map()
        // Array flatMap()
        // Array filter()
        // Array reduce()
        // Array reduceRight()
        //Array every()
        // Array some()
        // Array from()
        // Array keys()
        // Array entries()
        // Array with()
        // Array Spread (...)

