/**
 * Créer ici le projet bonus de calculatrice.
 */

let val1, ope, val2;
const opes = ["+", "-", "*", "x", "/", "÷", "^"];

do {
    val1 =  parseInt(window.prompt("Entrez un premier nombre:", 0));
    val2 =  parseInt(window.prompt("Entre un deuxième nombre:", 0));
}while(isNaN(val2) || isNaN(val1))

do {
    ope = window.prompt("Entrez un opérateur:", "+");
}while(!opes.include(ope))


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
        case '÷':
            if(n1 === 0 || n2 === 0) return "La division par 0 est impossible"
            return n1/n2;
            
        case '^':
            return n1**n2;
        
        default:
            return `Opérateur introuvable (${operator})`;
    }
}



let calc = calcul(val1, val2, ope);
document.write(isNaN(calc) ? `Il y a une erreur dans le calcul (${calc})` : `Résulat: ${val1}${ope}${val2}=${calc}`);

