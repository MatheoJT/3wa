// **********************************************************************************
// ********************************* Code Principal *********************************
// **********************************************************************************
import { initProgram, start } from "./functions/program.js";
/*
 * Installation d'un gestionnaire d'évènement déclenché quand l'arbre DOM sera
 * totalement construit par le navigateur.
 *
 * Le gestionnaire d'évènement est une fonction anonyme que l'on donne directement à jQuery.
 */

// Création puis démarrage de l'application.

// 1 Initialisation du projet (chef d'orchestre)
// Reconnaitre les acteurs du programme
initProgram()

// 2 Écoute des actions de l'utilisateur (click : couleur, taille, gomme)
// Donner la possibilité à l'utilisateur d'effectuer des actions
start()