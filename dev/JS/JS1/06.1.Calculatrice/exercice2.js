/**
 * Créer ici le projet bonus de calculatrice.
 */

const val1 =  parseInt(window.prompt("Entrez un premier nombre:", 0));
const ope = window.prompt("Entrez un opérateur:", "+");
const val2 =  parseInt(window.prompt("Entre un deuxième nombre:", 0));

function calcul(n1, n2, operator) {
    switch (operator) {
        case '+':
            return n1+n2;
        
        case '-':
            return n1-n2;
            
        case '*':
        case 'x':
            return n1*n2;
            
        case '/':
            return n1/n2;
            
        case '^':
            return n1**n2;
        
        default:
            return `Opérateur introuvable (${operator})`;
    }
}



let calc = calcul(val1, val2, ope);
window.alert(isNaN(calc) ? `Votre calcul est invalide (${val1}${ope}${val2}=${calc})` : `Résulat: ${val1}${ope}${val2}=${calc}`);

