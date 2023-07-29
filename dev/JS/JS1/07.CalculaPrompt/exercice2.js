/**
 * Créer ici le projet bonus de calculatrice.
 */

let val1 =  parseInt(window.prompt("Entrez un premier nombre:", 0));
const ope = window.prompt("Entrez un opérateur:", "+");
const val2 =  parseInt(window.prompt("Entre un deuxième nombre:", 0));

if(isNaN(val1) || isNaN(val2)) {
    window.alert("C'est pas des nombres")
    console.error("Not a Number");
}

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
document.write(isNaN(calc) ? `Le calcul est pas bon (${val1}${ope}${val2}=${calc})` : `Résulat: ${val1}${ope}${val2}=${calc}`);

