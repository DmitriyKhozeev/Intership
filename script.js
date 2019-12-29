(function () {
    var dkImages = {
        'aside__elem_one_bg_3': './img/doorkeepers10.png',
        'aside__elem_one_bg_2': './img/doorkeepers10-blue.png',
        'aside__elem_one_bg_4': './img/doorkeepers10-red.png',
        
    };
    var mainImage = document.getElementById('nav__elem_img_doorkeeper');

    for (var elId in dkImages) {
        document.getElementById(elId)
            .addEventListener('click', function (e) {
                mainImage.src = dkImages[e.target.id];
            });
    }
})();

