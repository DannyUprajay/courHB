function changeB(idColor) {
    let color = document.querySelector('.blocL')
    color.style.background = 'url(img/can_bleue.png) no-repeat center center';
}

function changeJ(idColor) {
    let color = document.querySelector('.blocL')
    color.style.background = 'url(img/can_jaune.png) no-repeat center center';
}

function changeR(idColor) {
    let color = document.querySelector('.blocL')
    color.style.background = 'url(img/can_rouge.png) no-repeat center center';
}

function changeV(idColor) {
    let color = document.querySelector('.blocL')
    color.style.background = 'url(img/can_verte.png) no-repeat center center';
}


let text = document.querySelector('p')
let champ = document.querySelector("#textCanette");
champ.onkeyup = ecrire;
function ecrire() {
    text.innerHTML = champ.value;
}

let positionGauche = document.querySelector('.blocL');
console.log(positionGauche)
let posX = 0;
let posY = 0;

function gauche() {
    posX -= 10;
    text.style.left = posX + 'px';
}

function droite() {
    posX += 10;
    text.style.left = posX+ 'px';
}
function haut() {
    posY -= 10;
    text.style.top = posY + 'px';
}
function bas() {
    posY += 10;
    text.style.top = posY + 'px';
}
function arial() {
    text.style.fontFamily = 'Arial, Helvetica, sans-serif';
}

function verdana() {
    text.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif';
}

function courrier() {
    text.style.fontFamily = `'Courier New', Courier, monospace`;
}

function noir() {
    text.style.color = 'black';
}
function blanc() {
    text.style.color = 'white';
}
function bleu() {
    text.style.color = 'blue';
}
function jaune() {
    text.style.color = 'yellow';
}
function rouge() {
    text.style.color = 'red';
}
function vert() {
    text.style.color = 'green';
}

let x = 0;
function plus() {
    x += 1;
    text.style.fontSize = x + 'rem'
}
function moins() {
    x -= 1;
    text.style.fontSize = x + 'rem'
}