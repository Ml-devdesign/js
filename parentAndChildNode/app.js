// const parentEl = document.querySelector("#parent"); 
// console.log("childNodes", parentEl.childNodes); 
// console.log("childNodes[2]", parentEl.childNodes[2]);
// console.log("next element sibling", parentEl.childNodes[2].nextElementSibling); 
// console.log("children", parentEl.lastChild); console.log("name", parentEl.childNodes[3].name);
// console.log("childNode 2", parentEl.childNodes[2]); console.log("sibling", parentEl.childNodes[2].nextSibling);
// console.log("nextSibling", parentEl.childNodes[2].nextSibling); 
// console.log("lastElementChild", parentEl.lastElementChild); console.log("nodeName", parentEl.childNodes[1].nodeName); 
// console.log("parentNode", parentEl.childNodes[3].parentNode); console.log("nodeName", parentEl.childNodes[3].nodeName)

// ajout dun element depuis l'input
// pouvoir valider l'input 
// pouvoir associer l'input a qqun avec le select
// pouvoir associer l'input a une prioriter
// selon la prioriter ajouter la tache dans la bonne case 

// Sélection des éléments du DOM nécessaires
const input = document.querySelector("#input"); // Sélectionner l'élément d'entrée
const select = document.querySelector("#select"); // Sélectionner l'élément de sélection
const parentEl = document.querySelector("#parent"); // Sélectionner l'élément parent

// Gestionnaire d'événements pour l'élément d'entrée (input)
input.addEventListener("change", (e) => {// e => l'événement d'entrée dans select 
    // Afficher l'événement dans la console (pour vérification)
    console.log(e);
    
    // Création d'un nouvel élément <span>
    const span = document.createElement("span");
    // Création d'un nouvel élément <div>
    const div = document.createElement("div");
    
    // Définition du contenu HTML du <div> avec la valeur de l'élément d'entrée
    div.innerHTML = e.target.value;
    
    
    // Ajout du <div> en tant qu'enfant de l'élément parent
    parentEl.append(div);

    
    // Ajout d'un "X" en tant qu'enfant du <div> créé
    // span.innerHTML = "X"; 
    // div.appendChild(span);
    
    // Effacer la valeur de l'élément d'entrée
    input.value = "";

});

// Gestionnaire d'événements pour l'élément de sélection (select)
// select.addEventListener("change", (e) => {
//     // Afficher la nouvelle valeur de l'élément de sélection dans la console
//     console.log("Selected value:", e.target.value);
    
// });
