$(window).load(function () {
    var ltIE9 = $('#lt-ie9')[0];
    if (!ltIE9) {
        $('#container').masonry({
            columnWidth: 100,
            itemSelector: '.item',
            gutter: 10,
        });
    }
});

$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items: 3,
    });

    //$(".page h2, .contacto h2, .blog h2, .blog-post h2, .actividad-aventura h2, .bici h2, .quad h2, .alojamiento-page h2")
    //    .prepend('<i class="fa fa-level-down" style="margin-right:10px" ></i>');
});
