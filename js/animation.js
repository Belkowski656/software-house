const animations = () => {
    gsap.registerPlugin(ScrollTrigger);
    const headerContent = document.querySelector('.header__content');
    const aboutBox = document.querySelector('.about__box');
    const imgBox = document.querySelector('.about__img-box');
    const chefs = document.querySelectorAll('.chefs__chef');
    const specialityFood = document.querySelectorAll('.speciality__food');
    const specialityFeature = document.querySelectorAll('.speciality__feature');
    const form = document.querySelector('.contact__form');
    const dishesMenu = document.querySelectorAll('.dishes__element');

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
                start: 'center bottom',
            }
        });
    })

    specialityFood.forEach(food => {
        gsap.from(food, {
            y: '+=100',
            opacity: 0,
            duration: 1,
            ease: 'easeInOut',
            scrollTrigger: {
                trigger: specialityFood[0],
                start: 'bottom bottom',
            }
        });
    })

    specialityFeature.forEach(feature => {
        gsap.from(feature, {
            y: '+=100',
            opacity: 0,
            duration: 1,
            ease: 'easeInOut',
            scrollTrigger: {
                trigger: specialityFeature[0],
                start: 'top bottom',
            }
        });
    })

    gsap.from(form, {
        y: '+=100',
        opacity: 0,
        duration: 1,
        ease: 'easeInOut',
        scrollTrigger: {
            trigger: form,
            start: '60% bottom',
        }
    });

    dishesMenu.forEach(dish => {
        dish.addEventListener('click', () => {
            gsap.from('.active-dish', {
                opacity: 0,
                y: '+=100',
                duration: .5,
                ease: 'easeInOut',
            });
        })
    })
}