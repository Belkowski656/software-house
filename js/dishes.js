const dishes = [{
        dishName: 'Sandwich',
        dishPhoto: './src/sandwich1.jpg',
        type: 'sandwich',
    },
    {
        dishName: 'Sandwich',
        dishPhoto: './src/sandwich2.jpg',
        type: 'sandwich',
    },
    {
        dishName: 'Sandwich',
        dishPhoto: './src/sandwich3.jpg',
        type: 'sandwich',
    },
    {
        dishName: 'Cake',
        dishPhoto: './src/cake1.jpg',
        type: 'cake',
    },
    {
        dishName: 'Cake',
        dishPhoto: './src/cake2.jpg',
        type: 'cake',
    },
    {
        dishName: 'Cake',
        dishPhoto: './src/cake3.jpg',
        type: 'cake',
    },
    {
        dishName: 'Juice',
        dishPhoto: './src/juice1.jpg',
        type: 'juice',
    },
    {
        dishName: 'Juice',
        dishPhoto: './src/juice2.jpg',
        type: 'juice',
    },
    {
        dishName: 'Chocolate',
        dishPhoto: './src/chocolate.jpg',
        type: 'chocolate',
    },
]
const menuElements = document.querySelectorAll('.dishes__element');
const box = document.querySelector('.dishes__box');

const show = (dishesToShow) => {
    box.innerHTML = '';
    dishesToShow.forEach(dish => {
        const div = document.createElement('div');
        div.classList.add('dishes__dish');
        div.classList.add('active-dish');
        div.innerHTML =
            ` <div class="dishes__img" style="background-image: url(${dish.dishPhoto})"><div/>
            <p class="dishes__dish-name">${dish.dishName}</p>`;
        box.appendChild(div);
    })
}

const addActiveToMenuElement = (type) => {
    menuElements.forEach(element => {
        if (element.getAttribute('data-dish-type') === type) element.classList.add('active');
        else element.classList.remove('active');
    })
};

const sortDishes = (type = 'all') => {
    let prevType = '';

    if (prevType === type) return;

    prevType = type;

    addActiveToMenuElement(type);

    if (type === 'all') {
        show(dishes)
    } else {
        const dishesToShow = dishes.filter(dish => dish.type === type);
        show(dishesToShow);
    }
}

menuElements.forEach(element => element.addEventListener('click', () => {
    const type = element.getAttribute('data-dish-type');
    sortDishes(type)
}));

show(dishes);