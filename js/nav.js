const burger = document.querySelector('.nav__burger');
const menu = document.querySelector('.nav__menu');
const blure = document.querySelector('.blure');

burger.addEventListener('click', () => {
    menu.classList.toggle('nav__menu--active');
    blure.classList.add('blure--active');
});

blure.addEventListener('click', () => {
    menu.classList.remove('nav__menu--active');
    blure.classList.remove('blure--active');
})