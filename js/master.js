let openForm1 = document.querySelector('#open_form_1');
let openForm2 = document.querySelector('#open_form_2');
let openForm3 = document.querySelector('#open_form_3');
let openForm4 = document.querySelector('#open_form_4');
let closeForm1 = document.querySelector('#close_form_1');
let closeForm2 = document.querySelector('#close_form_2');
let closeForm3 = document.querySelector('#close_form_3');
let closeForm4 = document.querySelector('#close_form_4');


// open and close login 
openForm1.onclick = () => {
    document.querySelector('#show_services_1').classList.toggle('active');
};
openForm2.onclick = () => {
    document.querySelector('#show_services_2').classList.toggle('active');
};
openForm3.onclick = () => {
    document.querySelector('#show_services_3').classList.toggle('active');
};
openForm4.onclick = () => {
    document.querySelector('#show_services_4').classList.toggle('active');
};
closeForm1.onclick = () => {
    document.querySelector('#show_services_1').classList.toggle('active');
};
closeForm2.onclick = () => {
    document.querySelector('#show_services_2').classList.toggle('active');
};
closeForm3.onclick = () => {
    document.querySelector('#show_services_3').classList.toggle('active');
};
closeForm4.onclick = () => {
    document.querySelector('#show_services_4').classList.toggle('active');
};
// ##########################
$(document).ready(function() {
    $("#open_form_1").click(function() {
        $(".services_icons").addClass("display");
    })
    $("#close_form_1").click(function() {
        $(".services_icons").removeClass("display");
    })
});
$(document).ready(function() {
    $("#open_form_2").click(function() {
        $(".services_icons").addClass("display");
    })
    $("#close_form_2").click(function() {
        $(".services_icons").removeClass("display");
    })
})
$(document).ready(function() {
    $("#open_form_3").click(function() {
        $(".services_icons").addClass("display");
    })
    $("#close_form_3").click(function() {
        $(".services_icons").removeClass("display");
    })
})
$(document).ready(function() {
    $("#open_form_4").click(function() {
        $(".services_icons").addClass("display");
    })
    $("#close_form_4").click(function() {
        $(".services_icons").removeClass("display");
    })
})

// ##########################
// code auto type home 
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
    loopRight: true,
    // loop: true,
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
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
// swiber tranding 
var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: false,
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
    $(".navbar").click(function() {
        $(".navbar").removeClass("active");
        $(this).addClass("active");
    })
});
// #################
$(document).ready(function() {
    $(".tranding-slide").click(function() {
        $(".tranding-slide").removeClass("active");
        $(this).addClass("active");
    })
});
// #################
$(document).ready(function() {
    $(".btn_contact").click(function() {
        $(".btn_contact").removeClass("active");
        $(this).addClass("active");
    })
});
// #################
