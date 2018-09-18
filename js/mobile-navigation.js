  //--- JQuery Resize https://api.jquery.com/resize/

  $(window).resize(function () {
      if ($(window).width() > 768) {
          $("#navigation").show();
      }
  });

  //--- JQuery Slide Toggle http://api.jquery.com/slideToggle/
  $("#mobile-navigation").click(function () {

      $("#navigation").slideToggle();

  });