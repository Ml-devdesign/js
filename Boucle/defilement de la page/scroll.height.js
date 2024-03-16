        if (document.documentElement.scrollTop === document.body.scrollHeight) {
            document.documentElement.scrollTop = document.body.scrollHeight;
            document.documentElement.scrollTop = 0;
            
        }
// La fin de la page dans le contexte de la gestion de défilement en JavaScript est définie par la valeur de la propriété scrollHeight 
// de l'élément <body> ou de l'élément <html> dans le DOM, en fonction du navigateur.

// La propriété scrollHeight représente la hauteur totale d'un élément, y compris le contenu qui n'est pas visible en raison du défilement. 
// Ainsi, lorsque la position de défilement vertical (scrollTop) atteint ou dépasse la valeur de scrollHeight, 
// cela signifie que vous avez atteint la fin de la page en descendant.