// console.log(1)

// let id = setTimeout(function() {
//         console.log(2)//execution du deux apres une seconde donc letape deux est traiter apres la second -> synchrone
//     }, 1000);
//     console.log(3)

document.getElementById("btn").addEventListener("click", function() {  
    fetch("script.html")
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
        document.body.innerHTML = data; // Permet l'affichage des balise html sur le html
    });

});
