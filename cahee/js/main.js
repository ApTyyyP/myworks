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
            isResizable: true,
            percentPosition: true,
            fitRows: {
                gutter: 15
            }
        });

        // layout Isotope after each image loads
        $grid.imagesLoaded().progress( function() {
            $grid.isotope('layout');
        });

/*        $grid.masonry({
            // указываем элемент-контейнер в котором расположены блоки для динамической верстки
            itemSelector: '.grid-item',
            // указываем класс элемента являющегося блоком в нашей сетке
            singleMode: false,
            // true - если у вас все блоки одинаковой ширины
            isResizable: true,
            // перестраивает блоки при изменении размеров окна
            isAnimated: true,
            // анимируем перестроение блоков
            animationOptions: {
                queue: false,
                duration: 500
            },
            columnWidth: '.grid-sizer',
            // gutter: 15
        });*/

        // layout Isotope after each image loads
        $grid.imagesLoaded().progress( function() {
            $grid.isotope('layout');
        });
    });
})(jQuery);
