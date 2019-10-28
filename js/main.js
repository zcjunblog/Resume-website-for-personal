$(function () {
//控制大屏滚动
    $("#dowebok").fullpage({
        navigation: true,
        scrollingSpeed: 600,
        sectionsColor: ["transparent", "rgb(228, 228, 228)", "#fff", "#f90", "#1bbc9b"],
        anchors: ["page0", "page1", "page2", "page3", "page4"],
        menu: "#menu",
        showActiveTooltip: true,
        // 页面渲染后回调
        afterRender: function () {

        },
        // 滚动结束后回调
        afterLoad: function (anchorLink, index) {
            if (index == 2) {
                $(".leftTop").addClass("my_rotate1")
                $(".rightTop").addClass("my_rotate2")
                $(".rightBottom").addClass("my_rotate4")
                $(".leftBottom").addClass("my_rotate3")
            }
            if (index == 3) {
                $('.section2').find('p').delay(300).animate({
                    left: '0'
                }, 1500, 'easeOutExpo');
                $('.section2 #content').find('h1').delay(300).animate({
                    top: '0'
                }, 1500, 'easeOutExpo').css("display","block");
                $('.section2 #content').find('.skills').delay(300).animate({
                    bottom: '0'
                }, 1500, 'easeOutExpo').css("display","block");
                $('.section2 #content').find('#diagram').delay(300).animate({
                    right: '0'
                }, 1500, 'easeOutExpo');
            }

            switch (anchorLink) {
                case 'page0':
                    $(".header").css("background-color", "rgba(255,255,255,0)");
                    $(".header a").css("color", "#fff");
                    $(".logo span").css("color", "#fff");
                    break;
                case 'page1':
                    $(".header").css("background-color", "rgba(255,255,255,0.5)");
                    $(".header a").css("color", "#000");
                    $(".logo span").css("color", "#000");
                    break;
                case 'page2':
                    $(".header").css("background-color", "rgba(255,255,255,0.2)");
                    break;
                case 'page3':
                    $(".header").css("background-color", "rgba(0, 0, 0, 0.2)");
                    $(".header a").css("color", "#fff");
                    $(".logo span").css("color", "#fff");
                    break;
                case 'page4':
                    $(".header").css("background-color", "rgba(0, 0, 0, 0.6)");

                    break;
            }
        },
        onLeave: function (index, direction) {
            if (index == 2) {
                $(".leftTop").removeClass("my_rotate1")
                $(".rightTop").removeClass("my_rotate2")
                $(".rightBottom").removeClass("my_rotate4")
                $(".leftBottom").removeClass("my_rotate3")
            }
            if (index == 3) {
                $('.section2').find('p').delay(300).animate({
                    left: '-120%'
                }, 1500, 'easeOutExpo');
                $('.section2 #content').find('h1').delay(300).animate({
                    top: '-500px'
                }, 1500, 'easeOutExpo').css("display","none");
                $('.section2 #content').find('.skills').delay(300).animate({
                    bottom: '-500px'
                }, 1500, 'easeOutExpo').css("display","none");
                $('.section2 #content').find('#diagram').delay(300).animate({
                    right: '-120%'
                }, 1500, 'easeOutExpo');
            }
        }
    });

    //侧边导航事件
    var Tooltips = [ '基本资料', '专业技能', '工作经历', '项目经验', '联系方式'];
    $("#fp-nav ul li").each(function (index) {
        this.dataset['toggle'] = 'tooltip';
        this.dataset['placement'] = 'left';
        $(this).attr('title', Tooltips[index])
    })
    $('[data-toggle="tooltip"]').tooltip();
});
//控制渐变字
(function ($) {
    "use strict";
    //Home text rotator

    $(".rotator > div:gt(0)").hide();
    setInterval(function () {
        $('.rotator > div:first')
            .fadeOut(0)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('.rotator');
    }, 4000);
})(jQuery);
//手风琴
$(".desktop-wrapper .option").click(function () {
    $(".option").removeClass("active");
    $(this).addClass("active");
});
//筛选过滤
$(function() {
    $('.slideContent .proPic').filterizr();

    $('.slideContent .nav li').on('click', function() {
        $(this).toggleClass('active').siblings().removeClass('active');
    });
});


