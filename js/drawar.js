$(".openbtn1").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
  $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

/* ナビメニュー画面固定 */
var state = false;
var scrollpos;
  $('.openbtn1').on('click', function () {
  if (state == false) {
    scrollpos = $(window).scrollTop();
    $('body').addClass('fixed').css({ 'top': -scrollpos });
    state = true;
  } else {
    $('body').removeClass('fixed').css({ 'top': 0 });
    window.scrollTo(0, scrollpos);
    state = false;
  }
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
  $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
  $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});


var $target = $('.js-scroll-animation');
var offset = 100;

$(window).on('scroll', function () {

  var scroll = $(window).scrollTop();
  var h = $(window).height();

  $target.each(function () {
    var pos = $(this).offset().top;
    if (scroll > pos - h + offset) {
      $(this).addClass('fade-up');
    }
  })

}).trigger('scroll');

