$('#banner-carousel').owlCarousel({
    loop:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    },
    draggable:false,
    autoplay:true,
    autoplayTimeout:4000,
    loop:true,
})
owl = $('#banner-carousel').owlCarousel();
$(".owl-prev").click(function () {
    owl.trigger('prev.owl.carousel');
});
$(".owl-next").click(function () {
    owl.trigger('next.owl.carousel');
});
