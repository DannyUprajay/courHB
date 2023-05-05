// ETAPE 1 : faire la balle en HTML/CSS, qui est par exemple un div qui contient un input text
let input = document.querySelector('#text');
let boule = document.querySelector('#compteur');
let answer = document.querySelector('#answer');
let answers = ["oui","good job",'tu es flingué','lol'];

function maj(){
    let p = getRandomNumber(0, 3);
    answer.innerHTML = `${answers[p]}`;
}

function getRandomNumber(min, max) {
    return Math.max(min, Math.round(Math.random() * max));
}
// ETAPE 2 : répondez à la question : quand-est ce que l'interface doit être modifiée ?
// déduisez-en l'évènement à écouter et placer cet écouteur
onkeyup = function (e) {
    maj()
    console.log(e.key);
    if (e.key == 'Enter') {
        input.style.display = 'none';
        answer.style.display = 'block';
    }
    if (e.key == ' ') {
        input.style.display = 'block';
        answer.style.display = 'none';
        location.reload()
    }
}

// ETAPE 3 : répondez à la question : qu'est-ce qui doit être modifié dans l'interface ?
// déduisez-en la sélection à faire correspondant à l'élément que vous souhaiterez modifier

// ETAPE 4 : procéder à la modification de l'interface, au moment juste, et grâce à la sélection faite
// votre but ici est d'afficher une réponse

// ETAPE 5 : faire en sorte que chaque réponse soit aléatoire, par exemple en utilisant un tableau
// et Math.random() et Math.round()

// ETAPE 6 : détection de la touche espace et rechargement de l'interface avec location.reload()