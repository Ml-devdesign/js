
//Operateur ternaire
//? Si : Sinon

// et Operteur Logique 
// !(PAS)(not)
// &&(ET)(and)
// ||(OU)(or)

// getElementById() permet de récupérer un objet Element représentant l’élément 
// Sélectionnez le formulaire avec l'ID 'ageForm' et ajoutez un écouteur d'événements pour 
document.getElementById('ageForm').addEventListener('submit', function(event) {
    // Empêchez le comportement par défaut du formulaire de se produire
    event.preventDefault();//event.preventDefault() est utilisée pour empêcher le comportement par défaut d’un événement. Lorsqu’un événement (comme un clic de souris ou une soumission de formulaire) se produit, le navigateur effectue généralement une action par défaut associée à cet événement (par exemple, suivre un lien ou recharger la page).
    let ageUtilisateur = document.getElementById('ageInput').value;

    // Vérifier si l'âge est un nombre valide et s'il est supérieur ou égal à 0
    if (!isNaN(ageUtilisateur) && ageUtilisateur !== null && parseInt(ageUtilisateur) >= 0) {
    // l’expression !isNaN est utilisée pour vérifier si une valeur n’est pas un nombre (NaN).
    //  Si la valeur fournie n’est pas un nombre, !isNaN renverra true, sinon elle renverra false.
    // ParseInt Convertir l'entrée de l'utilisateur en un nombre entier
        ageUtilisateur = parseInt(ageUtilisateur);

        const resultat = verifyAge(ageUtilisateur);
        console.log(resultat);
    } else {
        alert("Veuillez entrer un âge valide (nombre positif).");
    }
});

function verifyAge(age) {
    const estMajeur = age >= 18;
    const message = alert(estMajeur ? "Vous êtes majeur" : "Vous êtes mineur") ;
    return message;
}


// ageUtilisateur ? verifyAge(age)===18 : ageUtilisateur ;
// console.log(message);

// const ageUtilisateur = 20;

// switch n'est pas nécessairement le choix le plus approprié lorsque vous devez vérifier si une condition est vraie ou fausse. Le switch est plus adapté lorsque vous avez plusieurs valeurs distinctes à comparer.

// Dans ce cas, vous vérifiez simplement si l'utilisateur est majeur ou mineur en fonction de son âge, ce qui peut être fait plus directement avec une simple condition if-else ou un opérateur ternaire.

// Cependant, si vous souhaitez utiliser switch pour des raisons de clarté ou de structure du code, vous pouvez l'adapter de cette manière :

// javascript
// Copy code
// let ageUtilisateur;

// while (true) {
//     ageUtilisateur = prompt('Veuillez saisir votre âge : ');

//     if (!isNaN(ageUtilisateur) && ageUtilisateur !== null) {
//         ageUtilisateur = parseInt(ageUtilisateur);
//         break;
//     } else {
//         alert("Veuillez entrer un âge valide.");
//     }
// }

// function verifyAge(age) {
//     return age >= 18 ? "majeur" : "mineur";
// }

// const resultat = verifyAge(ageUtilisateur);

// switch (resultat) {
//     case "majeur":
//         console.log("Vous êtes majeur");
//         break;
//     case "mineur":
//         console.log("Vous êtes mineur");
//         break;
//     default:
//         alert("Une erreur est survenue lors de la vérification de l'âge.");
// }

