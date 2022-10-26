$(function () {
    $(".btn-search").click(function () {
        $(".input_sr").toggleClass("active")
    })
    $(".slide-banner").owlCarousel({ loop: !0, margin: 0, items: 1, dots: !0 });
    $(".lst-part").owlCarousel({ loop: !1, margin: 0, items: 6, dots: !1, nav: !0, autoplay: !0, navText: ['<img src="/html/style/image/ic-arrow-left.png" alt="">', '<img src="/html/style/image/ic-arrow-right.png" alt="">'], responsive: { 0: { items: 2 }, 600: { items: 4 }, 1e3: { items: 5 }, 1026: { items: 6 } } });
    $(".slide-project ._proj-dt").owlCarousel({ loop: !1, margin: 25, items: 3, dots: !1, nav: !0, navText: ['<img src="/html/style/image/ic-arrow-left.png" alt="">', '<img src="/html/style/image/ic-arrow-right.png" alt="">'], responsive: { 0: { items: 1 }, 600: { items: 1 }, 1e3: { items: 3 }, 1026: { items: 3 } } });
    $(".lst_other_post").owlCarousel({ loop: !1, margin: 25, items: 3, dots: !1, nav: !0, navText: ['<img src="/html/style/image/ic-arrow-left-news.png" alt="">', '<img src="/html/style/image/ic-arrow-right-news.png" alt="">'], responsive: { 0: { items: 1 }, 600: { items: 2 }, 1e3: { items: 3 }, 1026: { items: 3 } } });
    //if ($(window).width() < 992) {
    //    $(".fiel-active .fiel-cnt").addClass("owl-carousel owl-theme");
    //    $(".fiel-active .fiel-cnt").owlCarousel({ loop: !1, margin: 15, items: 2, autoplay: !0, nav: !0, navText: ['<img src="/html/style/image/ic-arrow-left.png" alt="">', '<img src="/html/style/image/ic-arrow-right.png" alt="">'], responsive: { 0: { items: 1 }, 600: { items: 2 } } });
    //}
    if ($(window).width() < 992) {
        $(".lst_fiel .slide_fiel").addClass("owl-carousel owl-theme");
        $(".lst_fiel .slide_fiel").owlCarousel({ loop: !1, dots: !1, margin: 15, items: 2, responsive: { 0: { items: 1 }, 600: { items: 2 } } });
    }
    //if ($(window).width() < 768) {
    //    $(".video-news .video-cnt").addClass("owl-carousel owl-theme");
    //    $(".video-news .video-cnt").owlCarousel({ loop: !0, margin: 0, items: 1, autoplay: !0 , dots: !0});
    //}
    const resizeImage = (e, s) => { s = parseInt($(e).width()) * s; $(e).css({ height: s + "px" }) };
    resizeImage(".project .project-cnt .it .img", 1)
    if ($(window).width() >= 768) {
        resizeImage(".fiel-active .fiel-cnt .it .img", 250 / 360)
        resizeImage(".project .project-cnt .pic", 1)
        resizeImage(".video-news .news .lst-news .pic", 360 / 560)
        resizeImage(".video-news .news .lst-news .img", 170 / 270)
        resizeImage(".pro-dt ._pro-dt .left .lSSlideOuter .lSPager.lSGallery li", 120 / 180)
        resizeImage("._project.service ._proj-dt .it .img", 320 / 560)
        resizeImage(".advise-cnt .it .img", 435 / 230)
        resizeImage(".advise-construction .it .img", 225 / 360)
        resizeImage(".lst_choice .lst_fiel .it .img", 190 / 280)
        resizeImage(".lst_other_post .it .img", 165 / 265)
        resizeImage(".news .news_cnt ._top .it .img", 170 / 270)
        resizeImage(".news .news_cnt ._top .it .pic", 360 / 560)
        resizeImage(".news .news_cnt ._bot .it .img", 170 / 270)
        resizeImage("._project ._proj-dt .it .img", 1)
    }
    resizeImage(".partner .lst-part .img", 120 / 195)
    resizeImage(".video-cnt .it .iframe", 9 / 16)
   
    if ($(window).width() < 768) {
        resizeImage(".news .news_cnt ._top .it .img", 9 / 16)
        resizeImage(".news .news_cnt ._bot .it .img", 9 / 16)
        resizeImage(".advise-construction .it .img", 9 / 16)
        resizeImage(".video-news .news .lst-news .pic ", 9 / 16)
        resizeImage(".video-news .news .lst-news .img", 9 / 16)
        resizeImage(".project .project-cnt .pic,.project .project-cnt .img , .fiel-active .fiel-cnt .it .img", 9 / 16)
        resizeImage(".intro-cnt .left", 9 / 16)
        resizeImage("section.map", 1)
        resizeImage("._info-com ._info ._info-cnt .right .iframe", 9 / 16)
        resizeImage("._project ._proj-dt .it .img", 9/16)
    }
    else {
        resizeImage("section.map", 385 / 1366)
    }
    $(".touch-menu").click(function () {
        $(this).toggleClass("active")
        $("header .hd-bot .menu").toggleClass("active")
        $('.menu-top .fa.fa-caret-up').toggleClass('active')
        $('.bg-black').toggleClass('active')
    })
    $(".bg-black").click(function () {
        $(this).removeClass("active")
        $("header .hd-bot .menu").removeClass("active")
        $(".touch-menu").removeClass("active")
        $(".menu .child-1").removeClass('open')
    })
    $(".menu .child-1").click(function () {
        $(this).addClass('open');
        var $target = $(this).next('.menu .sub-menu').slideToggle(400);
        $('.menu .sub-menu').not($target).hide();
        $(".menu .child-1").not($target).removeClass('open')
    })
    $('.lst-num .it span:nth-of-type(1)').counterUp({ delay: 10, time: 1100 });
    fixintro = function () { var d = $(window).scrollTop(); 1025 < $(window).width() && (50 < d && $("header").addClass("fixed"), d < 50 && $("header").removeClass("fixed")), $(window).width() < 1025 && ($("header").addClass("fixed"), $("._banner").css({ "margin-top": $("header").height() })) };
    fixintro();
    $(window).on('scroll', function () { fixintro(); });
    if ($('#FormConsult').length > 0) {
        var offs = $('#FormConsult').offset().top;
        $('.form-sub').click(function () {
            $("html,body").animate({ scrollTop: offs - 110 }, 1000)
        });
    }
});