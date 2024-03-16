

// créer des messages dynamiques en insérant des valeurs variables dans une chaîne de caractères

const mavariable2 = 42;
let mavariable = `Hello World!  ${mavariable2}`;
console.log(mavariable); 
// Dans ces exemples, les expressions entre ${} sont évaluées et insérées dans les chaînes de caractères.
// Les littéraux de modèle avec expressions sont très utiles pour créer des chaînes de caractères dynamiques, notamment lors de la construction de messages, d’URLs, de requêtes, etc. N’hésitez pas à les utiliser dans votre code JavaScript !


// Construction d’URLs 
// Les littéraux de modèle sont utiles pour construire des URLs avec des paramètres variables. 
// Lorsque vous travaillez avec des URLs (Uniform Resource Locators), vous devez souvent inclure des valeurs variables,
//  telles que des identifiants d’utilisateurs, des noms de produits, des paramètres de recherche, etc.
// Les littéraux de modèle vous permettent d’insérer facilement ces valeurs dans l’URL de manière dynamique.
// Par exemple :
// JavaScript

const baseUrl = 'https://example.com/api';
const endpoint = 'users';
const userId = 123;
const url = `${baseUrl}/${endpoint}/${userId}`;
console.log(url);
// Résultat : "https://example.com/api/users/123"

// Construction de requêtes
// Lors de la création de requêtes HTTP, vous pouvez utiliser des littéraux de modèle pour insérer des valeurs dans l’URL ou le corps de la requête. 
// Lorsque vous effectuez des requêtes HTTP (par exemple, avec fetch ou axios), vous devez spécifier l’URL de la requête.
// Les littéraux de modèle vous permettent d’ajouter des valeurs variables aux URLs de requête.
// Par exemple :
// JavaScript

const searchQuery = 'JavaScript';//searchQuery contient le terme de recherche (dans notre cas, “JavaScript”).
const apiUrl = 'https://api.example.com/search'; //apiUrl  est l’URL de base de l’API contient l’URL de la requête (dans notre cas, “https://api.example.com/search”).
const requestUrl = `${apiUrl}?q=${encodeURIComponent(searchQuery)}`;//requestUrl est construit en utilisant le littéral de modèle, où ${encodeURIComponent(searchQuery)} insère la valeur de searchQuery dans l’URL.
//Encodage des paramètres :
// Notez l’utilisation de encodeURIComponent(searchQuery) dans l’URL. Cela assure que le terme de recherche est correctement encodé pour être inclus dans l’URL.
// C’est important pour gérer les caractères spéciaux (comme les espaces ou les caractères réservés) dans les URLs.

console.log(requestUrl);
// Résultat : "https://api.example.com/search?q=JavaScript"