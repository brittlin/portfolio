//init jQuery Masonry
//https://masonry.desandro.com/
//https://codepen.io/desandro/pen/RPKgEN

var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer'
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});  
