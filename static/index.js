$(document).ready(function(){
    var container = $('.images-container');

    $.getJSON('static/data.json', function (data) {
        data.autos.forEach((auto) => {
            container.append(`
                <div class="image">
                    <img src="static/images/${auto.foto}" />
                </div>
            `);
        });

        setTimeout(() => {
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
        }, 1000);
    });
});
