$(document).ready(function () {
    const swipers = $('.image-slider');

    if (swipers.length !== 0) {
        $(swipers).each(function () {

            let swiper = new Swiper(this, {
                loop: true,
                grabCursor: true,
                keyboardControl: true,

                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 16,
                        centeredSlides: false,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                },

                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
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
});