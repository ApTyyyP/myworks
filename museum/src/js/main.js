"use strict";

// Wait for the DOM to be ready
$(function() {
    // jQuery to collapse the navbar on scroll
    $(window).on('scroll', function () {
        if ($(".o-header").offset().top > 80) {
            $(".o-header").addClass("top-collapse");
        } else {
            $(".o-header").removeClass("top-collapse");
        }
    });

    // Burger menu
    const iconMenu = document.querySelector('.c-nav__menu-btn');
    const menuBox = document.querySelector('.c-nav__menu-body');

    if (iconMenu) {
        iconMenu.addEventListener("click", function (e) {
            iconMenu.classList.toggle('active');
            menuBox.classList.toggle('active');
        })
    }

    // Smooth scroll and pageup
    $(window).scroll(function () {
        if ($(this).scrollTop() > 970 ) {
            $('.c-arrow-up').fadeIn();
        } else {
            $('.c-arrow-up').fadeOut();
        }
    });

    $("a[href^='#']").click(function () {
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1000);
        return false;
    });

    const verticalLinks = document.querySelectorAll('.s-main__vertical-link[data-href]');
    const menuLinks = document.querySelectorAll('.c-nav__menu-item[data-href]');

    function linkScroll(link) {
        if (link.length > 0) {
            link.forEach(item => {
                item.addEventListener("click", onVerticalLinkClick);
            });

            function onVerticalLinkClick(e) {
                const item = e.target;

                if (item.dataset.href && document.querySelector(item.dataset.href)) {
                    const hrefBlock = document.querySelector(item.dataset.href);
                    const hrefBlockValue = hrefBlock.getBoundingClientRect().top + pageYOffset - 100;

                    if (iconMenu.classList.contains('active')) {
                        iconMenu.classList.remove('active');
                        menuBox.classList.remove('active');
                    }

                    window.scrollTo({
                        top: hrefBlockValue,
                        behavior: "smooth"
                    });
                    e.preventDefault();
                }
            }
        }
    }

    linkScroll(verticalLinks);
    linkScroll(menuLinks);

    // Phone mask
    $('#phone[data-inputmask-mask]').inputmask();

    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='registration']").validate({
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            email: {
                required: true,
                // Specify that email should be validated
                // by the built-in "email" rule
                email: true
            },
            phone: "required",
            lastname: "required",
        },
        // Specify validation error messages
        messages: {
            email: "Будь-ласка, введіть дійсну адресу e-mail",
            phone: "Будь-ласка, введіть ваш номер телефону",
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function(form) {
            form.submit();
        }
    });
});