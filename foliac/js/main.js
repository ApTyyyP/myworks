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

        // Isotope
        $('.grid').isotope({
            itemSelector: '.grid-item',
            masonry: {
                columnWidth: 200
            }
        });

        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.element-item',
            layoutMode: 'fitRows',
            getSortData: {
                design: '.design',
                front: '.front',
                back: '.back',
                category: '.category'
            }
        });

        // filter functions
        var filterFns = {
            // show if number is greater than 50
            numberGreaterThan50: function () {
                var number = $(this).find('.number').text();
                return parseInt(number, 10) > 50;
            },
            // show if name ends with -ium
            ium: function () {
                var name = $(this).find('.name').text();
                return name.match(/ium$/);
            }
        };

        // bind filter button click
        $('#filters').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            // use filterFn if matches value
            filterValue = filterFns[filterValue] || filterValue;
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