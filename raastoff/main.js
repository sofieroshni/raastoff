const menu_btn = document.querySelector('.hamburger');
const mobile_menu=document.querySelector('.mobile-nav');
menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});


/*erklærer en konstant variabel med navnet menu_btn.*/

/*document.querySelector('.hamburger') finder HTML-element med klassen 'hamburger' og tildeler det til menu_btn.*/

/*menu_btn.addEventListener('click', function () { ... }) tilføjer en eventlistener til 'menu_btn'-elementet, der reagerer på et klik.
Når 'menu_btn' klikkes på, udføres funktionen, der følger.*/

/*menu_btn.classList.toggle('is-active') skifter tilstanden af klassen 'is-active' på 'menu_btn'-elementet.
Hvis klassen ikke er anvendt, tilføjer det den; hvis den allerede er anvendt, fjerner den den.*/
