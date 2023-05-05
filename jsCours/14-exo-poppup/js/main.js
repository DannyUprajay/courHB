function fermerPopups() {
    let popups = document.querySelectorAll(".popup");
    popups.forEach(function (popup) {
        popup.style.display = "none";
    });
}

// function clic() {
//     fermerPopups();
//     let visible = document.querySelector("#popup1");
//     visible.style.display = "block";
// }

// function clicoff(btClose) {
//     let hidden = btClose.parentNode;
//     hidden.style.display = "none";
// }
// function clic2() {
//     fermerPopups();

//     let visible = document.querySelector("#popup3");
//     visible.style.display = "block";
// }

// function clicoff2() {
//     let hidden = document.querySelector("#popup3");
//     hidden.style.display = "none";
// }

// v2
let bt = document.querySelector("a");
bt.onclick = function (e) {
    afficherPopup('popup1');
};

// v1 ou v2
function afficherPopup(idPopup) {
    let popup = document.querySelector("#" + idPopup);
    // ex si idPopup = "popup1" =>  let popup = document.querySelector("#popup1");
    popup.style.display = "block";
}

function fermerPopup(btClose) {
    let popup = btClose.parentNode;
    popup.style.display = "none";
}