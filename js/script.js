// Задаём переменные
const productItems = $('.product__item');
const productItemsPrice = $('.product__item').find('.product__price-full');
const additionallyItems = $('.product__additionally-items');
const apartamentsBtn = $('.apartaments__btn');
const about = $('.about');
const body = $('.page')
const popup = $('.popup');
const notPopupContent = $('.popup__content')[0];
const popupClose = $('.popup__close');
const menu = $('.menu');
const menuLinesContainer = $('.menu__lines-container');

// Скрываем
for (let i = 6; i < productItemsPrice.length; i++) {
    productItems[i].classList.add('hide')
}

// apartamentsBtn
apartamentsBtn.click(() => apartamentsBtnClick())

function apartamentsBtnClick() {
    if (apartamentsBtn.i) {
        apartamentsBtn.i = 0;
        scrollTo(0, 4680)
        apartamentsBtnClickTwo()
    } else {
        apartamentsBtn.i = 1;
        apartamentsBtnClickOne()
    }
};

// Фильтр и кнопка показать всё
function apartamentsBtnClickOne() {
    for (let i = 6; i < productItemsPrice.length; i++) {
        productItems[i].classList.remove('hide')
    }
    apartamentsBtn.html('Скрыть<div class="apartaments__btn-arrow hide-btn__arrow"></div>')
};

function apartamentsBtnClickTwo() {
    for (let i = 6; i < productItemsPrice.length; i++) {
        productItems[i].classList.add('hide')
    }
    apartamentsBtn.html('Показать еще<div class="apartaments__btn-arrow"></div>')
}

$('.apartaments-filter__item').click(function(e) {
    const secondClass = e.target.className.split(' ')[1]
    about.css('margin-top', '30px')
    if (secondClass == 'apartaments-filter__item_20-30') {
        for (let i = 0; i < productItemsPrice.length; i++) {
            const productItemPrice = parseInt(productItemsPrice[i].innerText.replace(/[^\d]/g, ''))
            $('.product__item')[i].classList.remove('hide');
            if (productItemPrice < 20000000 || productItemPrice > 30000000) {
                apartamentsBtn.hide()
                $('.product__item')[i].classList.add('hide');
            }
        }
    } else if (secondClass == 'apartaments-filter__item_30-50') {
        for (let i = 0; i < productItemsPrice.length; i++) {
            const productItemPrice = parseInt(productItemsPrice[i].innerText.replace(/[^\d]/g, ''))
            $('.product__item')[i].classList.remove('hide');
            if (productItemPrice < 30000000 || productItemPrice > 50000000) {
                apartamentsBtn.hide()
                $('.product__item')[i].classList.add('hide');
            }
        }
    } else if (secondClass == 'apartaments-filter__item_50-100') {
        for (let i = 0; i < productItemsPrice.length; i++) {
            const productItemPrice = parseInt(productItemsPrice[i].innerText.replace(/[^\d]/g, ''))
            $('.product__item')[i].classList.remove('hide');
            if (productItemPrice < 50000000 || productItemPrice > 100000000) {
                apartamentsBtn.hide()
                $('.product__item')[i].classList.add('hide');
            }
        }
    } else if (secondClass == 'apartaments-filter__item_more-100') {
        for (let i = 0; i < productItemsPrice.length; i++) {
            const productItemPrice = parseInt(productItemsPrice[i].innerText.replace(/[^\d]/g, ''))
            $('.product__item')[i].classList.remove('hide');
            if (productItemPrice < 100000000) {
                apartamentsBtn.hide()
                $('.product__item')[i].classList.add('hide');
            }
        }
    } else {
        about.css('margin-top', '60px')
        for (let i = 0; i < productItemsPrice.length; i++) {
            $('.product__item')[i].classList.remove('hide');
        }
        if (!apartamentsBtn.i) {
            apartamentsBtn.i = 0;
            apartamentsBtnClickTwo()
        } else {
            apartamentsBtn.i = 1;
            apartamentsBtnClickOne()
        }
        apartamentsBtn.show()
    }

    $('.apartaments-filter__item').removeClass('apartaments-filter__item_active');
    $(this).addClass('apartaments-filter__item_active');
});
// sliders
$('.about__slider-big').slick({
    slidesToShow: 1,
    arrows: false,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    asNavFor: '.about__slider-small',
})
$('.about__slider-small').slick({
    slidesToShow: 4,
    arrows: false,
    asNavFor: '.about__slider-big',
    focusOnSelect: true,
    responsive: [{
        breakpoint: 1070,
        settings: {
            slidesToShow: 3
        }
    }, ]
});

// popup
document.onclick = function(e) {
    if (!(notPopupContent.contains(e.target)) && !(popup.hasClass('hide-popup')) || popupClose[0] == e.target) {
        popup.addClass('hide-popup')
        body.toggleClass('lock')
    }
    if (e.target.localName == 'button') {
        popup.removeClass('hide-popup')
        body.toggleClass('lock')
    }
};

// menu
menu.on('click', function() {
    menu.toggleClass('active')
    body.toggleClass('lock')
})