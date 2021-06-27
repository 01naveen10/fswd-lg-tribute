const darkMode = document.querySelector(".dark-mode");
const navBar = document.querySelector(".navbar");
const keyNotes = document.querySelector(".key-notes");
const ended = document.querySelector(".ended");
const customAccordion = document.querySelectorAll(".custom-accordion");
const card = document.querySelectorAll(".card");
const body = document.body;
const formControl = document.querySelector(".form-control");

darkMode.addEventListener("click", function() {
    navBar.classList.toggle("bg-dark");
    navBar.classList.toggle("navbar-dark");
    navBar.classList.toggle("bg-light");
    navBar.classList.toggle("navbar-light");
    darkMode.classList.toggle("btn-outline-light");
    darkMode.classList.toggle("btn-dark");
    body.classList.toggle("dark-body");
    keyNotes.classList.toggle("dark-key-notes");
    keyNotes.classList.toggle("key-notes");
    ended.classList.toggle("ended");
    ended.classList.toggle("dark-key-notes");
    formControl.classList.toggle("text-area-bg");

    for (let i = 0; i < customAccordion.length; i++) {
        customAccordion[i].classList.toggle("custom-accordion");
        customAccordion[i].classList.toggle("dark-custom-accordion");
    }
    for (let i = 0; i < card.length; i++) {
        card[i].classList.toggle("bg-dark");
        card[i].classList.toggle("text-light");
    }
});