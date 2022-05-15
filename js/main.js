$(window).on('load', function() {
    $(".form input").val("");

    $(".form input").focusout(function () {
        if ($(this).val() != "") {
            $(this).addClass("focus");
        } else {
            $(this).removeClass("focus");
        }
    })
});

/* Crousel Scripts*/
$(".carousel-testi").owlCarousel({
    loop: false,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1,
        },
        1024: {
            items: 1,
        },
        1025: {
            items: 1,
        }
    }
});
var owl = $('.carousel-testi');
$('.testi-carousel .arrow-left').click(function () {
    owl.trigger('prev.owl.carousel');
});
$('.testi-carousel .arrow-right').click(function () {
    owl.trigger('next.owl.carousel');
}); 

function playPause() {
    var video = document.querySelector("#myVideo");
    if (video.paused){
        video.play();
        $('.play').addClass("plo");
    }
    else{
        video.pause();
        $('.play').removeClass("plo");
    }
}


$(".nav-opener").click(function () {
    $('.c-navbar ul').animate({
        height: 'toggle'
    });
});