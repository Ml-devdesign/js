// Sélection des éléments du DOM
const btnSuccess = document.querySelector("#btnSuccess");
const btnError = document.querySelector("#btnError");
const container = document.querySelector("#toasterContainer");

// Fonction pour supprimer une notification
const removeToast = (el) => {
    // Ajoute une classe pour cacher la notification
    el.classList.add("hidden");
    // Supprime l'élément après un délai de 500 millisecondes
    setTimeout(() => {
        el.remove();
    }, 500);
};

// Fonction pour créer une notification
const createToast = (typeOfToast, text) => {
    // Crée un nouvel élément div
    const div = document.createElement("div");
    // Ajoute les classes "toast" et la classe spécifique pour le type de notification
    div.classList.add("toast", typeOfToast);
    // Définit le texte de la notification, ou utilise le type de notification s'il n'y a pas de texte spécifié
    div.innerHTML = text ?? typeOfToast;
    // Applique une couleur de texte blanche
    div.style.color = "white";
    // Ajoute la notification au conteneur
    container.append(div);
    // Retourne la notification créée
    return div;
};

// Événement lors du clic sur le bouton de succès
btnSuccess.addEventListener("click", () => {
    // Crée une notification de succès avec un message spécifique
    const div = createToast("success", "Succès! Votre action a été effectuée avec succès.");
    // Planifie la suppression de la notification après 1,5 secondes
    setTimeout(() => removeToast(div), 1500);
});

// Événement lors du clic sur le bouton d'erreur
btnError.addEventListener("click", () => {
    // Crée une notification d'erreur avec un message spécifique
    const div = createToast("error", "Erreur! Une erreur s'est produite lors de l'exécution de votre action.");
    // Planifie la suppression de la notification après 3 secondes
    setTimeout(() => removeToast(div), 3000);
});
