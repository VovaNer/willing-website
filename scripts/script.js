const menuOpen = document.querySelector('.menu-open'),
    menuHide = document.querySelector('.menu-close'),
    menuBlock = document.querySelector('.menu-block'),
    slidesWrapper = document.querySelector('.slider'),
    slidesInner = document.querySelector('.slider__inner'),
    slides = document.querySelectorAll('.slider__box'),
    width = window.getComputedStyle(slidesWrapper).width,
    sliderNext = document.querySelector('.slider__next'),
    sliderPrev = document.querySelector('.slider__prev');


menuOpen.addEventListener('click', () => {
    menuBlock.classList.add('menu-show');
});

menuHide.addEventListener('click', () => {
    menuBlock.classList.remove('menu-show');
});

// let slideIndex = 1;
// let offset = 0;

// slidesInner.style.width = 25 * slides.length + '%';

// sliderNext.addEventListener('click', () => {
//     console.log(offset);
//     if (offset == (+width.slice(0, width.length - 2) / 4) * (slides.length - 1 - 4)) {
//         offset = 0;
//     } else {
//         offset += +width.slice(0, width.length - 2) / 4;
//     }

//     slidesInner.style.transform = `translateX(-${offset}px)`;
// });

// sliderPrev.addEventListener('click', () => {
//     console.log(offset);
//     if (offset == 0) {
//         offset = (+width.slice(0, width.length - 2) / 4) * (slides.length - 1 - 4);
//     } else {
//         offset -= +width.slice(0, width.length - 2) / 4;
//     }

//     slidesInner.style.transform = `translateX(-${offset}px)`;
// });