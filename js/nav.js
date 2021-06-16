const burger = document.querySelector('.nav__burger-box');
const list = document.querySelector('.nav__list');
const beforeMenuElement = document.querySelector('.header__line');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');

burger.addEventListener('click', () => {
    burger.classList.toggle('nav__burger-box--active');
    list.classList.toggle('nav__list--active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.toggle('nav__burger-box--active');
        list.classList.toggle('nav__list--active');
    })
})

document.addEventListener('scroll', () => {
    if (scrollY >= beforeMenuElement.offsetHeight) {
        nav.classList.add('scrolled');

    } else {
        nav.classList.remove('scrolled');

    }

});