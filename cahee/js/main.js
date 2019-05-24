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
    });
})(jQuery);
