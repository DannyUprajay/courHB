/*
// TABLEAUX NUMERIQUES

// déclaration
let couleurs =  ["blue","red","green"]; // équivalent de : = new Array("blue","red","green");
couleurs[3] = "purple";
couleurs[couleurs.length] = "yellow";
couleurs.push("cyan");

// utilisation
console.log(couleurs.length);   // nb de cases
console.table(couleurs);        // OU console.log(couleurs);
console.log(couleurs[0],couleurs[1],couleurs[2],couleurs[3],couleurs[4],couleurs[5]);

// parcourt avec boucle for
for(let i=0;i<couleurs.length;i++){
    // console.log(i,couleurs[i]);
}

// parcourt avec boucle for in
for(let i in couleurs){
    // console.log(i,couleurs[i]);
}

// parcourt avec boucle for of // ca renvoie la valeur direct
for(let couleur of couleurs){
    // console.log(couleur);
}

// parcourt avec boucle forEach
couleurs.forEach(function(v,i){ 
    console.log(i,v); 
});

//TABLEAUX A 2 DIMENSIONS

// déclaration
let personne0 = [];
personne0[0] = "Alex";
personne0[1] = "Beaugrand";

let personne1 = [];
personne1[0] = "Michael";
personne1[1] = "Flannigan";

let personnes = [];
personnes[0] = personne0;
personnes[1] = personne1;

// utilisation
console.log(personnes);
console.table(personnes);
console.log(personnes[0][0]);
console.log(personnes[1][1]);

// TABLEAUX D'OBJETS

// TABLEAUX D'OBJETS

// déclaration v1
// let personne0 = {prenom:"Alex",nom:"Beaugrand"};
// let personne1 = {prenom:"Michael",nom:"Flannigan"};
// let personnes = [];
// personnes[0]=personne0;
// personnes[1]=personne1;

// déclaration v2
let personnes = [
    { prenom: "Alex", nom: "Beaugrand" },    // objet de la case 0
    { prenom: "Michael", nom: "Flannigan" }  // objet de la case 1
];

// utilisation
console.log(personnes);
console.table(personnes);
console.log(personnes[0].prenom); // OU console.log(personnes[0]["prenom"]);


// EXERCICE

// V1
let voiture0 = {marque:"Volvo",modele:"v40",couleur:"grise",prix:35000};
let voiture1 = {marque:"BMW",modele:"Z3",couleur:"noire",prix:55000};
let voiture2 = {marque:"Ferrari",modele:"F40",couleur:"rouge",prix:80000};
let voitures = [];
voitures[0]=voiture0;
voitures[1]=voiture1;
voitures[2]=voiture2;
console.table(voitures);

let total = 0;
voitures.forEach(function(voiture,i){
    console.log(voiture);
    document.body.innerHTML += "<h2>Voiture "+(i+1)+"</h2>";
    document.body.innerHTML += "<p>Marque : "+voiture.marque+"</p>";
    document.body.innerHTML += "<p>Modèle : "+voiture.modele+"</p>";
    document.body.innerHTML += "<p>Couleur : "+voiture.couleur+"</p>";
    document.body.innerHTML += "<p>Prix : "+voiture.prix+"€ </p>";
    total += voiture.prix;
});

document.body.innerHTML += "<h1>Total : "+total+"€ </h1>";

// V2
let voitures = [
    {marque:"Volvo",modele:"v40",couleur:"grise",prix:35000},
    {marque:"BMW",modele:"Z3",couleur:"noire",prix:55000},
    {marque:"Ferrari",modele:"F40",couleur:"rouge",prix:80000}
];
console.table(voitures);

let total = 0;
let html = "";
voitures.forEach(function(voiture,i){
    html += "<h2>Voiture "+(i+1)+"</h2>";
    html += "<ul>";
    html += "<li>Marque : "+voiture.marque+"</li>";
    html += "<li>Modèle : "+voiture.modele+"</li>";
    html += "<li>Couleur : "+voiture.couleur+"</li>";
    html += "<li>Prix : "+voiture.prix+"€ </li>";
    html += "</ul>";
    total += voiture.prix;
});

html += "<h1>Total : "+total+"€ </h1>";

document.body.innerHTML = html;
*/

// v3
let voitures = [
    {marque:"Volvo",modele:"v40",couleur:"grise",prix:35000},
    {marque:"BMW",modele:"Z3",couleur:"noire",prix:55000},
    {marque:"Ferrari",modele:"F40",couleur:"rouge",prix:80000}
];
console.table(voitures);

let total = 0;
voitures.forEach(function(voiture,i){
    document.body.innerHTML += `<div class="voiture">
                                    <h2>Voiture ${i+1}</h2>
                                    <ul>
                                        <li>Marque : ${voiture.marque}</li>
                                        <li>Modèle : ${voiture.modele}</li>
                                        <li>Couleur : ${voiture.couleur}</li>
                                        <li>Prix : ${voiture.prix}€ </li>
                                    </ul>
                                </div>`;
    total += voiture.prix;
});

document.body.innerHTML += `<h1>Total : ${total}€ </h1>`;