const circle = document.querySelector('.circle');
const figure = document.querySelector('.figure');
const dot1 = document.querySelector('.dot1');
const hero__title = document.querySelector('.hero__title');
const hero__img = document.querySelector('.hero__img');
const hero__text = document.querySelector('.hero__text');
const hero__btn = document.querySelector('.hero .btn--primary');
const copyright = document.querySelector('.copyright');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const layout = document.querySelector('.layout');


const toggleMenu = () => {
    burger.classList.toggle('open');
    nav.classList.toggle('open');
    layout.classList.toggle('open');
};

burger.addEventListener('click', () => {
    toggleMenu();
})
layout.addEventListener('click', () => {
    toggleMenu();
})
copyright.innerHTML += new Date().getFullYear() + ' Mary Varf';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
});
const moveHeroFigures = () => {
    hero__title.classList.add('move');
    hero__text.classList.add('move');
    hero__btn.classList.add('move');
    figure.classList.add('move');
    circle.classList.add('move');
    dot1.classList.add('move');
    hero__img.classList.add('move');

}

setTimeout(() => {
    moveHeroFigures();
},0.3)