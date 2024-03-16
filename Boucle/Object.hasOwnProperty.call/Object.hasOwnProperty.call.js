// Il semble que vous ayez deux boucles for...in qui parcourent un objet table, 
// mais vous n'utilisez pas les propriétés tr ou element dans le corps de la boucle.

// Si votre objectif est de parcourir toutes les propriétés de l'objet table, 
// vous pouvez simplement utiliser une seule boucle for...in. Voici comment vous pourriez l'implémenter :


for (const key in table) {
    if (Object.hasOwnProperty.call(table, key)) {
        const value = table[key];
        // Utilisez key et value comme vous le souhaitez ici
    }
}

// Dans cette boucle, key représente le nom de la propriété actuelle de l'objet table,
//  et value représente la valeur associée à cette propriété.

// Assurez-vous d'utiliser hasOwnProperty pour vérifier si la propriété appartient réellement à l'objet,
//  pour éviter de parcourir les propriétés héritées de la chaîne de prototype.