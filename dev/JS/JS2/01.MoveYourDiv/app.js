document.addEventListener('DOMContentLoaded', () => {
    // Ciblage des éléments d'interaction
    const $btn = document.querySelector('#moveDiv');
    const $div = document.querySelector('.red');
    const $modal = document.querySelector('.modal');
    const $btnModal = document.getElementById('hideModal')
    // Variable temporaire
    let clickCount = 0
    // Écouteur du btn : carré
    $btn.addEventListener('click', function () {
      // Détermine si on a déjà fait un tour ou pas
      if (clickCount > 3) {
        // Si oui, on reset à 0
        clickCount = 0
      }
      // On incrément pour passer à l'étape suivante
      clickCount++
      // Logique du mouvement
      moveDiv($div, $modal, clickCount)
    })
    // Écouteur du btn : modale
    $btnModal.addEventListener('click', () => {
        // On cache la modale et le fond
        $modal.classList.remove('active')
        document.body.classList.remove('modal-active')
    })
})
// Function externalisant la logique de déplacement
function moveDiv(div, modal, clickCount) {
  // Selon la position
    switch (clickCount) {
        case 1:
            // Si on a deja fait un tour, on cache la modal
            modal.classList.remove('active')
            document.body.classList.remove('modal-active')
            // On deplace le carré à droite 0 -> 90%
            div.style.marginLeft = '90%'
            break;
        case 2:
            div.style.marginTop = '250px'
            break;
        case 3:
            div.style.marginLeft = '0'
            break;
        default:
            div.style.marginTop = '0'
            modal.classList.add('active')
            document.body.classList.add('modal-active')
            break;
    }
}