'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/

const $launchBtn = document.getElementById('firing-button');
const $displayFrame = document.querySelector('span');
const $rocketImg = document.getElementById('rocket');

let isStarted = false;
let counter = 10;
let scheduler;

/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

function loadRocket() {
    $launchBtn.removeEventListener('click', loadRocket);
    $launchBtn.classList.add('disabled');

    $rocketImg.src = './images/rocket2.gif';
    $displayFrame.innerHTML = 10;

    scheduler = window.setInterval(startTimer, 1000);
}

function startTimer() {
    $displayFrame.innerHTML = --counter;
    if(counter <= 0) launchRocket();
}

function launchRocket() {
    window.clearInterval(scheduler);
    $rocketImg.src = './images/rocket3.gif'
    $rocketImg.classList.add('tookOff');
}


/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

window.addEventListener('load', function() {
    $launchBtn.addEventListener('click', loadRocket);
})
