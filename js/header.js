const h2 = document.querySelector('.header__h2');
const p = document.querySelector('.header__p');
const btn = document.querySelector('.header__btn');
const box = document.querySelector('.header__box');

const slides = [{
        h2: 'Proccessing',
        p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi modi vel ducimus delectus sed corporis!',
        btn: 'Read More',
    },
    {

        h2: 'Consultations',
        p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi modi vel ducimus delectus sed corporis!',
        btn: 'Read More',
    },
    {

        h2: 'Innovations',
        p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi modi vel ducimus delectus sed corporis!',
        btn: 'Read More',
    },
];

let index = 0;

const changeSlide = () => {
    index++;
    if (index === slides.length) index = 0;
    h2.textContent = slides[index].h2;
    p.textContent = slides[index].p;
    btn.textContent = slides[index].btn;
};

setInterval(changeSlide, 12000);