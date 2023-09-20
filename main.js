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
