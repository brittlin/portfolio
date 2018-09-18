$(document).ready(function () {

    /*Magnific Popup Documentation
    http://dimsemenov.com/plugins/magnific-popup/documentation.html
    https://codepen.io/collection/nLcqo/*/

    $('a.your-img-popup').magnificPopup({
        type: 'image',
        closeBtnInside: false,
        closeOnContentClick: true,

        image: {
            verticalFit: true,
            titleSrc: function (item) {
                return item.el.attr('title');
            }
        }

    });

});