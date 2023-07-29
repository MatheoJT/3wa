// **********************************************************************************
// ********************************* Classe Slate ***********************************
// **********************************************************************************
import { configure } from "./pen.js";
/*
  Rôle : Gérer toutes les inter-actions entree le user et le canvas
  - les informations liées au canvas (balise canvas, le context de celui-ci, ...)
  - les évènements de la souris (up, down, move, leave)

  Déclaration des variables utiles pour la gestion de l'ardoise
  Suggestion :
    - slate => canvas représentant le canvas de l'ardoise, de manière à pouvoir en récupérer son context et donc pouvoir travailler avec
    - context => cette variable contient toutes les variables de gestion du canvas ardoise
    - currentLocation => position de la souris à un instant T (coordonnées dans un petit objet {x, y} )
    - markIfImDrawingOrNot => boolean
    - pen => cette variable contient toutes les variables de gestion du 'crayon'
*/
const slate = {
  canvaDom: null,
  context: null,
  currentLocation: { x: 0, y: 0 },
  isDrawing: false,
  pen: null
}

function initSlate(pen) {
  // Récupération du <canvasSlate>
  slate.canvaDom = document.querySelector('#slate')
  // Récupération du contexte du canvas
  slate.context = slate.canvaDom.getContext('2d')
  // Au début on ne sait pas où se trouve la souris ? x:0,y:0
  slate.currentLocation = {
    x: 0,
    y: 0
  }
  // Au début on ne dessine pas : false
  slate.isDrawing = false
  slate.pen = pen

  // Installation des gestionnaires d'évènements de l'ardoise. 4 d'events de souris (move, leave, up, down)
  slate.canvaDom.addEventListener('mousedown', onMouseDown)
  slate.canvaDom.addEventListener('mouseup', onMouseUp)
  slate.canvaDom.addEventListener('mouseleave', onMouseUp)
  slate.canvaDom.addEventListener('mousemove', onMouseMove)
}

// Méthode de récupération des coordonnées `{x,y}` de la souris relative à l'ardoise (cf. mdn getBoundingClientRect)
function getMouseLocation(event) {
  // Récupération des coordonnées de l'ardoise.
  const rect = slate.canvaDom.getBoundingClientRect();

  // Création d'un objet contenant les coordonnées `{x,y}` de la souris relative à l'ardoise.
  // Renvoi de la position
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}

// Méthode de nettoyage de l'ardoise
function clear() {
  // Effacement de tout le contenu de l'ardoise. dynamiquement => pas de valeur en dure
  slate.context.clearRect(0, 0, slate.canvaDom.width, slate.canvaDom.height)
}

// Gestionnaire d'évènement d'appui sur un bouton de la souris.
function onMouseDown(event) {
  // On peut dessiner sur l'ardoise.
  slate.isDrawing = true
  // Enregistrement de la position actuelle de la souris.
  slate.currentLocation = getMouseLocation(event)
  console.log(slate);
}

// Gestionnaire d'évènement de sortie de l'ardoise par la souris.
// Attention au doublon avec mouseup
// function onMouseLeave() {
//   // On ne peut plus dessiner sur l'ardoise.
//   slate.isDrawing = false
// }

// Gestionnaire d'évènement de relachement d'un bouton de la souris.
function onMouseUp() {
  // On ne peut plus dessiner sur l'ardoise.
  slate.isDrawing = false
}

// Gestionnaire d'évènement de déplacement de la souris sur l'ardoise.
function onMouseMove(event) {
  // Récupération de la position actuelle de la souris, dans une variable temporaire. (à l'aide de getMouseLocation)
  const moveTo = getMouseLocation(event)
  // Est-ce qu'on peut dessiner sur l'adoise ? (if i'm drawing or not)
  if (slate.isDrawing) {
    // Préparation de l'ardoise à l'exécution d'un dessin. j'appel la configuration du pen
    configure(slate.context)
    // Début du dessin.
    slate.context.beginPath()
    // Dessine un trait entre les précédentes coordonnées de la souris et les nouvelles.(moveTo, lineTo)
    slate.context.moveTo(slate.currentLocation.x, slate.currentLocation.y)
    slate.context.lineTo(moveTo.x, moveTo.y)
    // Fin du dessin.
    slate.context.stroke()
    // Applique les changements dans le canvas.
    slate.context.closePath()
    // Enregistrement de la nouvelle position de la souris. pour eviter la rosace
    slate.currentLocation = moveTo
  }

}

export { initSlate, clear }