let zone1 = document.querySelector("#zone1");
let zone2 = document.querySelector("#zone2");


zone1.style.background = "white url(img/animal1.jpg) no-repeat center center";

let images = [
    { chemin: "img/animal1.jpg", nom: "reda", prix: 200, type: "animaux" },
    { chemin: "img/animal2.jpg", nom: "reda", prix: 200, type: "animaux" },
    { chemin: "img/animal3.jpg", nom: "reda", prix: 200, type: "animaux" },
    { chemin: "img/animal4.jpg", nom: "animal4", prix: 200, type: "animaux" },
    { chemin: "img/paysage1.jpg", nom: "paysage1", prix: 100, type: "paysages" },
    { chemin: "img/paysage2.jpg", nom: "paysage2", prix: 100, type: "paysages" },
    { chemin: "img/paysage3.jpg", nom: "paysage3", prix: 100, type: "paysages" },
    { chemin: "img/paysage4.jpg", nom: "paysage4", prix: 100, type: "paysages" },
    { chemin: "img/personne1.jpg", nom: "personne1", prix: 300, type: "personnes" },
    { chemin: "img/personne2.jpg", nom: "personne2", prix: 300, type: "personnes" },
    { chemin: "img/personne3.jpg", nom: "personne3", prix: 300, type: "personnes" },
    { chemin: "img/personne4.jpg", nom: "personne4", prix: 300, type: "personnes" },
];

let choixImages = document.querySelector("#zone2");
let description = document.querySelector('.description');

function genererImage(chemin, type) {
    let newImg = document.createElement("img");
    newImg.setAttribute("src", chemin);
    newImg.setAttribute("alt", "image");
    newImg.className = "imgElement " + type;
    choixImages.appendChild(newImg);


    newImg.onclick = function (e) {
        let balise = e.target;
        let cheminBalise = balise.getAttribute("src");

        images.forEach(function (image, i) {
            if (image.chemin == cheminBalise) {
                description.innerHTML = `<h2> Nom </h2>
                <p> ${image.nom} </p>
          <h2> Catégorie </h2>
          <p> ${image.type} </p>                  
          <h2> Prix </h2>
          <p> ${image.prix}$</p>
        `
            }
        });

        zone1.style.background = `white url(${cheminBalise}) no-repeat center center`;
    };
}

images.forEach(function (image, i) {
    genererImage(image.chemin, image.type);
});

function majFiltre(select) {
    let typeChoisi = select.value;

    let tousLesElements = document.querySelectorAll(".imgElement");
    cacherElements(tousLesElements);

    let elementsChoisis = document.querySelectorAll("." + typeChoisi);
    afficherElements(elementsChoisis);
}

function cacherElements(elements) {
    elements.forEach(function (element, i) {
        element.style.display = "none";
    });
}

function afficherElements(elements) {
    elements.forEach(function (element, i) {
        element.style.display = "block";
    });
}