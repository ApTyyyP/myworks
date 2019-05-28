;(function ($) {
    $(function () {
        // Плавная прокрутка scroll по якорю
        $('a[href^="#"]').on('click', function (event) {
            // отменяем стандартное действие
            event.preventDefault();

            var sc = $(this).attr("href"),
                dn = $(sc).offset().top;
            /*
            * sc - в переменную заносим информацию о том, к какому блоку надо перейти
            * dn - определяем положение блока на странице
            */

            $('html, body').animate({scrollTop: dn}, 1000);

            /*
            * 1000 скорость перехода в миллисекундах
            */
        });

        // Кнопка "Вверх"
/*        $(document).ready(function () {
            $('body').append('<a href="#" id="go-top" title="Вверх"></a>');
        });

        $(function () {
            $.fn.scrollToTop = function () {
                $(this).hide().removeAttr("href");
                if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
                var scrollDiv = $(this);
                $(window).scroll(function () {
                    if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
                    else $(scrollDiv).fadeIn("slow")
                });
                $(this).click(function () {
                    $("html, body").animate({scrollTop: 0}, "slow")
                })
            }
        });

        $(function () {
            $("#go-top").scrollToTop();
        });*/

        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            layoutMode: 'masonry', // выбираем модификацию
            masonry: {
                columnWidth: 2
            },
            getSortData: {
                design: '.design',
                front: '.front',
                back: '.back',
                category: '.category'
            }
        });

        // bind filter button click
        $('#filters').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            // use filterFn if matches value
            filterValue = filterValue || filterValue;
            $grid.isotope({filter: filterValue});
        });

        // change is-checked class on buttons
        var buttonGroups = document.querySelectorAll('.button-group');
        for (var i = 0; i < buttonGroups.length; i++) {
            buttonGroups[i].addEventListener('click', onButtonGroupClick);
        }

        function onButtonGroupClick(event) {
            // only button clicks
            if (!matchesSelector(event.target, '.button')) {
                return;
            }
            var button = event.target;
            button.parentNode.querySelector('.is-checked').classList.remove('is-checked');
            button.classList.add('is-checked');
        }
    });
})(jQuery);