// **********************************************************************************
// ********************************* Classe Program *********************************
// **********************************************************************************
import { initPen } from "./pen.js";
import { initSlate, clear } from "./slate.js";
/*
  Rôle : donner au user la possibilité de :
    - changer la couleur
    - changer la taille (épaisseur du trait de la souris)
    - vider le contenu du <canvas>

  Déclaration des variables utiles pour la gestion de l'ardoise
  Suggestion :
    - pen => cette variable contient toutes les variables de gestion du 'crayon' (pen)
*/
let pen // undefined => {color:'black', size:1}

// 1 - bis Reconnait les acteurs crayon et le canvas
function initProgram() {
  // Init crayon (souris) renvoi un obj semblable a penObj
  pen = initPen() // objet {color:'black', size:1}
  // Init slate (canvas dans lequel on va travailler)
  initSlate(pen)
}

/**
 * Gestionnaire d'évènement de clic pour sélectionner une couleur de crayon prédéfinie
 *
 * @param {MouseEvent} event
 */
function onClickPenColor(event) {
  // console.log(event.target.dataset.color);
  // Dans un callback 'this' => représente la balise html qui a déclenchée l'event
  // Récupération de la <div> qui a déclenché l'évènement. `this`

  // Récupération de l'attribut HTML5 data-color, pour l'affecter à la couleur du crayon
  /*
    Astuces :
    - VanillaJS : propriété dataset
  */
  pen.color = this.dataset.color
}

/**
 * Gestionnaire d'évènement de clic pour changer la taille du crayon
 *
 * @param {MouseEvent} event
 */
function onClickPenSize(event) {
  // Récupération du <button> qui a déclenché l'évènement. `this`
  // Récupération de l'attribut HTML5 data-size.
  // Idem que pour color, dans 'onClickPenColor'
  pen.size = this.dataset.size
}

// Méthode appelée au démarrage de l'application.
function start() {
  // Installation des gestionnaires d'évènements des outils.
  // Btn clear
  const $clearBtn = document.getElementById('tool-clear-canvas')
  // Listen click gomme
  $clearBtn.addEventListener('click', clear)

  // Installation des gestionnaires d'évènements de configuration du crayon.
  // Btn color
  const $colors = document.querySelectorAll('.pen-color') // NodeList
  // Loop
  $colors.forEach((colorDiv) => {
    colorDiv.addEventListener('click', onClickPenColor)
  })
  // Btn size
  const $sizes = document.querySelectorAll('.pen-size') // NodeList
  // Loop
  $sizes.forEach((sizeBtn) => {
    sizeBtn.addEventListener('click', onClickPenSize)
  })

}

export { initProgram, start }