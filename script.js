const intro = document.querySelector(".intro");

setTimeout(() => {

    intro.style.transition = "opacity 1.5s ease";
    intro.style.opacity = "0";

    setTimeout(() => {

        intro.style.display = "none";

    }, 1500);

}, 9000);
/* ============================= */
/* FLIP CARDS */
/* ============================= */

const flipCards = document.querySelectorAll(".flip-card");

flipCards.forEach(card => {

    card.addEventListener("click", () => {

        card.classList.toggle("flipped");

    });

});