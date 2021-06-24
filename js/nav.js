const burger = document.querySelector('.nav__burger');
const menu = document.querySelector('.nav__menu');
const blure = document.querySelector('.blure');
const navBox = document.querySelector('.nav__box');
const navLinks = document.querySelectorAll('.nav__link');

burger.addEventListener('click', () => {
    menu.classList.toggle('nav__menu--active');
    blure.classList.toggle('blure--active');
});

blure.addEventListener('click', () => {
    menu.classList.remove('nav__menu--active');
    blure.classList.remove('blure--active');
})

window.addEventListener('scroll', () => {
    if (window.scrollY >= 45) {
        navBox.classList.add('scrolled');
    } else {
        navBox.classList.remove('scrolled');
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('nav__menu--active');
        blure.classList.remove('blure--active');
    })
})