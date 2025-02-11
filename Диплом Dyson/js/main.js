// Импут в карточках

const gridWrapper = document.querySelector('.special__grid-list')


gridWrapper.addEventListener('click', event => {

    if (event.target && event.target.classList.contains('js-plus-btn')) {
        ++event.target.parentElement.querySelector("input").value;
    } else if (event.target.classList.contains("js-minus-btn")) {
        --event.target.parentElement.querySelector("input").value;
    }

    if (event.target.parentElement.querySelector("input").value > 5) {
        event.target.parentElement.querySelector("input").value = 5
    } else if (event.target.parentElement.querySelector("input").value < 1) {
        event.target.parentElement.querySelector("input").value = 1
    }

    const up = document.querySelector('.js-plus-btn')

    if (event.target.parentElement.querySelector("input").value > 4) {
        up.classList.add('off')
    } else {
        up.classList.remove('off')
    }

    const down = document.querySelector('.js-minus-btn')


    if (event.target.parentElement.querySelector("input").value > 1) {
        down.classList.add('active')
    } else {
        down.classList.remove('active')
    }


})


// Аккордеон FAQ

const accordionLists = document.querySelectorAll('.accordion-list');

accordionLists.forEach(eL => {

    eL.addEventListener('click', (e) => {

        const accordionControl = e.target.closest('.accordion-list__control');
        if (!accordionControl) return
        e.preventDefault()
        const accordionItem = accordionControl.parentElement;
        const accordionContent = accordionControl.nextElementSibling;

        accordionItem.classList.toggle('accordion-list__item--opened');

        if (accordionItem.classList.contains('accordion-list__item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = null;
        }

    });

});


// Акоордеон Flter

const filterLists = document.querySelectorAll('.special__filter');


filterLists.forEach(eL => {

    eL.addEventListener('click', (e) => {

        const accordionControl = e.target.closest('.filter__box-control');
        if (!accordionControl) return
        e.preventDefault()
        const accordionItem = accordionControl.parentElement;
        const accordionContent = accordionControl.nextElementSibling;

        accordionItem.classList.toggle('accordion-list__item--opened');

        if (accordionItem.classList.contains('accordion-list__item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = null;
        }

    })

})

const opened = document.querySelector('.filter__box-control')

opened.addEventListener('click', () => {

    opened.classList.toggle('opened')

})


// Маска для телефона

const telInputs = document.querySelectorAll('input[type="tel"]')

const im = new Inputmask('+7 (999) 999-99-99')
im.mask(telInputs)


// Свайпер товары 



new Swiper('.swiper', {

    slidesPerView: 1,
    spaceBetween: 50,

    pagination: {
        el: '.slider__number',
        type: 'fraction',
    },

    navigation: {
        nextEl: '.slider__icons-right',
        prevEl: '.slider__icons-left',
    },

});


//Бургер


document.addEventListener('click', burgerInit)

function burgerInit(e) {

    const burgerIcon = e.target.closest('.burger_icon')
    const burgerNavLink = e.target.closest('.header__link')

    if (document.documentElement.clientWidth > 1350) return

    if (!document.body.classList.contains('body--opened__menu')) {
        document.body.classList.add('body--opened__menu')
    }
    else {
        document.body.classList.remove('body--opened__menu')
    }

}