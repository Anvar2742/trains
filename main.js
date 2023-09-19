const form = document.querySelector("form");
import fs from "./fs";
console.log(fs);

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
