/*
import Swiper, {Navigation, Pagination, Autoplay, A11y, Keyboard, Parallax} from 'src/js/swiper';
import 'swiper/css/bundle';

$(document).ready(function () {
    const swipers = $('.JS-slider');

    if (swipers.length !== 0) {
        $(swipers).each(function () {
            const pagEl = $(this).siblings('.swiper-panel').find('.swiper-panel__text')[0];
            const nextEl = $(this).siblings('.swiper-panel').find('.swiper-btn-next')[0];
            const prevEl = $(this).siblings('.swiper-panel').find('.swiper-btn-prev')[0];

            let swiper = new Swiper(this, {
                modules: [Navigation, Pagination, Autoplay, A11y, Keyboard, Parallax],
                loop: true,
                grabCursor: true,
                spaceBetween: 30,
                autoHeight: false,
                keyboardControl: true,
                parallax: true,

                navigation: {
                    nextEl: nextEl,
                    prevEl: prevEl,
                },

                pagination: {
                    el: pagEl,
                    paginationClickable: true,
                    type: "fraction",
                    renderFraction: function (currentClass, totalClass, index, total) {
                        return '<span class="' + currentClass + '"> ' + index + ' </span>' +
                            '/' +
                            '<span class="' + totalClass + '"> ' + total + ' </span>';
                    },
                },

                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },

                a11y: {
                    enabled: true,
                    prevSlideMessage: 'Previous slide',
                    nextSlideMessage: 'Next slide',
                    firstSlideMessage: 'This is the first slide',
                    lastSlideMessage: 'This is the last slide',
                    paginationBulletMessage: 'Go to slide {{index}}',
                    notificationClass: 'swiper-notification',
                },

                keyboard: {
                    enabled: true,
                    onlyInViewport: true,
                    pageUpDown: true,
                },
            });
        });
    }
});*/
