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
        // $(document).ready(function($) {
        //     $("span.counter").counterUp({
        //         delay: 75, /* The delay in milliseconds per number count up */
        //         time: 3000, /* The total duration of the count up animation */
        //         offset: 100
        //         /* The viewport percentile from which the counter starts (by default it's 100, meaning it's triggered at the very moment the element enters the viewport) */
        //     });
        // });

        // Wow JS //
        var wow = new WOW(
            {
                boxClass:     'wow',      // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
                animateClass: 'animated', // класс для анимации элемента (по умолчанию, animated)
                offset:       0,          // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
                mobile:       true,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
                live:         true,       // поддержка асинхронно загруженных элементов (по умолчанию, включена)
                callback:     function(box) {
                    // функция срабатывает каждый раз при старте анимации
                    // аргумент box — элемент, для которого была запущена анимация
                },
                scrollContainer: null // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
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

// Counter UP
$(function () {

    // when user react the counter area the event start
    $(".counter-area").waypoint(function (direction) {
        // set the direction only scroll down
        if (direction === "down") {

            // select the counter DOM and loop ove the counter and call a function
            $(".counter").each(function () {

                // define the counter selector with this
                var $this = $(this);

                // collect the counter number and store with a variable
                var counterNumber = $this.attr("data-count");

                // store the initial number to an object and animate with the counter number
                $({
                    counterInit: $this.text()
                }).animate({
                    counterInit: counterNumber
                }, {
                    delay: 75, /* The delay in milliseconds per number count up */
                    // animate function duration property
                    duration: 4000,
                    // animation function
                    easing: 'linear',
                    // animate function step property
                    step: function () {
                        //output the counter number with calculating
                        $this.text(Math.ceil(this.counterInit));
                    },
                    // animate function complete step
                    complete: function () {
                        // show the last counter value
                        $this.text(this.counterNumbercountNum);
                    }
                })

            }); // end counter

        } // end if

    },{
        offset:"80%"
    });
});

function initMap() {

    var coords = {lat: 48.7423164, lng: 37.5936949},
        container = document.getElementById('map'),
        content = container.innerHTML,
        image = "./img/gun_map.png",
        directionsService = new google.maps.DirectionsService,
        directionsDisplay = new google.maps.DirectionsRenderer,
        map = new google.maps.Map(container, {
            center: coords,
            zoom: 18
        });

    marker = new google.maps.Marker({
        position: coords,
        map: map,
        icon: image,
        animation: google.maps.Animation.BOUNCE
    })

    infowindow = new google.maps.InfoWindow({
        content: content
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });

    var onChangeHandler = function() {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
    };
    document.getElementById('button').addEventListener('click', onChangeHandler);
    directionsDisplay.setMap(map);
}