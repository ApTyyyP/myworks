;(function($){
    $(function(){
        // ѕлавна¤ прокрутка scroll по ¤корю
        $('a[href^="#"]').on('click', function (event) {
            // отмен¤ем стандартное действие
            event.preventDefault();

            var sc = $(this).attr("href"),
                dn = $(sc).offset().top;
            /*
            * sc - в переменную заносим информацию о том, к какому блоку надо перейти
            * dn - определ¤ем положение блока на странице
            */

            $('html, body').animate({scrollTop: dn}, 1000);

            /*
            * 1000 скорость перехода в миллисекундах
            */
        });

        // hamburger-menu
        var hamburger = $('.hamburger'),
            nav = $('nav');
        hamburger.on('click', function () {
            nav.toggleClass('opened');
            $(this).toggleClass('active');
        });
        $(window).on('resize', function () {
            if($(this).width() > 740) {
                nav.removeClass('opened');
                hamburger.removeClass('active')
            }
        });

        // init Isotope
        var $grid = $('.grid');
        $grid.isotope({
            layoutMode: 'fitRows',
            itemSelector: '.grid-item',
            percentPosition: true,
            fitRows: {
                gutter: 10
            }
        });

        // layout Isotope after each image loads
        $grid.imagesLoaded().progress( function() {
            $grid.isotope('layout');
        });
    });
})(jQuery);
