let btnDelete = document.querySelectorAll('.btn-delete');
btnDelete.forEach(function(btn) {
    btn.addEventListener('click',function(){
        document.getElementById("modal-confirm").setAttribute("href","delete.php?id = " +btn.getAttribute("data-id"));
        document.getElementById("modal-delete").style.display ="block";
    });//pour un boutton on peut utiliser le location 
});
/////////////////////////delete button
document.getElementById("modal-cancel").addEventListener('click',function(){
    document.getElementById("modal-delete").style.display = "none";
});
///////////////////////// a voir le closet en js pour peux etre remonter un element pour la recherche en modifiant le +btn.closest("tr").getAttribute("data-id"));