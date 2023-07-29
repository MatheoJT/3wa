


document.addEventListener('DOMContentLoaded', () => {

    const $helloBtn = document.getElementById('hello');
    const $backgroundBtn = document.getElementById('backgound');
    const $hideBtn = document.getElementById('hide');
    const $bottomBtn = document.getElementById('bottom');
    const $roundBtn = document.getElementById('round');
    
    const squares = document.getElementsByClassName("red");

    
    let hasHello = false;
    $helloBtn.addEventListener('click', () => {
        squares[0].innerHTML = hasHello ? "1" : "1 - Hello";
        hasHello = !hasHello;
    })
    
    
    let isGreen = false;
    $backgroundBtn.addEventListener('click', () => {
        squares[1].style.backgroundColor = isGreen ? "darkred" : "green";
        isGreen = !isGreen;
    })
    
    
    let isHide = false;
    $hideBtn.addEventListener('click', () => {
        squares[2].hidden = !isHide;
        isHide = !isHide;
    })
    
    
    let isAtBottom = false;
    $bottomBtn.addEventListener('click', () => {
        squares[3].style.marginTop = isAtBottom ? "1%" : "200px";
        isAtBottom = !isAtBottom;
    })
    
    
    let isRound = false;
    $roundBtn.addEventListener('click', () => {
        squares[4].style.borderRadius = isRound ? "0px" : "30px";
        isRound = !isRound;
    })
    
})
