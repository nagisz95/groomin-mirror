$(function () {
    $('#main_visual').slick({
        slide: ".slide_cont",
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        dotsClass: 'slide-dots',
        prevArrow: false,
        nextArrow: false,
        autoplay: true
        // responsive: [ {
        //         breakpoint: 1100, 
        //         settings: {
        //             slidesToShow: 2
        //         }
        //         },
        //         {
        //             breakpoint: 601, 
        //             settings: {
        //                 slidesToShow: 1
        //             }
        //     }
        // ]
    });
});

$(function () {
    $(window).scroll(function () {
        var num = $(this).scrollTop();
        if (num > 500) {
            $("header").css("background", "#f7f6ed");
            $(".mypage").css("color", "#000");
            $(".cart").css("color", "#000");
            $(".nav_menu").css("color", "#000");
            $(".sp_btn").css("color", "#000");
            $(".load_before_pc").css("display", "none");
            $(".load_after_pc").css("display", "block");
            $(".load_before_sp").css("display", "none");
            $(".load_after_sp").css("display", "block");
        } else {
            $("header").css("background", "none");
            $(".mypage").css("color", "#fff");
            $(".cart").css("color", "#fff");
            $(".nav_menu").css("color", "#fff");
            $(".sp_btn").css("color", "#fff");
            $(".load_before_pc").css("display", "block");
            $(".load_after_pc").css("display", "none");
            $(".load_before_sp").css("display", "block");
            $(".load_after_sp").css("display", "none");
        }
    });
});

$(function(){
    $(".sp_menu_btn").on("click", function(){
        $(".sp_menu_active").fadeIn(400);
    }),
    $(".sp_menu_close").on("click", function(){
        $(".sp_menu_active").fadeOut(400);
    })
});


