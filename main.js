const form = document.querySelector("#reservation");
const reservationResults = document.querySelector(".reservation__results");
const resetBtn = document.querySelector("#reset");

const createCards = (arr) => {
    arr.forEach((el) => {
        const divEl = document.createElement("div");
        divEl.classList.add("result__item");
        divEl.innerHTML = `
                <div class="result__top">
                    <div class="result__dest">
                        <div class="result__from">${el.from}</div>
                        <span>-</span>
                        <div class="result__to">${el.to}</div>
                    </div>
                    
                    <div class="result__price">${el.price} euros</div>
                </div>
                <div class="result__bottom">
                    <div class="result__date">${el.date}</div>
                    <div class="result__time">${el.time} h</div>
                </div>
            `;
        reservationResults.append(divEl);
    });
    reservationResults.classList.remove("hidden");
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const departCity = form.elements["departCity"].value;
    const arriveCity = form.elements["arriveCity"].value;
    const departDate = form.elements["departDate"].value;

    fetch("./tickets.json")
        .then((res) => res.json())
        .then((data) => createCards(data))
        .catch((err) => {
            console.log(err);
        });
});

resetBtn.addEventListener("click", (e) => {
    e.preventDefault();
    reservationResults.classList.add("hidden");
    reservationResults.innerHTML = "";
    form.reset();
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
        trenitaliaCompteur: trenitaliaCompteur,
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

/**
 * Modal functionality
 * Lenny
 */

// Trouve le modal
const modal = document.querySelector(".modal");
// Trouve tout les butons de reservation
// Je vois que c'est pas un button, mais quand meme on a le class 'reserver'
const btns = document.querySelectorAll(".reserved");

// pour chaque button ajoute un evenement
btns.forEach((btn) => {
    // Quand on click faire qq chose
    btn.addEventListener("click", () => {
        // ajoute class "active" sur modal
        modal.classList.add("active");
    });
});

const btnCloseModal = document.querySelector(".btnCloseModal");
// trouve le button pour fermer le modal
// C'est juste un button et a cause de ca t'utilise querySelector (pas "all")

btnCloseModal.addEventListener("click", () => {
    modal.classList.remove("active");
});

function scrollTo(className) {
    let element = document.querySelector("." + className);
    if (element) {
        element.scrollIntoView();
    }
}

let selectedElem = document.getElementById("prestataires");
selectedElem.addEventListener("change", function () {
    let selectedValue = this.value;
    scrollTo(selectedValue.toLowerCase());
});

/*

function scrollingTop(element) {
    let element = document.getElementByClassName("boutonScrolling");
    element.addEventListener('mouseover', (event) => {
        let selectedValue = this.value;
        scrollingTop(selectedValue)
    });;
    
} */

// function scrollingTop(change) {
//     change = document.getElementsByClassName("boutonScrolling");
//     change.addEventListener("mouseover", function () {
//         change.setAttribute("src", "./img/boutonScrolling2.png");
//     });
// }

// Get the button:
let mybutton = document.querySelector(".boutonScrolling");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "flex";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

mybutton.addEventListener("click", () => {
    topFunction();
});
