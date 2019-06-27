;(function ($) {
    $(function () {

        // hamburger-menu
        var hamburger = $('.hamburger'),
            nav = $('#nav');
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

        if ($.fn.onePageNav) {
            $(nav).onePageNav({});
        }

        // Scroll //
        $('a[data-href]').on('click', function () {
            var href = $(this).data('href');
            if(href === '#rules-2'){
                $('html, body').animate({
                    scrollTop: $('#rules-2').offset().top}, 1000);
            } else {
                $('nav a[href="' + href + '"]').click();
            }
        });

/*        $('li a, [data-href="#gallery"]').on('click', function () {
            var $this = $(this),
                i = $this.data('href');
            $this
                .addClass('active')
                .closest('li')
                .siblings()
                .find('a')
                .removeClass('active');
            var top = $('header[data-href="' + i + '"], ' +
                        'section[data-href="' + i + '"]')
                .offset().top;

            $('html, body').animate({
                scrollTop: top}, 1500);
        });

        $(window).scroll(function() {
            var scrollDistance = $(window).scrollTop();

            // Assign active class to nav links while scolling
            $('.page-section').each(function() {
                if ($(this).position().top <= scrollDistance) {
                    $('.nav a[data-href="' + $(this).data('href') + '"]')
                        .addClass('active')
                        .closest('li')
                        .siblings()
                        .find('a')
                        .removeClass('active');
                }
            });
        });*/

        // jQuery to collapse the navbar on scroll
        $(window).on('scroll', function () {
            if ($(".navbar").offset().top > 180) {
                $(".navbar-fixed-top").addClass("top-nav-collapse");
            } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
            }
        });

        // Video Popup  //
        $('.video-popup').magnificPopup({
            type: 'video'
        });

        // Counter Up  //
        $(document).ready(function($) {
            $("span.counter").counterUp({
                delay: 75, /* The delay in milliseconds per number count up */
                time: 3000, /* The total duration of the count up animation */
                offset: 100
                /* The viewport percentile from which the counter starts (by default it's 100, meaning it's triggered at the very moment the element enters the viewport) */
            });
        });

        // Wow JS //
        var wow = new WOW(
            {
                boxClass:     'wow',      // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset:       0,          // distance to the element when triggering the animation (default is 0)
                mobile:       false,       // trigger animations on mobile devices (default is true)
                live:         true,       // act on asynchronously loaded content (default is true)
                callback:     function(box) {
                    // the callback is fired every time an animation is started
                    // the argument that is passed in is the DOM node being animated
                },
                scrollContainer: null // optional scroll container selector, otherwise use window
            }
        );
        wow.init();

        // Isotop JS //
        $(window).on('load', function() {

            var $isotope = $('.isotop-active');
            if ($.fn.isotope) {
                $isotope.isotope({
                    filter: '*'
                });

                $('.works-menu ul li').on('click', function() {
                    $(".works-menu ul li").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr('data-filter');
                    $isotope.isotope({
                        layoutMode: 'fitRows',
                        itemSelector: '.albums',
                        filter: selector,
                        animationOptions: {
                            duration: 750,
                            easing: 'easeOutCirc',
                            queue: false
                        }
                    });
                    return false;
                });
            }
        });
    });
})(jQuery);