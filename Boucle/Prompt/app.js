//condition 
//let = True if the condition is true console.log
// let motTapeOk = true

// if (motTapeOk) {
//     console.log("Le mot est correct")
// } 
//
const motApplication = "application"
let motUtilisateur = prompt("Entrez un mot :" + motApplication)
//confirm //alert
if (motUtilisateur === motApplication) {
    console.log("Le mot est correct")
} else {//affiche dans la console (inspecte)
    console.log("Le mot n'est pas correct")
}

if (motUtilisateur === motApplication) {
    console.log("Bravo !")
} else {
    if (motUtilisateur === "Gredin") {
        console.log("Restez correct !")
    } else {
        if (motUtilisateur === "Mécréant") {
            console.log("Restez correct !")
        } else {
            if (motUtilisateur === "Vilain") {
                console.log("Soyez gentil !")
            } else {
                console.log("Vous avez fait une erreur de frappe.")
            }
        }
    }
}