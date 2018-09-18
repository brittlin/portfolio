$(document).ready(function () {
    
    /*--Setup Magnific Popup---------------*/
    /*http://dimsemenov.com/plugins/magnific-popup/documentation.html*/
    var groups = {};
    $('.myGalleryItem').each(function () {
        var id = parseInt($(this).attr('data-group'), 10);

        if (!groups[id]) {
            groups[id] = [];
        }

        groups[id].push(this);
    });

    $.each(groups, function () {

        $(this).magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: false,
            gallery: {
                enabled: true
            }
        })

    });


    /*--Initialize jQuery Masonry---------------*/
    /*https://masonry.desandro.com/
    https://codepen.io/desandro/pen/RPKgEN*/

    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry();
    });

});