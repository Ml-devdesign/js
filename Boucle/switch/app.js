
const motApplication = "application"
let motUtilisateur = prompt("Entrez un mot :" + motApplication)
// confirm //alert

// switch (motUtilisateur) {
//     case motApplication:
//         alert("Bonjour " + motUtilisateur)
//         break;
//     default:
//         alert("Mot inconnu réessayer ulterieurement")
//         break;
// }
switch (motUtilisateur) {
    case motApplication:
       console.log("Bonjour Inconnue ")
       break;
    case "utilisateur":
        console.log("Bonjour utilisateur ")
        break;
    case "admin":
        console.log("Bonjour admin ")
        break;
    default:
        alert("Mot inconnu réessayer ulterieurement")
        break;
}