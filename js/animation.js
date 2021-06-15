gsap.registerPlugin(ScrollTrigger);
const headerContent = document.querySelector('.header__content');
const aboutBox = document.querySelector('.about__box');
const imgBox = document.querySelector('.about__img-box');
const chefs = document.querySelectorAll('.chefs__chef');

gsap.from(headerContent.children, {
    y: '+=100',
    opacity: 0,
    stagger: .1,
    duration: .5,
    ease: 'easeInOut',
});


gsap.from(aboutBox.children, {
    x: '-=100',
    opacity: 0,
    stagger: .1,
    duration: 1,
    ease: 'easeInOut',
    scrollTrigger: {
        trigger: aboutBox,
        start: 'center 90%',
    }
});

gsap.from(imgBox.children, {
    x: '+=100',
    opacity: 0,
    stagger: .1,
    duration: 1,
    ease: 'easeInOut',
    scrollTrigger: {
        trigger: imgBox,
        start: 'center 90%',
    }
});

gsap.from(imgBox.children, {
    x: '+=100',
    opacity: 0,
    stagger: .1,
    duration: 1,
    ease: 'easeInOut',
    scrollTrigger: {
        trigger: imgBox,
        start: 'center 90%',
    }
});

chefs.forEach(chef => {
    gsap.from(chef, {
        y: '+=100',
        opacity: 0,
        duration: 1,
        ease: 'easeInOut',
        scrollTrigger: {
            trigger: chefs[0],
            start: 'bottom bottom',
            markers: true,
        }
    });
})

// gsap.from(chef, {
//     y: '+=100',
//     opacity: 0,
//     duration: 1,
//     ease: 'easeInOut',
//     scrollTrigger: {
//         trigger: chefs[0],
//         start: 'bottom 90%',
//         markers: true,
//     }
// });