var windowWidth;

$(function () {
    windowWidth = $(window).width();

    $(window).resize(function () {
        windowWidth = $(window).width();

        if (768 < windowWidth) {
            $("header .nav > ul li.dep02 .dep03").css({ "display": "block" });
        }
        if (windowWidth < 768) {
            $("header .nav > ul li.dep02 .dep03").css({ "display": "none" });
        }
    });

    $(".dep02").mouseover(function () {
        if (768 < windowWidth) {
            $(this).addClass("active");
        }
    }).mouseleave(function () {
        if (768 < windowWidth) {
            $(this).removeClass("active");
        }
    });

    $(".m-btn-nav").click(function () {
        mBtnNav();
    });

    $("header .nav > ul li.dep02 h2").each(function (idx, element) {
        $(element).click(function () {
            if (768 < windowWidth)
                return;

            $("header .nav > ul li.dep02 .dep03").slideUp();
            if ($(this).next(".dep03").css("display") == "none") {
                $(this).next(".dep03").slideDown();
            }
        });
    });
});

function mBtnNav() {
    $("header .nav > ul").toggleClass("active");
}