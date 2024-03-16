const btnGenerator = document.querySelector("#btnGenerator");
const container = document.querySelector("#divContainer");

//Fonction pour cree un element div
const creatdiv = (typeOfdiv, text) => {
    // Crée un nouvel élément div
    const div = document.createElement("div");
    // Ajoute les classes "container" et la classe spécifique pour le type de notification
    div.classList.add("container", typeOfdiv);
    // Définit le texte de la notification, ou utilise le type de notification s'il n'y a pas de texte spécifié
    div.innerHTML = text ?? typeOfdiv;
    // Ajoute le <div> en tant qu'enfant de l'élément parent
    container.append(div)
    return div;
   
}

var i;
btnGenerator.addEventListener("click", () => {
    // Crée une notification d'erreur avec un message spécifique
    const div = creatdiv("ICI", "Ajoute les données d'une BDD .");
    for( i = 0 ; i < 10 ; i++ ){
    const div = creatdiv['value' ];
        // Planifie la suppression de la notification après 3 secondes
    }
});
