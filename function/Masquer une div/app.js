// Attend que le DOM soit chargé
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionne tous les boutons d'affichage
    const btnDisplay = document.querySelectorAll('.btnDisplay');

    // Pour chaque bouton d'affichage
    btnDisplay.forEach(function(button) {
        // Ajoute un écouteur d'événements au clic sur le bouton
        button.addEventListener('click', function() {
            // Récupère l'ID de la cible associée au bouton
            const targetId = button.getAttribute('data-target');
            // Affiche l'élément cible
            showElement(targetId);
        });
    });
});

// Fonction pour afficher un élément spécifique et masquer les autres
function showElement(targetId) {
    // Sélectionne tous les éléments à basculer
    const allDivs = document.querySelectorAll('.toggleElement');
    
    // Parcourt tous les éléments à basculer
    allDivs.forEach(function(div) {
        // Vérifie si l'élément correspond à la cible
        if (div.id === targetId) {
            // Affiche l'élément si c'est la cible
            div.style.display = 'block';
        } else {
            // Masque l'élément sinon
            div.style.display = 'none';
        }
    });
}



// document.addEventListener("DOMContentLoaded", function() {
//     const btnDisplay = document.querySelectorAll('.btnDisplay');

//     btnDisplay.forEach(function(button) {
//         button.addEventListener('click', function() {
//             const targetId = button.getAttribute('data-target');
//             showStuff(targetId);
//         });
//     });
// });

// function showStuff(targetId) {
//     const targetElement = document.getElementById(targetId);
//     if (targetElement) {
//         if (targetElement.classList.contains('hidden')) {
//             targetElement.classList.remove('hidden'); // Afficher l'élément
//         } else {
//             targetElement.classList.add('hidden'); // Masquer l'élément
//         }
//     } else {
//         console.error("Element with id '" + targetId + "' not found.");
//     }
// }









// const btnDisplay = document.querySelector("#btnDisplay");
// const showStuff = document.querySelector("showStuff");
// const divSubsides = dcument.querySelector("#divSubsides");
// // //Pour masquer les éléments de la div
// // document.getElementById(divSubsides).style.display =none;
// // //Pour afficher les element de la div
// // document.getElementById(divSubsides).style.display = "block";
// function showStuff( divSubsides,btnDisplay ) { 
//     const divSubsides = dcument.querySelector("#divSubsides");
//     btnDisplay.addEventListener("click", (e) => {
//         document.getElementById(divSubsides).style.display = "hidden";
//         document.getElementById(divSubsides).style.display = "visible";
//     });
// };
// console.log(e);
// console.log(showStuff)
// const btnDisplay = document.querySelector("btnDisplay");
// const divSubsides = document.querySelector("#divSubsides");

// function showStuff(divId) {
//     const divToToggle = document.querySelector(divId); // Sélectionner l'élément à afficher ou à masquer
//     if (divToToggle.style.display === "none" || divToToggle.style.display === "") {
//         divToToggle.style.display = "block"; // Afficher l'élément
//     } else {
//         divToToggle.style.display = "none"; // Masquer l'élément
//     }
// }

// btnDisplay.addEventListener("click", function() {
//     showStuff("#divSubsides"); // Passer l'ID de la div à afficher ou à masquer
// });