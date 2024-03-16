// Exercice : Calcul de la somme de deux nombres
// Demandez à l'utilisateur de saisir deux nombres

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    let saisieUtilisateur = document.getElementById('input1').value && document.getElementById('input2').value;
    // Demande à l'utilisateur de saisir le premier nombre
    // let input1 = document.getElementById('input1').value;
    // Demande à l'utilisateur de saisir le deuxième nombre
    // let input2 = document.getElementById('input2').value;
    // Calculez la somme des deux nombres et affichez le résultat
    if (!isNaN(saisieUtilisateur) && saisieUtilisateur !== null && parseInt(saisieUtilisateur) >= 0){
        
        saisieUtilisateur = parseInt(saisieUtilisateur);
       //obligatoir pour la somme des deux nombres et affichez le résult d'ajouter un parsFloat
       // pour pouvoir additionner les deux nombre et ajoouter le value pour recuperer les valeur des input  
        const result = parseFloat(input1.value) + parseFloat(input2.value) ;
        const message = alert(`Le resultat de cette addition et de : ${result}`)  ;
        console.log(message);

    } else {
        alert("Veuillez entrer un nombre valide.");}
});  



    // Calcule la somme des deux nombres
    // Affiche le résultat
  











