(function () {
    'use strict'
    const forms = document.querySelectorAll('.requires-validation')
    Array.from(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});

$(function () {
    let filter = $('[data-filter]');

    filter.on('click', function (event) {
        // Отменяем стандартное поведение ссылки
        event.preventDefault();

        let make = $(this).data('filter'); // сохраняем значение аттрибута filter в dropdown

        console.log(make);

        if (make == 'make') {
            $('[data-make]').removeClass('hide_make')
        } else {
            $('[data-make]').each(function () {
                let workMake = $(this).data('make');

                if (workMake != make) {
                    $(this).addClass('hide_make');
                } else {
                    $(this).removeClass('hide_make');
                }
            });
        }
    });
});

// // init Isotope
// var $grid = $('#product-list').isotope({
//     // options
// });
// //filter items on button click
// $('.filter-button-group').on( 'click', 'li', function() {
//     event.preventDefault();
//
//     let filterValue = $(this).attr('data-filter');
//
//     if (filterValue == '.all') {
//         console.log(filterValue);
//     }
//
//     console.log(filterValue);
//     $grid.isotope({ filter: filterValue });
// });

// // Инициализая секции с которой работаем
// let grid = new Isotope('#product-list', {
//     itemSelector: '.grid-item',
//     layoutMode: 'fitRows'
// });
//
// // Работаем с кнопками фильтров
// let filterBtn = document.querySelectorAll('.filters-button .filter-btn');
// for (let i = 0; i < filterBtn.length; i++) {
//     // Если кликнули по ссылке
//     filterBtn[i].onclick = function (click) {
//         // Отменяем переход
//         click.preventDefault();
//         // Получаем значение дата-атрибута кнопки
//         let filterData = event.target.getAttribute('data-filter');
//         // Применяем фильтрацию элементов в Isotope
//         grid.arrange({
//             filter: filterData
//         });
//     };
// }
