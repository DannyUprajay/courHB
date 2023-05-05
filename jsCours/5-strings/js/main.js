/*
let nom = "toto";
console.log(nom);
console.log(typeof nom);

let nom = new String('Toto'); // équivalent de : let nom = "toto"; // il précise new String juste pour la doc
console.log(nom);
console.log(nom.length);
console.log(nom.charAt(0));
console.log(nom.toUpperCase());
console.log(nom.replace("o","a"));



// Ecrire une fonction qui prend deux chaînes str1 et str2 et retourne TRUE si elles ont autant de caractères, sinon FALSE.

function stringTF(str1,str2){
    return str1.length == str2.length;
}

console.log(stringTF('aze','bdc'));
console.log(stringTF('aze','bdcd'));

// EXO 2 - Ecrire une fonction qui renvoie TRUE si une chaîne contient des espaces, sinon FALSE.
function stringSpace(str3) {
    // if (str3.includes(' ')) {
        //     return true;
    // } else {
    //     return false;
    // }
    return str3.includes(' ');

}

console.log(stringSpace('s'));
console.log(stringSpace('f '));

// EXO 3 - Ecrire une fonction qui renvoie le nombre de mots d'une chaine.

function nbmot(ch1) {
    // let compteur = ch1.split(' ');
    // return compteur;  
    let compteur = 0;

    for (let i = 0; i <= ch1.length - 1; i++) {
        if (ch1.charAt(i) == ' ') {
            compteur++;
        }
    }
    return compteur+1;
}

console.log(nbmot('salut ca va et toi'))



// EXO 4 - Ecrire une fonction qui prend une chaine et retourne la chaine inversée.

function returnChaine(ch2) {
    return ch2.split("").reverse().join("");
}

console.log(returnChaine('salut'));

// EXO 5 - Écrire une fonction qui renvoie TRUE si une chaine est un palindrome.
// Ex : BOB // true car se lit aussi à l'envers
function palindrome(ch3) {
    return ch3 == ch3.split("").reverse().join("");
}

console.log(palindrome('bob'));
console.log(palindrome('bodbs'));
*/

