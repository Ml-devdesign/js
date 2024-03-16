const listeMots = ["Gredin", "Mécréant", "Vilain", "Sauvage"]
const score = 0
let result = prompt("Le Mot et : " + listeMots[score])

// if (score === 0 , score < listeMots , score++ ) {
//     result = prompt("Le Mot et : " + listeMots[score])
// }

// switch (result) {
    if (listeMots.includes(result)) {
        console.log("ok")
    }else {
        console.log("Erreur")
    }
