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

    // Scroll
    $('a[data-href]').on('click', function () {
        let href = $(this).data('href');

        if(href === '#events'){
            $('html, body').animate({
                scrollTop: $('#events').offset().top}, 1000);
        } else if(href === '#gallery'){
            $('html, body').animate({
                scrollTop: $('#gallery').offset().top}, 1000);
        } else if(href === '#contact'){
            $('html, body').animate({
                scrollTop: $('#contact').offset().top}, 1000);
        }
        else {
            $('a[href="' + href + '"]').click();
        }
    });

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
            email: "Будь-ласка, введіть дійсну адресу email",
            phone: "Будь-ласка, введіть ваш номер телефону",
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function(form) {
            form.submit();
        }
    });
});