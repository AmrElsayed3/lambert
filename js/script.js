$(window).load(function() {
  "use strict";
  $(".loader").fadeOut(500, function() {
      $("body").animate({
          opacity: "1",
      }, 500);
      $('html').css('overflow-y','scroll');
  });
});
  //NavBar background When Scroll And Reload the Website
  $(window).scroll(function (){

    if( $(window).scrollTop () > 300 ){

      $('.header').addClass('logo-scroll');

    }else {

        $('.header').removeClass('logo-scroll');

    }

    if( $('.header').hasClass('logo-scroll') && $('.tiger-collapse').hasClass("visible") ){

      $('.tiger-collapse').animate({

          top:"103px"

      },10);
    }else if ($('.tiger-collapse').hasClass("visible")) {
      $('.tiger-collapse').animate({

          top:"130px"

      },10);
    }


  });

  if( $(window).scrollTop () > 300 ){

    $('.header').addClass('logo-scroll');

  }else {
      $('.header').removeClass('logo-scroll');

  }

  //Button To Section About
  $(".custom-scroll-link").click(function (e) {

      e.preventDefault();
      $('html,body').animate({

          scrollTop: $('#' + $(this).data('scroll')).offset().top - 30
      }, 1000);

  });

  //Activation The Link In Navbar
  $(".nav-holder ul li a ,.tiger-collapse ul li a").click(function () {
    $(this).addClass('active').parent('li').siblings().children('a').removeClass('active');
  });

  $('.toggle').click(function(){

      $('.tiger-collapse').toggleClass("visible");

      if ( $('.tiger-collapse').hasClass("visible") && $(window).scrollTop () > 300 ){

          $('.tiger-collapse').animate({

              top:"103px"

          },500);


      }else if ($('.tiger-collapse').hasClass("visible") && $(window).scrollTop () < 300) {
        $('.tiger-collapse').animate({

            top:"130px"

        },500);


      }else{

          $('.tiger-collapse').animate({

              top:"-335px"

          },500);

      }

  });
  //Button To Scroll Top
  $('.to-top').click(function(e){
    e.preventDefault();
      $('html , body').animate({
      scrollTop:0
    },700)
  });

  // Team Poupup
  $('.popup-modal-dismiss').click(function (e) {
    e.preventDefault();
    $(".mfp-bg").addClass('my-mfp-slide-bottom').addClass("zindex").removeClass("mfp-ready");

    $('.mfp-wrap').addClass('my-mfp-slide-bottom').addClass("zindex").removeClass('mfp-ready');

    $('html').css('overflow-y','scroll');
    $('.mfp-wrap').css('overflow','hidden');
  });
  $('.team-item a').click(function (e) {
    e.preventDefault();
    $(".mfp-bg").removeClass('my-mfp-slide-bottom').removeClass("zindex").addClass("mfp-ready");

    $('.mfp-wrap').removeClass('my-mfp-slide-bottom').removeClass("zindex").addClass('mfp-ready');

    $('html').css('overflow-y','hidden');
    $('.mfp-wrap').css('overflow','hidden scroll');
    //Poupup Image
    var src = $(this).children('img').attr("src").replace('team','teambg');

    $('.team-modal').find("img").attr("src",""+ src + "");
    //poupup Name
    var chefname = $(this).children('.chefname').text();
    $(".chef-name").text(chefname);
    //poupup Info
    var chefinfo = $(this).children('.chefinfo').text();
    $(".decor-title").text(chefinfo);

  });

  //Menu Poupup
  $('.promotion-desc a').click(function (e){
    e.preventDefault();
    $(".mfp-bg").removeClass('my-mfp-slide-bottom').removeClass("zindex").addClass("mfp-ready");

    $('.mfp-wrap').removeClass('my-mfp-slide-bottom').removeClass("zindex").addClass('mfp-ready');

    $('html').css('overflow-y','hidden');
    $('.mfp-wrap').css('overflow','hidden scroll');
    var menuSrc = $(this).attr("href");
    $('.menu .team-modal img').attr('src',""+ menuSrc +"");

  });
  $('.content-item a').click(function (e){
    e.preventDefault();
    $(".mfp-bg").removeClass('my-mfp-slide-bottom').removeClass("zindex").addClass("mfp-ready");

    $('.mfp-wrap').removeClass('my-mfp-slide-bottom').removeClass("zindex").addClass('mfp-ready');

    $('html').css('overflow-y','hidden');
    $('.mfp-wrap').css('overflow','hidden scroll');
    var menuSrc = $(this).attr("href");
    $('.gallery .team-modal img').attr('src',""+ menuSrc +"");
  });

  $('.gallery-filter').click(function (e) {
    e.preventDefault();
    $(this).addClass('gallery-filter-active').siblings().removeClass('gallery-filter-active');
    console.log($(this).data('filter'));
    console.log($($(this).data('filter')).next());
    // var menu = $(this).data('filter');
    // $($(this).data('filter')).
  });

  var position = $(window).scrollTop();
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    if(scroll > position) {
      $('.hot-dishes .bg-img , .drink .bg-img ')
      .css({"transform":"translateX(200px)"});

      $('.dese .bg-img')
      .css({"transform":"translateX(-200px)"});

    }else {
      $('.hot-dishes .bg-img , .drink .bg-img')
      .css({"transform":"translateX(-100px)"});

      $('.dese .bg-img')
      .css({"transform":"translateX(0)"});
    }
    position = scroll;
  });


  $('.tabs-menu li a').click(function (e){
    e.preventDefault();
    $(this).parent('li').addClass("current").siblings().removeClass("current");
    $($(this).attr("href")).css({"display":"block"}).siblings().css({"display":"none"})
    console.log($(this).attr("href"));
  });
  // Shop Selected
    $('.drop a').click(function (){
      $('.select').text($(this).text());
    });

    $('.drop a').click(function (e){
      e.preventDefault();
      $($(this).attr("href")).fadeIn(500).siblings('.food-cort').fadeOut(500);
      console.log($(this).attr("href"));
    });
