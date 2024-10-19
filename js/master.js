// code auto type home 
var typed = new Typed('.auto_type',{
    strings: ["innovate","revolutionize", "ideate", "develop", "transform","code"],
    typeSpeed : 150,
    backSpeed : 150,
    looped : true,
});
// open and close nav bar 

let openNav = document.querySelector('#open_nav');
let closeNav = document.querySelector('#close_nav');
let navPar = document.querySelector('.nav_b_media');


openNav.onclick = () => {
    navPar.style.display = "block";
    if (navPar.style.display = "block") {
        openNav.style.opacity = "0";
        openNav.style.cursor = "default";
    }
};
closeNav.onclick = () => {
    navPar.style.display = "none";
    if (navPar.style.display = "none") {
        openNav.style.opacity = "1";
        openNav.style.cursor = "pointer";
    }
};



// open and close login section service
let openForm1 = document.querySelector('#open_form_1');
let openForm2 = document.querySelector('#open_form_2');
let openForm3 = document.querySelector('#open_form_3');
let openForm4 = document.querySelector('#open_form_4');
let closeForm1 = document.querySelector('#close_form_1');
let closeForm2 = document.querySelector('#close_form_2');
let closeForm3 = document.querySelector('#close_form_3');
let closeForm4 = document.querySelector('#close_form_4');

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
// section slider opinions 
// #################
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})
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
    $(".tranding-slide").click(function() {
        $(".tranding-slide").removeClass("active");
        $(this).addClass("active");
    })
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
    $(".btn_contact").click(function() {
        $(".btn_contact").removeClass("active");
        $(this).addClass("active");
    })
});
