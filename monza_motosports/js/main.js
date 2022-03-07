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

        setTimeout((function () {
            if (make === 'make') {
                $('[data-make]').removeClass('hide_make')
            } else {
                $('[data-make]').each(function () {
                    let workMake = $(this).data('make');

                    if (workMake !== make) {
                        $(this).addClass('hide_make');
                    } else {
                        $(this).removeClass('hide_make');
                    }
                });
            }
        }), 400);
    });
});

document.querySelector('#publication-sort-desc').onclick = function() {
    mySortDescPublication('data-publication');
}

document.querySelector('#price-sort-asc').onclick = function() {
    mySortAsc('data-price');
}

document.querySelector('#price-sort-desc').onclick = function() {
    mySortDesc('data-price');
}

document.querySelector('#mileage-sort-asc').onclick = function() {
    mySortAsc('data-mileage');
}

document.querySelector('#mileage-sort-desc').onclick = function() {
    mySortDesc('data-mileage');
}

document.querySelector('#performance-sort-asc').onclick = function() {
    mySortAsc('data-perfomance');
}

document.querySelector('#performance-sort-desc').onclick = function() {
    mySortDesc('data-perfomance');
}

let js_sort_container = document.querySelector('#js-sort-container');

function mySortAsc(sortType) {
    setTimeout((function () {
        for (let i = 0; i < js_sort_container.children.length; i++) {
            for (let j = i; j < js_sort_container.children.length; j++) {
                if (parseInt(js_sort_container.children[i].getAttribute(sortType)) > parseInt(js_sort_container.children[j].getAttribute(sortType))) {
                    replacedNode = js_sort_container.replaceChild(js_sort_container.children[j], js_sort_container.children[i]);
                    insertAfter(replacedNode, js_sort_container.children[i]);
                }
            }
        }
    }), 400);
}

function mySortDesc(sortType) {
    setTimeout((function () {
        for (let i = 0; i < js_sort_container.children.length; i++) {
            for (let j = i; j < js_sort_container.children.length; j++) {
                if (parseInt(js_sort_container.children[i].getAttribute(sortType)) < parseInt(js_sort_container.children[j].getAttribute(sortType))) {
                    replacedNode = js_sort_container.replaceChild(js_sort_container.children[j], js_sort_container.children[i]);
                    insertAfter(replacedNode, js_sort_container.children[i]);
                }
            }
        }
    }), 400);
}

function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

function mySortDescPublication(sortType) {
    setTimeout((function () {

        for (let i = 0; i < js_sort_container.children.length; i++) {
            for (let j = i; j < js_sort_container.children.length; j++) {
                if (Date.parse(js_sort_container.children[i].getAttribute(sortType)) < Date.parse(js_sort_container.children[j].getAttribute(sortType))) {
                    replacedNode = js_sort_container.replaceChild(js_sort_container.children[j], js_sort_container.children[i]);
                    insertAfter(replacedNode, js_sort_container.children[i]);
                }
            }
        }
        // console.log(js_sort_container.children[0].dataset['publication']);
    }), 400);
}