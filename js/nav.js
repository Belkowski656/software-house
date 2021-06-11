const burger = document.querySelector('.nav__burger-box');
const list = document.querySelector('.nav__list');

burger.addEventListener('click', () => {
    burger.classList.toggle('nav__burger-box--active');
    list.classList.toggle('nav__list--active');
})