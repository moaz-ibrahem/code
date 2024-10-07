
var typed = new Typed('.auto_type',{
    strings: ["innovate","revolutionize", "ideate", "develop", "transform","code"],
    typeSpeed : 150,
    backSpeed : 150,
    looped : true,
});
// swiper code
var codeSlider = new Swiper('.code-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: false,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 2.5,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
// swiber tranding 
var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: false,
    leftredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 0,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
// #################

$(document).ready(function() {
    $(".btn_contact").hover(function() {
        $(".btn_contact").removeClass("active");
        $(this).addClass("active");
    })
    // $(".btn").click(function() {
    //     $(".btn").removeClass("active");
    //     $(this).addClass("active");
    // })
});