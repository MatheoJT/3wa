'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/

const $launchBtn = document.getElementById('firing-button');
const $cancelBtn = document.getElementById('cancel-button');
const $resetBtn = document.getElementById('reset-button');
const $displayFrame = document.querySelector('span');
const $rocketImg = document.getElementById('rocket');
const starsWeigth = ["tiny", "normal", "big"];

let counter = 10;
let scheduler;

/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

function loadRocket() {
    $launchBtn.removeEventListener('click', loadRocket)
    $cancelBtn.addEventListener('click', cancelLaunch);
    
    $cancelBtn.classList.remove('disabled');
    $launchBtn.classList.add('disabled');
    
    $rocketImg.src = './images/rocket2.gif';
    
    $displayFrame.innerHTML = counter;
    scheduler = window.setInterval(startTimer, 1000);
    
}



function cancelLaunch() {
    $cancelBtn.removeEventListener('click', cancelLaunch);
    $launchBtn.addEventListener('click', loadRocket)
    
    window.clearInterval(scheduler);
    
    $launchBtn.classList.remove('disabled');
    $cancelBtn.classList.add('disabled');
    
    
    $rocketImg.classList.remove('tookOff');
}



function startTimer() {
    $displayFrame.innerHTML = --counter;
    if(counter <= 0) {
        launchRocket();
        $cancelBtn.classList.add('disabled');
        $cancelBtn.removeEventListener('click', cancelLaunch);
    }
}



function launchRocket() {
    window.clearInterval(scheduler);
    $rocketImg.src = './images/rocket3.gif'
    $rocketImg.classList.add('tookOff');
}



function randomStarsBackground() {
    for(let i=0;i<151;i++) {
        const star = document.createElement('div');
        const yPos = Math.floor(Math.random() * 101) + '%';
        const xPos = Math.floor(Math.random() * 101) + '%';
        
        star.classList.add('star');
        star.classList.add(starsWeigth[Math.floor(Math.random() * starsWeigth.length)])
        
        star.style.left = xPos;
        star.style.top = yPos;
        
        document.body.appendChild(star);
    }
}


/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

window.addEventListener('load', function() {
    
    randomStarsBackground();
    $launchBtn.addEventListener('click', loadRocket);
    
    $resetBtn.addEventListener('click', function() {
        cancelLaunch();
        $displayFrame.innerHTML = '';
        counter = 10;
        $rocketImg.src = './images/rocket1.png';
    });
    
    $cancelBtn.classList.add('disabled');
    
})
