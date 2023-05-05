/*

// pop up 
alert("boo");

// Afficher dans la console
console.log('hello');
console.info('hello');
console.warn('hello');
console.error("hello");

// Afficher dans la page HTML
document.body.innerHTML='hello';
// le + pour afficher les deux messages
document.body.innerHTML +=' World';

// pop up avec 2 boutton qui retourne vrai et false et une conditon

var confirmation = confirm("Confirmez vous la suppression");
console.log(confirmation);

if (confirmation == true) {
    alert('données delete');
} else {
    alert("données pas delete");
}


// Demande l'age avec un prompt et une condition et on force le type Number
var age = Number (prompt("quel age avez vous ?"));

if (age >= 18) {
    console.log("majeur");
} else {
    console.log("mineur");
}

var ageNext = age + 1;

console.log(ageNext);

// opérateur de calcul
var i = 0;
i = i + 1;
i++;
i += 1;
console.log(i); 

// test
if (true) {
    // var nom = "toto"; // porté globale
    let nom = "toto"; //porté locale (limité)
}
console.log(nom);

//const 
const nom = 'salut';
nom = 'non'; //error 

// VAR : redéclaration possible, réaffectation possible, portée globale sauf si déclarée dans une fonction
// LET : redéclaration impossible, réaffectation possible, portée locale aux 1eres accolades où elle est déclarée
// CONST : redéclaration impossible, réaffectation impossible, portée locale aux 1eres accolades où elle est déclarée


//concatenations

let nom = "toto";

//let salutation = "BOnjour" + nom;

// let salutation = "BOnjour";
// salutation += nom;

let salutation = `Bonjour ${nom}`;//template strings 

console.log(salutation);


// switch jour de semaine
let numJour = 4;

switch (numJour) {
    case 1:
        var jour = "lundi";
        break;
    case 2:
        var jour = "mardi";
        break;
    case 3:
        var jour = "mercredi";
        break;
    case 4:
        var jour = "jeudi";
        break;
    case 5:
        var jour = "vendredi";
        break;
    default:
        var jour = "week-end";
        break;
}

console.log(jour);

let age = Number(prompt("Votre age svp ?"));

// v1
// if(age >= 18){
//     var message = "Accès autorisé";
// }else{
//     var message = "Accès non-autorisé";
// }

// v2
// if(age >= 18)
//     var message = "Accès autorisé";
// else
//     var message = "Accès non-autorisé";

// v3 (opérateur ternaire) 
// pratique dans le cas où on souhaite initialiser une variable à 2 valeurs possibles
var message = (age >= 18) ? "Accès autorisé" : "Accès non-autorisé";

console.log(message);

// Boucle FOR

//Incrémentation
for (var i = 0; i <= 5; i++) {
    console.log(i);
}

// Décrémentation 
for (var i = 5; i > 5; i--) {
    console.log(i);
}


// Boucle WHILE 
var i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// DO WHILE
var i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5)


for (var i = 1; i <= 5; i++) {
    if (i == 2) break; // sort de la boucle affiche : 1 
    if (i == 2) continue; // force l'itération suivante (prochaine boucle) affiche : 1 3 4 5
    console.log(i);
}


// FONCTIONS

// déclaration
function saluer(){
    console.log('Bonjour');
}

//appel
saluer();

//function avec valeur de retour
// déclaration
function getSalutation() {
    return "bonjour"; // en gros return te renvoi une valeur mais tu dois l'afficher ou tu veux en l'a déclarant à l'appel
}
//appel
// let salutation = getSalutation();
// console.log(salutation);
console.log(getSalutation());


// PASSAGE DE PARAMETRES/ARGUEMENTS et valeurs par defaut
// déclaration
function saluer(prenom, nom = "") { // valeur par defaut 
    // if (nom == undefined) nom = ""; // valeur par defaut 
    console.log('Bonjour ' + prenom + " " + nom);
}

//appel
saluer("totjo", 'titi');
saluer("toto");


// PORTE DES VARIABLES PAR RAPPORT AUX FONCTIONS

function maFonction() {
    var maVariableDeFonction = 1;
}

let maVariableDeFonction = 1;
maFonction();
console.log(maVariableDeFonction);


// FONCTIONS ANONYMES ET FONCTIONS FLECHEES
function saluer(prenom) {
    console.log("bonjour " +prenom);
} // V1 (fonction normale / nomée)

let saluer = function (prenom) { // v2 (fonction anonyme)
    console.log("bonjour " +prenom);
}

let saluer = (prenom) => { // v3 (fonction fléchée)
    console.log("bonjour " + prenom);
}


saluer('titi');

*/