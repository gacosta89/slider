$(document).ready(function(){
    var container = $('.images-container')

    container.slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        arrows: false,
        infinite: true,
    });

    $('#prev').on('click', function () {
        container.slick('slickPrev');
    });

    $('#next').on('click', function () {
        container.slick('slickNext');
    });
});
