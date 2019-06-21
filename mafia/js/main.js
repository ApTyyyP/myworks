;(function ($) {
    $(function () {

        // jQuery to collapse the navbar on scroll
        $(window).on('scroll', function () {
            if ($(".navbar").offset().top > 180) {
                $(".navbar-fixed-top").addClass("top-nav-collapse");
            } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
            }
        });

        // jQuery for page scrolling feature - requires jQuery Easing plugin
        $(function () {
            $('a[href^="#"]').bind('click', function (event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        });

        // Video Popup  //
        $('.video-popup').magnificPopup({
            type: 'video'
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

            if ($.fn.isotope) {
                $(".isotop-active").isotope({
                    filter: '*'
                });

                $('.works-menu ul li').on('click', function() {
                    $(".works-menu ul li").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr('data-filter');
                    $(".isotop-active").isotope({
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