/**
 * Créer ici le projet bonus de calculatrice.
 */

let firstName = window.prompt("Entrez votre Prènom:", "Steve");
let lastName = window.prompt("Entrez votre Nom:", "Jobs");
let birth = new Date(window.prompt("Entrez votre date de naissance:", "19/08/1900"));
let today = new Date();

console.log(`Salut ${firstName} ${lastName}, cette année tu à ` + (today.getFullYear()-birth.getFullYear()) + ` ans !`)