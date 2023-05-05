/*

// EX 1  ECRIRE UNE FONCTION QUI PREND UN NOMBRE ET RETOUNR "PAIR" OU "IMPAIR"


function pairImpair(nombre) {
    if (nombre % 2 == 0) {
        return `${nombre} = pair`;
        
    } else {
        return `${nombre} = impair`;
    }
}

function pairImpair(nombre) {  // v2 si y'a seulement deux conditions possible c'est bien de faire ça 
    return (nombre % 2 == 0) ? "pair" : "impair";
}

function pairImpair(nombre) {  // v3 return true or false 
    return (nombre % 2 == 0) ? true : false ;
}

function pairImpair(nombre) {  // v3.1 return true or false 
    return nombre % 2 == 0;
}

console.log(pairImpair(10));
console.log(pairImpair(17));
console.log(pairImpair(18));

// EX 2 ECRIRE UNE FONCTION QUI PREND 3 ENTIERS ET RETOURNE LE PLUS GRAND
function nbMax(nb1, nb2, nb3) {
    return Math.max(nb1, nb2, nb3);
}
console.log(nbMax(10, 22, 33));

// CORRECTION PROF

function max(a, b, c) {
    let nbMax = a;
    if (nbMax < b) nbMax = b;
    if (nbMax < c) nbMax = c;
    return nbMax;
}
console.log(max(1, 2, 3)); // 3
console.log(max(1, 3, 2)); // 3
console.log(max(3, 2, 1)); // 3


// EX 3 Ecrire une fonction qui prend des heures, minutes, et secondes en paramètres, et retourne le nombre total de secondes.

function second(heure,minutes,secondes){
    let heureSec = heure * 3600;
    let minuteSec = minutes * 60;
    let totalSecond = heureSec + minuteSec + secondes +'secondes';
    return totalSecond;
}

console.log(second(2,30,30));

//CORRECTION PROF 
function second(heure, minutes, secondes) {
    return heure * 3600 + minutes * 60 + secondes;
}

console.log(second(4, 30, 30));


// EX 4 CREER UNE FONCTION calculerAireCercle() QUI PREND UN RAYON EN PARAMETRE ET QUI AFFICHE l'AIRE DU CERCLE CORRESPONDANT

function calculerAireCercle(rayon){
    console.log(3.14 * rayon * rayon);
}

calculerAireCercle(4);


// EXO 5 : Ecrire une fonction qui prend un certain nombre de vaches et d'oiseaux, et retourne leur nombre de pattes.

function patte(vache, oiseaux){
    return vache * 4 + oiseaux * 2;
    
}

console.log(patte(2,3));


// EXO 6 - Ecrire une fonction qui prend une base et une hauteur de triangle en paramètre, 
// et retourne sa surface (base x hauteur / 2)

function surface(base, hauteur) {
    return (base * hauteur) / 2;
}
console.log(surface(5, 10
    ))
    
    // EXO 7 - Ecrire une fonction qui renvoie TRUE si un entier passé est divisible par 5, sinon FALSE. 
    // (utiliser par exemple modulo)
    
    function div5(nb) {
        return nb % 5 == 0;
    }
    
    console.log(div5(6));
    
    // EXO 8 - Ecrire une fonction qui prend 2 chaines et retourne une seule chaine en liant les 2.
    function contString(c1, c2) {
        return c1 + c2;
    }
    console.log(contString('abc', 'def'));
    
    // EXO 9 - Ecrire une fonction qui prend un nom (XXX) et le genre (H/F), et qui salue en conséquence
// ( ex : Bonjour Monsieur XXX / Bonjour Madame XXX)

function saluer(nom,genre="H"){
    let civilite;
    if(genre=="H")
        civilite = "Monsieur";
    else if(genre == "F")
        civilite = "Madame";
    else 
        civilite="";
    console.log("Bonjour "+civilite+" "+nom);
}

saluer("XXX","H");
saluer("XXX","F");
saluer("XXX","X");
saluer("XXX");
*/
