function court() {
    console.log("VITE VITE");
}
/*

// DECLARATION D'OBJET v1
let superman = new Object();

// PROPRIETES / ATTRIBUT / CARACTERISTIQUE / VARIABLE LIEES A UN OBJET
superman.prenom = "Clark";
superman.nom = "Kent";
superman.genre = "Homme";

// METHODES / ACTION / FONCTION LIEE A UN OBJETS
superman.voler = function(){ 
    console.log("VERS L'INFINIIIIII"); 
};
superman.courir = court;

// DECLARATION D'OBJET v2 (JSON : JAVASCRIPT OBJECT NOTATION)
let superman = {
    prenom: "Clark",
    nom: "Kent",
    genre: "Homme",
    voler: function () {
        console.log("VERS L'INFINIIIIII");
    },
    courir:court // equivaut à : court
};

// DECLARATION D'OBJET v3 (AVEC UNE FONCION)
// USINE A SUPERMAN (AVOIR PLUSIEURS SUPERMAN)
function Kryptonien(prenom_,nom_,genre_) { 
    this.prenom = prenom_;
    this.nom = nom_;
    this.genre = genre_;
    this.voler = function(){
        console.log("VERS L'INFINIIIIII");
    };
    this.courir = court;
}

// ON INSTANCIE superman ET superman2, DE TYPE Kryptonien (ON PASSE COMMANDE A L'USINE)
let superman = new Kryptonien("Clark", "Kent", "Homme");
let superman2 = new Kryptonien("Janett", "Kent", "Femme");

// DECLARATION D'OBJET V4 (AVEC class - ES6)
class Extraterreste {
    constructor(planete_,ville_) {
        this.planete = planete_;
        this.ville = ville_;
    }
}

class Kryptonien extends Extraterreste {
    constructor(prenom_, nom_, genre_) {
        super("Krypton", "Kryptonville");
        this.prenom = prenom_;
        this.nom = nom_;
        this.genre = genre_;
    }
    voler() {
        console.log("VERS L'INFINIIIIII");
    }
    courir() {
        console.log("VITE VITE");
    }
}

let superman = new Kryptonien("Clark", "Kent", "Homme");
let superman2 = new Kryptonien("Janett", "Kent", "Femme");

// UTILISATION
console.log(superman);
console.log(superman2); // à activer que pour la v3 et v4
console.log(superman.prenom);
console.log(`Il s'agit de ${superman.prenom} ${superman.nom}`);
console.log("Il s'agit de " + superman.prenom + " " + superman.nom);
superman.voler();
superman.courir();

*/

// EXO 1
// Ecrire une fonction qui prend un objet comme argument et renvoie une chaîne qui représente une personne. 
// Les attributs de la personne devront être extraits des trois propriétés de l’objet: nom / prenom / age.
// La chaîne doit avoir le format suivant: PRENOM NOM a AGE ans.
// ex : afficherPersonne({nom:"Dupont",prenom:"Thomas", age:"25"}) // retourne Thomas Dupont a 25 ans. 

// a
// class Personne{
//     constructor(prenom_,nom_,age_){
//         this.prenom=prenom_;
//         this.nom=nom_;
//         this.age=age_;
//     }
// }
// let personne = new Personne("Thomas","Dupont","25");

// b
// function Personne(prenom_,nom_,age_){
//     this.prenom=prenom_;
//     this.nom=nom_;
//     this.age=age_;
// }
// let personne = new Personne("Thomas","Dupont","25");

// c
let personne = { nom: "Dupont", prenom: "Thomas", age: "25" };

let phrase = afficherPersonne(personne);
console.log(phrase);

function afficherPersonne(personne) {
    return `${personne.prenom} ${personne.nom} a ${personne.age} ans`;
}
// d
// function formatPrs(personne) {
//     return `${personne.prenom} ${personne.nom} a ${personne.age} ans.;`
// }
// console.log(formatPrs({ nom: "Dupont", prenom: "Thomas", age: "25", }));

// EXO 2
// Ecrire une fonction qui convertit du snake_case en camelCase. Exemple : gros_serpent -> grosSerpent

function transf(chaine) {
    let newChaine = '';
    for (let i = 0; i < chaine.length; i++) {
        if (chaine[i] === '_') {
            i++;
            if (i < chaine.length) {
                newChaine += chaine[i].toUpperCase();
            }
        } else {
            newChaine += chaine[i];
        }
    }
    return newChaine;
}

console.log(transf('salut_tout_le_monde'));




// EXO 3
// Écrire une fonction qui renvoie l’extension d'un nom de fichier passé en paramètre. Exemple : fichier.txt // retourne txt 

//a
// function extensionType(chaine2) {
//     let newChaine2 = '';
//     for (let i = 0; i < chaine2.length; i++) {
//         if (chaine2[i] == '.') {
//             newChaine2 = chaine2.slice(i + 1);
//             return newChaine2;
//         }
//     }
// }

// console.log(extensionType('fichier.txt'));


//b
let fichier = "monfichier.txt";
console.log(getExtension(fichier)); // txt

function getExtension(nomFichier){
    let extension = "";
    let positionPoint = nomFichier.indexOf(".");
    extension = nomFichier.slice(positionPoint+1);
    return extension;
}