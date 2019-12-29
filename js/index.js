const PRICE = 150;
let count = 0;

const priceElement = document.getElementById("price");
const countElement = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

const incrementProductCount = () => {
    ++count;
    priceElement.textContent = "Current price: $" + count * PRICE;
    countElement.textContent = count;
};

const decrementProductCount = () => {
    if (count <= 0) return;
    --count;
    priceElement.textContent = "Current price: $" + count * PRICE;
    countElement.textContent = count;
};

incrementButton.addEventListener("click", incrementProductCount);
decrementButton.addEventListener("click", decrementProductCount);


// color
(function () {
    var dkImages = {
        'nav__color__element_white': './keeper-landing/img/doorkeeper_s10.png',
        'nav__color_element_blue': './keeper-landing/img/doorkeepers15.png',
        'nav__color_element_red': './keeper-landing/img/doorkeepers1.png',
        'nav__color__element_gray__obolnka': './keeper-landing/img/doorkeeper_s10.png',

    };
    var mainImage = document.getElementById('nav__color__element_gray__obolnka');

    for (var elId in dkImages) {
        document.getElementById(elId)
            .addEventListener('click', function (e) {
                mainImage.src = dkImages[e.target.id];
            });
    }
})();

$('.mobile-menu').on('click', function (e) {
    e.preventDefault();
    $('.menu-btn').toggleClass('menu-active')
    $('.menu-wrap').toggleClass('menu-active')
})

