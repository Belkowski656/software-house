gsap.registerPlugin(ScrollTrigger);

const statementBox = document.querySelector('.statement__box-left');
const statementText = document.querySelector('.statement__text');

gsap.from(statementBox, {
    x: "-=200",
    opacity: 0,
    scrollTrigger: {
        trigger: '.statement',
        duration: 1,
        start: '150% bottom',
    }
});

gsap.from(statementText, {
    x: "+=200",
    opacity: 0,
    scrollTrigger: {
        trigger: '.statement',
        duration: 1,
        start: '150% bottom',
    }
});

const whatWeDoBoxs = document.querySelectorAll('.what-we-do__box');

whatWeDoBoxs.forEach(box => {
    gsap.from(box, {
        y: '+=100',
        opacity: 0,
        scrollTrigger: {
            trigger: box,
            duration: 1,
            start: 'bottom bottom',
        }
    })
});

const howItWorks = document.querySelector('.how-it-works__box-wrapper');

gsap.from(howItWorks.children, {
    opacity: 0,
    duration: 1,
    stagger: .4,
    scrollTrigger: {
        trigger: howItWorks,
        start: 'bottom bottom',
    }
})

const testimonials = document.querySelector('.testimonials__wrapper');

gsap.from(testimonials.children, {
    opacity: 0,
    duration: 1,
    stagger: .4,
    scrollTrigger: {
        trigger: testimonials,
        start: 'center bottom',
    }
})