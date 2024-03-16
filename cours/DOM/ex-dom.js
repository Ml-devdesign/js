-- Sélection d'éléments :

// Récupérer un élément par son ID
let elementById = document.getElementById("monElement");

// Récupérer des éléments par leur classe
let elementsByClassName = document.getElementsByClassName("maClasse");

// Récupérer des éléments par leur balise
let elementsByTagName = document.getElementsByTagName("div");

// Sélectionner un élément avec un sélecteur CSS
let elementByQuerySelector = document.querySelector(".monElement");

// Sélectionner tous les éléments correspondant à un sélecteur CSS
let elementsByQuerySelectorAll = document.querySelectorAll(".maClasse");

-- Création d'éléments :


// Créer un nouvel élément div
let newDiv = document.createElement("div");

// Créer un nœud de texte
let newText = document.createTextNode("Contenu du texte");

-- Manipulation du contenu :

// Modifier le contenu HTML d'un élément
elementById.innerHTML = "<p>Nouveau contenu HTML</p>";

// Modifier le contenu texte d'un élément
elementById.textContent = "Nouveau texte";

// Modifier la valeur d'un élément d'entrée
let inputElement = document.getElementById("monInput");
inputElement.value = "Nouvelle valeur";

-- Manipulation de style :


// Modifier la propriété de style d'un élément
elementById.style.color = "red";

// Ajouter une classe à un élément
elementById.classList.add("nouvelleClasse");

// Supprimer une classe d'un élément
elementById.classList.remove("ancienneClasse");

// Alterner la présence d'une classe sur un élément
elementById.classList.toggle("classeAToggler");

-- Manipulation de classe :


// Vérifier si un élément a une classe spécifiée
let hasClass = elementById.classList.contains("maClasse");

// Remplacer une classe par une autre
elementById.classList.replace("ancienneClasse", "nouvelleClasse");

-- Manipulation des attributs :


// Définir la valeur d'un attribut sur un élément
elementById.setAttribute("attribut", "valeur");

// Récupérer la valeur d'un attribut spécifié sur un élément
let attrValue = elementById.getAttribute("attribut");

// Supprimer un attribut spécifié sur un élément
elementById.removeAttribute("attribut");

-- Manipulation de parenté :


// Ajouter un nœud comme dernier enfant d'un nœud parent spécifié
parentElement.appendChild(newDiv);

// Insérer un nœud avant un nœud enfant spécifié
parentElement.insertBefore(newDiv, referenceElement);

// Supprimer un nœud enfant spécifié du nœud parent
parentElement.removeChild(childElement);

-- Événements :


// Ajouter un gestionnaire d'événements à un élément
elementById.addEventListener("click", function() {
    // Actions à effectuer lors du clic sur l'élément
});

// Supprimer un gestionnaire d'événements attaché à un élément
elementById.removeEventListener("click", function() {
    // Actions à supprimer lors du clic sur l'élément
});