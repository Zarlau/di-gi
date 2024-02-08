$(document).ready(function(){
    $(".header__content .owl-carousel").owlCarousel({
        items:1,
        loop:true,
        items : 1,
        nav: true,
        navText: ['<img src="img/forward.svg" class="prev" alt="">','<img src="img/back.svg" class="next" alt="">'],
    });
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
     nav:true,
    });
  });
