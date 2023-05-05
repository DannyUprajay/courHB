let icone = document.querySelector("i");
icone.className = "bi bi-reception-1";
icone.style.color = "red";

function majForce(balise) {
    // faible
    icone.className = "bi bi-reception-1";
    icone.style.color = "red";
    if (balise.value.length > 3 && balise.value.length <= 6) {
        // moyen
        icone.className = "bi bi-reception-2";
        icone.style.color = "orange";
    } else if (balise.value.length > 6) {
        if (isStrongPwd(balise.value) == true) {
            // très fort
            icone.className = "bi bi-reception-4";
            icone.style.color = "purple";
        } else {
            // juste fort
            icone.className = "bi bi-reception-3";
            icone.style.color = "lime";
        }
    }
}

function isStrongPwd(chaine) {
    let re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    return re.test(chaine);
}