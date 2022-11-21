(function($) {
    $(document).ready(function() {

        $('.grow-business-slide').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            infinite: false,
            prevArrow: '<button type="button" class="slick-prev"><img src="./img/previous_arrow.svg" /></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="./img/next_arrow.svg" /></button>',
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }]
        });
        /* add box shadow on header on scroll */
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll) {
                $("header nav").css('box-shadow', '0 10px 30px 0 rgb(59 101 45 / 15%)');
            } else {
                $("header nav").css('box-shadow', '');
            }
        });

        /* benefits list slider for tab or mobile */
        if ($(window).width() <= 991) {
            $('.speed-business-benefits-list').slick({
                infinite: false,
                dots: true,
                arrows: true,
                slidesToShow: 2,
                prevArrow: '<button type="button" class="slick-prev"><img src="./img/previous_green_arrow.png" /></button>',
                nextArrow: '<button type="button" class="slick-next"><img src="./img/next_green_arrow.png" /></button>',
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }]
            });
        }

        /* menu open on click */
        $('#menu-btn .open-icon').click(function() {
            $(this).css('display', 'none');
            $('.close-icon').css('display', 'block');
            $('.mobile-menu').css('display', 'flex');
        })
        $('#menu-btn .close-icon').click(function() {
            $(this).css('display', 'none');
            $('.mobile-menu').css('display', 'none');
            $('.open-icon').css('display', 'block');
        })
    })
})(jQuery);