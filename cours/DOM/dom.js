// MÉTHODES DU DOM EN JAVASCRIPT  SYNTAXE JAVASCRIPT (DOM)

 -- SÉLECTION DÉLÉMENTS
       getElementById("id"); //: Renvoie l'élément HTML avec l'identifiant spécifié.
       getElementsByClassName("className"); //: Renvoie une collection d'éléments avec la classe spécifiée.
       getElementsByTagName("tag"); //: Renvoie une collection d'éléments avec le nom de balise spécifié.
       querySelector("selector"); //: Renvoie le premier élément qui correspond au sélecteur spécifié.
       querySelectorAll("selector"); //: Renvoie tous les éléments qui correspondent au sélecteur spécifié.

 -- CRÉATION DÉLÉMENTS
       createElement("tag"); //: Crée un nouvel élément HTML avec le nom de balise spécifié.
       createTextNode("text"); //: Crée un nouveau nœud de texte avec le texte spécifié.

 -- MANIPULATION DU CONTENU
       innerHTML = "new content"; //: Permet de définir ou de récupérer le contenu HTML d'un élément.
       textContent = "new text content"; //: Permet de définir ou de récupérer le contenu texte d'un élément.
       value = "new value"; //: Permet de définir ou de récupérer la valeur d'un élément d'entrée.

 -- MANIPULATION DE STYLE
       style.property = "value"; //: Permet de définir ou de récupérer la valeur d'une propriété de style CSS.
       classList.add("className"); //: Ajoute une classe à un élément.
       classList.remove("className");//: Supprime une classe d'un élément.
       classList.toggle("className"); //: Alterne la présence d'une classe sur un élément.

 -- MANIPULATION DE CLASSE
       classList.contains("className"); //: Vérifie si un élément a la classe spécifiée.
       classList.replace("oldClass", "newClass"); //: Remplace une classe par une autre sur un élément.

 -- MANIPULATION DES ATTRIBUTS
       setAttribute("attribute", "value"); //: Définit la valeur d'un attribut sur un élément.
       getAttribute("attribute"); //: Récupère la valeur d'un attribut spécifié sur un élément.
       removeAttribute("attribute"); //: Supprime un attribut spécifié sur un élément.

 -- MANIPULATION DE PARENTÉ
       appendChild(childElement); //: Ajoute un nœud comme dernier enfant d'un nœud parent spécifié.
       insertBefore(newElement, referenceElement); //: Insère un nœud avant un nœud enfant spécifié dans la liste des enfants d'un nœud parent.
       removeChild(childElement);//: Supprime un nœud enfant spécifié du nœud parent.

 -- ÉVÉNEMENTS
        addEventListener("event", function(){ /* action */ }); //: Attache un gestionnaire d'événements à un élément, sans écraser les gestionnaires d'événements existants.
        removeEventListener("event", function(){ /* action */ });//: Supprime un gestionnaire d'événements attaché à un élément.

