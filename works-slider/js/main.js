;(function($){
    $(function(){
        $('.slider-1').slick({
            dots: false, // показ/скрытие навигационных точек под слайдером
            autoplay: false, // автовоспроизведение
            autoplaySpeed: 1000, // скорость переключения
            pauseOnHover: false, // слайдер не останавливается при наведении мышки
            infinite: true, // бесконечное прокручивание (зацикливание)
            variableWidth: true, // отключает автоматический расчет ширины слайда
            edgeFriction: 0.2, // сопротивление при смахивании краев бесконечной карусели
            draggable: true, // перетаскивание слайда мышкой
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        dots: false,
                        infinite: true,
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        dots: false,
                        infinite: true,
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        dots: false,
                        slidesToShow: 1
                    }
                }
            ],
            centerMode: false
        });
    });
})(jQuery);