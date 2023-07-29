// **********************************************************************************
// ********************************* Classe Pen *************************************
// **********************************************************************************
/*
  Rôle : référencer 2 informations concernants la mine du crayon (souris))
    - la couleur
    - la taille (épaisseur du trait de la souris)
    - congfigure - Convertir les propriétés (color, size), en donnée exploitable par le canvas

  Déclaration des variables utiles pour la gestion du 'crayon'
  Suggestion :
    - color => cette variable contient la couleur sous forme d'une `String`
        -- valeur par defaut : 'black'
    - size => cette variable contient l'épaisseur du 'crayon' sous forme d'un `Number`
        -- valeur par defaut : 1
*/
const penObj = {
  color: null,
  size: null
}

// 1 - bis
function initPen() {
  penObj.color = 'black'
  penObj.size = 1

  return penObj
}

/**
 * Méthode de préparation de l'ardoise à l'exécution d'un dessin avec le 'crayon'
 * Ici on dit au context de prendre en compte la couleur et la taille du 'crayon'
 *
 * @param {CanvasContext} contextArdoise
 */
function configure(contextArdoise) {
  // Mise à jour des propriétés de dessin de l'ardoise.
  // StrokeStyle -> couleur tracé
  contextArdoise.strokeStyle = penObj.color
  contextArdoise.lineWidth = penObj.size
}

export { initPen, configure }