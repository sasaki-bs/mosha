//全体の囲みは即時関数です、決り文句としてこの枠内に記述を書くと他のjsの影響などを受けなくなります。
(() => {
  'use strict';
  //  ハンバーガーメニュー
  $(function () {
    $('.menu-trigger').on('click', function () {
      $(this).toggleClass('active');
      $('.nav-pc').toggleClass('active');
      //$(this).next().toggleClass('active');
    });


    //  pcスライダー
    $('.pc-slider').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      fade: true,
      cssEase: 'linear'
    });

    //  spスライダー
    $('.sp-slider').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 1000,
      fade: true,
      cssEase: 'linear'
    });

   //  もっとみる
     $(".btn-load-more").on("click", function (e) {
      e.preventDefault();

      // 隠れている部分をスライドで表示
      $(".more-photos").slideDown();
    });
  
  });

})();// END
