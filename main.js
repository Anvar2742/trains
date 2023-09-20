const form = document.querySelector("form");
//import fs from "./fs";
//console.log(fs);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const prenom = form.elements["prenom"].value;
    const email = form.elements["email"].value;
    const fastest = form.elements["fastest"].value;
    const sncf_year = form.elements["sncf_year"].value;
    const france_year = form.elements["france_year"].value;
    const avis = form.elements["avis"].value;

    const user = {
        prenom,
        email,
        answers: {
            fastest,
            sncf_year,
            france_year,
        },
        avis,
    };

    console.log(user);
});


function selectionCompteur() {
    const selectElement = document.getElementById("prestataires");

    let sncfCompteur = 0;
    let thalysCompteur = 0;
    let ouiGoCompteur = 0;
    let eurostarCompteur = 0;
    let tgvCompteur = 0;
    let trenitaliaCompteur = 0;

    for (let i = 0; i < selectElement.options.length; i++) {
        let option = selectElement.options[i];

        if (option.selected) {
            if (option.value === "sncf") {
                sncfCompteur++;
            } else if (option.value === "thalys") {
                thalysCompteur++;
            } else if (option.value === "ouigo") {
                ouiGoCompteur++;
            } else if (option.value === "eurostar") {
                eurostarCompteur++;
            } else if (option.value === "tgv") {
                tgvCompteur++;
            } else if (option.value === "trenitalia") {
                trenitaliaCompteur++;
            }
        }
    }

    return {
        sncfCompteur: sncfCompteur,
        thalysCompteur: thalysCompteur,
        ouiGoCompteur: ouiGoCompteur,
        eurostarCompteur: eurostarCompteur,
        tgvCompteur: tgvCompteur,
        trenitaliaCompteur: trenitaliaCompteur
    };
}

const selectElement = document.getElementById("prestataires");
selectElement.addEventListener("change", function () {
    const compteur = selectionCompteur();
    console.log("SNCF choisi " + compteur.sncfCompteur + " fois");
    console.log("THALYS choisi " + compteur.thalysCompteur + " fois");
    console.log("OUIGO choisi " + compteur.ouiGoCompteur + " fois");
    console.log("Eurostar choisi " + compteur.eurostarCompteur + " fois");
    console.log("TGV choisi " + compteur.tgvCompteur + " fois");
    console.log("Trenitalia choisi " + compteur.trenitaliaCompteur + " fois");
});