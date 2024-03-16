// Ecrire la fonction "isPalindrome(word)" qui test si un mot(chaine de caractere) est un palindrome. Si word n'est pas un palindrome (ou pas une chaine de caractere) alors retourner false
// - avec un for
// - avec un while


const palindrome1 = "kayak";
const palindrome2 = "ressasser";

// Vérification du palindrome 1 avec une boucle while
let reversedPalindrome1 = palindrome1.split('').reverse().join('');
while (reversedPalindrome1 !== palindrome1) {
    console.log(palindrome1 + " n'est pas un palindrome");
    break;
}
console.log(palindrome1 + " est un palindrome");

// Vérification du palindrome 2 avec une boucle for
let isPalindrome2 = true;
for (let i = 0; i < palindrome2.length / 2; i++) {
    if (palindrome2[i] !== palindrome2[palindrome2.length - 1 - i]) {
        isPalindrome2 = false;
        break;
    }
}
if (isPalindrome2) {
    console.log(palindrome2 + " est un palindrome");
} else {
    console.log(palindrome2 + " n'est pas un palindrome");
}


// let mot1 = "kayak";
// let mot2 = "ressasser";

// function estPalindrome(mot) {
//     let motInverse = mot.split('').reverse().join('');
//     return mot === motInverse;
// }

// console.log(mot1 + (estPalindrome(mot1) ? " est un palindrome" : " n'est pas un palindrome"));
// console.log(mot2 + (estPalindrome(mot2) ? " est un palindrome" : " n'est pas un palindrome"));







// function name(palindrome1) {
//     let p=0;
//     for (let i=0; i<palindrome1.length
//         // if (typeof palindrome1 === "string") {
//         p=palindrome1.split('')
//     if (typeof palindrome1!== "string") {
//         p=palindrome1.split('')

//         } 
    
//     for (i= 0; i< palindrome1.length ; i++) {
//         // if (typeof World === "string") {
//         palindrome1 = i+1
//         // }
//     } 
// }
    

// const palindrome1 = "kayak";
// const palindrome2 = "ressasser";
// while (palindrome1.split('').reverse().join('')!== "k") {
    
//         console.log(palindrome1 + " est un palindrome");
//         break;
        
// } 
// array.forEach(palindrome2){  
//     if (palindrome2.split('').reverse().join('')!== palindrome2[index]) {
//         console.log(palindrome2 + " est un palindrome");
//         break;
//     }
// }



// for (let index = 0; index < array.length; index++) {
//     const element = array[];
//     if (isPalindrome(element)) {
//         console.log(element + " est un palindrome");
//     } else {
//         console.log(element + " n'est pas un palindrome");
//     }    
// }

// function isPalindrome(str) {
//     const reversedStr = 
//     // Converti la chaîne en minuscules et supprime les caractères non alphanumériques
//     str.split('')
//     // "kayak".split('') renvoie ["k", "a", "y", "a", "k"].
//     .reverse()
//     // ["k", "a", "y", "a", "k"].reverse() renvoie ["k", "a", "y", "a", "k"]
//     .join('');
//     //renvoie "kayak"

//     return str === reversedStr ;
//     // compare la chaîne de caractères originale à la chaîne de caractères inversée
// } 
// //Si elles sont identiques, cela signifie que la chaîne de caractères est un palindrome, donc la fonction renvoie true. Sinon, elle renvoie false.
// console.log(isPalindrome(palindrome1)); // true
// console.log(isPalindrome(palindrome2)); // true
