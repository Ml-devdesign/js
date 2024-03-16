// GESTION DES OPÉRATIONS ASYNCHRONES EN JAVASCRIPT
// CALLBACKS

// Un callback en JavaScript est simplement une fonction qui est passée comme argument à une autre fonction. 
// Les callbacks sont souvent utilisés pour gérer des opérations qui prennent du temps, 
// comme les requêtes réseau, les lectures de fichiers, etc. 
// Voici un exemple pour illustrer cela :

function operationAsynchrone(callback) {
    setTimeout(function() {
        // Simulation d'une opération asynchrone prenant du temps
        let resultat = "Résultat de l'opération asynchrone";
        callback(resultat); // Appel du callback avec les données
    }, 2000); // Attendre 2 secondes avant d'appeler le callback
}

// Utilisation de la fonction asynchrone avec un callback
operationAsynchrone(function(resultat) {
    console.log(resultat); // Affiche "Résultat de l'opération asynchrone"
});

// Dans cet exemple, operationAsynchrone simule une opération asynchrone à l'aide de setTimeout 
// et appelle ensuite le callback une fois que l'opération est terminée.


// PROMISES
// Une Promise est un objet qui représente l'achèvement ou l'échec éventuel d'une opération asynchrone, 
// et sa valeur résultante. Elle est utilisée pour effectuer des traitements asynchrones 
// de manière plus claire et concise que les callbacks. 
// Voici un exemple :

let maPromise = new Promise((resolve, reject) => {
    // Simulation d'une opération asynchrone
    setTimeout(() => {
        let resultat = "Résultat de l'opération asynchrone";
        resolve(resultat); // Résoudre la promesse avec les données
    }, 2000); // Attendre 2 secondes avant de résoudre la promesse
});

// Utilisation de la Promise avec les méthodes then() et catch()
maPromise.then((resultat) => {
    console.log(resultat); // Affiche "Résultat de l'opération asynchrone"
}).catch((erreur) => {
    console.error(erreur); // Affiche l'erreur en cas d'échec
});

// Dans cet exemple, maPromise représente une opération asynchrone qui sera résolue après 2 secondes. 
// La méthode then() est utilisée pour traiter le succès de la promesse, tandis que la méthode catch() 
// est utilisée pour gérer les erreurs éventuelles.
// FONCTIONS ASYNCHRONES (ASYNC/AWAIT)

// Les fonctions asynchrones (async/await) sont une façon plus récente et plus simple d'écrire du code asynchrone en JavaScript. 
// Elles permettent d'écrire du code asynchrone de manière synchrone, ce qui le rend plus lisible et plus facile à comprendre. 
// Voici un exemple :
async function getData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Une erreur est survenue : ', error);
    }
}
// Dans cet exemple, la fonction getData utilise les mots-clés async pour indiquer qu'elle contient du code asynchrone, et await pour attendre que la promesse retournée par fetch soit résolue. 
// Cela simplifie grandement la gestion des opérations asynchrones.
|
|-- CALLBACKS
// |      - Fonction passée en tant qu'argument à une autre fonction.
// |      - Utilisé pour gérer les opérations asynchrones.
// |      - Exemple :
|            function asyncFunction(callback) {
|                setTimeout(function() {
|                    // Simulation d'une opération asynchrone prenant du temps
|                    let data = "Résultat de l'opération asynchrone";
|                    callback(data); // Appel du callback avec les données
|                }, 2000); // Attendre 2 secondes avant d'appeler le callback
|            }
|            // Appel de la fonction asynchrone avec un callback
|            asyncFunction(function(result) {
|                console.log(result); // Affiche "Résultat de l'opération asynchrone"
|            });
|
|-- PROMISES // Plus utiliser pour les appplication Web
// |      - Objet représentant l'état d'une opération asynchrone.
// |      - Permet de gérer le succès ou l'échec d'une opération asynchrone.
// |      - Syntaxe : new Promise((resolve, reject) => { /* code asynchrone */ });
|      - Méthodes : 
|          - then() : Gère le cas où la promesse est résolue avec succès.
|          - catch() ; Gère le cas où la promesse est rejetée.
|
|-- FONCTIONS ASYNCHRONES (ASYNC/AWAIT)
    //    - Syntaxe permettant de gérer les opérations asynchrones de manière synchrone.
    //    - Utilise les mots-clés "async" pour déclarer une fonction asynchrone et "await" pour attendre la résolution d'une promesse à l'intérieur de cette fonction.
       - Exemple :
             async function getData() {//permet exemple sur un formulaire la validation de la creation d'un id unique en passant par le serveur 
                 try {
                     let response = await fetch('https://api.example.com/data');//Get data from server and return data object in JSON format for display purposes 
                     let data = await response.json();
                     return data;
                 } catch (error) {
                     console.error('Une erreur est survenue : ', error);
                 }
             }