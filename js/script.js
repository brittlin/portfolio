  //*-------------- JQuery Slide Toggle http://api.jquery.com/slideToggle*/

  $("#js__mobile-navigation").click(function () {

      $("#site-main-nav").slideToggle();

  });


  //*-------------- About Me Image Fade In*/
  $(".me").hide();
  $(".me").fadeIn(2000);



//*-------------- mail footer*/
$("#mail").hover(function(){
    $(this).css("color", "#e4ff4e");
    }, function(){
    $(this).css("color", "#a5dce1");
});


//*-------------- fb footer*/
$("#fb").hover(function(){
    $(this).css("color", "#e4ff4e");
    }, function(){
    $(this).css("color", "#a5dce1");
});


//*-------------- insta footer*/
$("#insta").hover(function(){
    $(this).css("color", "#e4ff4e");
    }, function(){
    $(this).css("color", "#a5dce1");
});



 //*-------------- Copy right color change*/
$("#copyrights a").hover(function(){
    $(this).css("color", "#e4ff4e");
    }, function(){
    $(this).css("color", "#a5dce1");
});


  //*-------------- Index SlideShow*/
  $("#slidepics > div:gt(0)").hide();
  setInterval(function () {
      $("#slidepics > div:first")
          .fadeOut(0)
          .next(0)
          .fadeIn(0)
          .end(0)
          .appendTo("#slidepics");
  }, 4000);


//*--------------hover over fun facts*/

function bigImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
}

function normalImg(x) {
    x.style.height = "32px";
    x.style.width = "32px";
}


//*--------------hamburger icon*/

function myFunction(x) {
    x.classList.toggle("change");
}


//*--------------parallax*/

$(window).scroll( function() {
	var scroll = $(window).scrollTop();
    var speed = 0.5;
    
	$('.scroller').each(function(){
		var $this = $(this);
        var $parent = $this.parent().css("background", "images");
        var topOffset = $parent.offset().top;
        var height = $parent.outerHeight(true);
        var parallaxSize = (scroll - topOffset) * speed;
        
        // prevent parallax when scroll down
        if(scroll > topOffset + height) {
            return;
        }
		
        $this.css({ 
            'transform': scroll >= topOffset ? ('translateY(' + parallaxSize + 'px)' ) : ''
        });
	}); 
}); 

