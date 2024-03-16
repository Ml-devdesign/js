// Gestion de l'événement "mousedown" sur l'élément square
square.onmousedown = function(event) {
  // (1) Préparation au déplacement : définir la position absolue et en haut par z-index
  square.style.position = 'absolute';
  square.style.zIndex = 1000;

  // Déplacer l'élément hors de tout parent actuel directement dans le body
  // pour le positionner par rapport au body
  document.body.append(square);

  // Centre le carré aux coordonnées (pageX, pageY)
  function moveAt(pageX, pageY) {
      square.style.left = pageX - square.offsetWidth / 2 + 'px';
      square.style.top = pageY - square.offsetHeight / 2 + 'px';
  }

  // Déplace notre carré positionné absolument sous le pointeur
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) Déplacer le carré lors du mouvement de la souris
  document.addEventListener('mousemove', onMouseMove);

  // (3) Lâcher le carré, supprimer les gestionnaires non nécessaires
  square.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    square.onmouseup = null;
  };
};

// Déplacement jaune de la souris

const squareEl = document.querySelector('.square2');
let intervalId = 0;
let position = 0;
const STEP = 10;

// Ajouter un décalage à la position de l'élément
function addOffset() {
  position += STEP;
  squareEl.style.left = position + 'px';
}

// Fonction pour démarrer le déplacement du carré
function moveSquare2() {
  if (intervalId) return; // Si le déplacement est déjà en cours, ne rien faire
  intervalId = setInterval(addOffset, 50); // Démarre un intervalle pour ajouter le décalage
}

// Fonction pour supprimer l'intervalle de déplacement
function removeInterval() {
  clearInterval(intervalId);
  intervalId = 0;
}

// Fonction pour arrêter le déplacement du carré
function stopMoveSquare() {
  removeInterval(); // Supprime l'intervalle de déplacement
}

// Écouteurs d'événements pour démarrer et arrêter le déplacement du carré
square2.addEventListener('mouseenter', moveSquare2); // Démarrer le déplacement lorsque la souris survole
square2.addEventListener('mouseleave', stopMoveSquare); // Arrêter le déplacement lorsque la souris quitte
