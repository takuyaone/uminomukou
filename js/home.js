$(window).on('load resize', function () {
  var w = $(window).width();
  var x = 768;
  if (w <= x) {
    jQuery(function ($) {
      $('.slide-area').bgSwitcher({
        images: ['./img/hero_slide01.jpg', './img/hero_slide02.jpg', './img/hero_slide03.jpg'],
        interval: 5000,
        loop: true,
        shuffle: true,
        effect: "fade",
        duration: 2000,
        easing: "swing"
      });
      if (window.name != "any") {
        location.reload();
        window.name = "any";
      } else {
        window.name = "";
      }
    });
  } else if (w >= x) {
    $('.slide-area').stop();
  }
});

    




