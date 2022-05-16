if (matchMedia('only screen and (min-width: 768px)').matches) {
  var beforePos = 0;
  function ScrollAnime() {
    var elemTop = $('.movie-area img').offset().top;//
    var scroll = $(window).scrollTop();
    if (scroll == beforePos) {
    } else if (elemTop > scroll || 0 > scroll - beforePos) {
      $('#pc-header').removeClass('up-move');
      $('#pc-header').addClass('down-move');
    } else {
      $('#pc-header').removeClass('down-move');
      $('#pc-header').addClass('up-move');
    }
    beforePos = scroll;
  }

  $(window).scroll(function () {
    ScrollAnime();
  });

  $(window).on('load', function () {
    ScrollAnime();
  });
} else {
  var beforePos = 0;
  function ScrollAnime() {
    var elemTop = $('.logo-area').offset().top;//
    var scroll = $(window).scrollTop();
    if (scroll == beforePos) {
    } else if (elemTop > scroll || 0 > scroll - beforePos) {
      $('#header').removeClass('up-move');
      $('#header').addClass('down-move');
    } else {
      $('#header').removeClass('down-move');
      $('#header').addClass('up-move');
    }
    beforePos = scroll;
  }

  $(window).scroll(function () {
    ScrollAnime();
  });

  $(window).on('load', function () {
    ScrollAnime();
  });
}

var bePos = 0;
function TopScrollAnime() {
  var elemPos = $('.head').offset().top;//
  var topScroll = $(window).scrollTop();
  if (topScroll == bePos) {
  } else if (elemPos > topScroll || 0 > topScroll - bePos) {
    $('#pcpage-top').removeClass('pcdown-move');
    $('#pcpage-top').addClass('pcup-move');
  } else {
    $('#pcpage-top').removeClass('pcup-move');
    $('#pcpage-top').addClass('pcdown-move');
  }
  bePos = topScroll;
}

$(window).scroll(function () {
  TopScrollAnime();
});

$(window).on('load', function () {
  TopScrollAnime();
});

//スマホ #page-topをクリックした際の設定
$('#page-top').click(function () {
  $('body,html').animate({
    scrollTop: 0//ページトップまでスクロール
  }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
  return false;//リンク自体の無効化
});

//PC #pcpage-topをクリックした際の設定
$('#pcpage-top').click(function () {
  $('body,html').animate({
    scrollTop: 0//ページトップまでスクロール
  }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
  return false;//リンク自体の無効化
});

$(window).on('load resize', function () {
  //ウィンドウの高さを取得する
  var targetY = $(window).height();

  // スクロールをクリックするとウィンドウの高さ分、下にスクロールする
  $('#scrl-area').on('click', function () {
    $("html, body").stop().animate({ scrollTop: targetY }, 1000, 'swing');
    return false;
  });
});





