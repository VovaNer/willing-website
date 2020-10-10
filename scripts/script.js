const menuOpen = document.querySelector('.menu-open'),
    menuHide = document.querySelector('.menu-close'),
    menuBlock = document.querySelector('.menu-block'),
    slidesWrapper = document.querySelector('.slider'),
    slidesInner = document.querySelector('.slider__inner'),
    slides = document.querySelectorAll('.slider__box'),
    sliderWidth = slidesWrapper.offsetWidth,
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

let slideItems = 0;
let slidesMargin = 20;
let slideCounter = 0;
let prevSlides = 0;

const responsive = [
    {breakPoint:{width: 0, item: 1}},
    {breakPoint:{width: 575, item: 2}},
    {breakPoint:{width: 767, item: 3}},
    {breakPoint:{width: 992, item: 4}}
];

function load() {
    for (let i = 0; i < responsive.length; i++) {
        if (window.innerWidth > responsive[i].breakPoint.width) {
            slideItems = responsive[i].breakPoint.item;
        }
    }

    start();
    formSlides();
    
}

function formSlides(start = 0, end = slideItems) {
    for (let i = start; i < end; i++) {
        slides[i].classList.remove('hide');
        slides[i].classList.add('show');
        slideCounter++;
    }
}

function start() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.width = (sliderWidth - (slidesMargin * (slideItems-1))) / slideItems + 'px';
    }
    
}

function slideNext() {
    if (slideCounter == slides.length) {
        slideCounter = 0;
        prevSlides = 0;
        slides.forEach(slide => {
            slide.classList.add('hide');
            slide.classList.remove('show');
        });
        formSlides();
    } else {
        for (let i = 1; i < slides.length; i++) {
            slides[i].style.margin = '0';
        }
        slides[prevSlides].classList.add('hide');
        slides[prevSlides].classList.remove('show');
        slides[slideCounter].classList.add('show');
        slides[slideCounter].classList.remove('hide');
        slideCounter++;
        prevSlides++;
    }
}

function slidePrev() {
    if (prevSlides == 0) {
        slides.forEach(slide => {
            slide.classList.add('hide');
            slide.classList.remove('show');
        });
        formSlides(slides.length-slideItems, slides.length);
        slideCounter = slides.length;
        prevSlides = slides.length - slideItems;
    } else {
        for (let i = 1; i < slides.length; i++) {
            slides[i].style.margin = '0';
        }
        slides[slideCounter-1].classList.add('hide');
        slides[slideCounter-1].classList.remove('show');
        slides[prevSlides - 1].classList.add('show');
        slides[prevSlides - 1].classList.remove('hide');
        slideCounter--;
        prevSlides--;
    }
}



document.addEventListener('DOMContentLoaded', load);
sliderNext.addEventListener('click', slideNext);
sliderPrev.addEventListener('click', slidePrev);