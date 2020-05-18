// Navbars fixed
$('#sticky-section').waypoint(function (direction) {
    if (direction === 'down') {
        $('#main-navbar').addClass("fixed-top");
        $('#main-navbar').removeClass("bottom-navbar");
    } else {
        $('#main-navbar').removeClass("fixed-top");
        $('#main-navbar').addClass("bottom-navbar");
    }
});

// Animation for the toggle navigation bar
$(".menu-icon, .navbar-collapse a.nav-link").on("click", function () {

    let arr = ['firstLink', 'secondLink', 'thirdLink', 'forthLink'];
    let buttonId = $(this).attr('id');
    if (jQuery.inArray(buttonId, arr) !== -1) {
        $('.navbar-collapse').toggleClass('open');
    }
    if ($(".bottom-close").hasClass("clicked")) {
        $(".bottom-close").toggleClass("clicked");
        setTimeout(function () {
            $(".top-close").toggleClass("clicked");
        }, 125);
        $('header').toggleClass('position-fixed');
    }
    else {
        $(".bottom-bar").toggleClass("clicked");
        setTimeout(function () {
            $(".top-bar").toggleClass("clicked");
        }, 125);
        setTimeout(function () {
            $('header').toggleClass('position-fixed');
        }, 700);

    }

    setTimeout(function () {
        $(".menu-icon a:first-child").toggleClass("d-none");
        $(".menu-icon a:first-child").toggleClass("d-visible");
        $(".menu-icon a:last-child").toggleClass("d-none");
        $(".menu-icon a:last-child").toggleClass("d-visible");
        setTimeout(function () {
            if (jQuery.inArray(buttonId, arr) == -1) { $('.navbar-collapse').toggleClass('open'); }
            $('.navbar-collapse .bg-img').toggleClass('open');
            $(".menu-icon a.d-visible span:first-child").toggleClass("clicked");
            setTimeout(function () {
                $(".menu-icon a.d-visible span:last-child").toggleClass("clicked");
                $('#firstLink').toggleClass('slide');
                setTimeout(function () {
                    $('#secondLink').toggleClass('slide');
                    setTimeout(function () {
                        $('#thirdLink').toggleClass('slide');
                        setTimeout(function () {
                            $('#forthLink').toggleClass('slide');
                        }, 125);
                        setTimeout(function () {
                            $('.navbar-collapse .logo-button').toggleClass('slide');
                        }, 125);
                        setTimeout(function () {
                            $('.logo-button + ul .nav-link').toggleClass('slide');
                        }, 125);
                        setTimeout(function () {
                            $('.navbar-collapse .info').toggleClass('slide');
                        }, 125);
                    }, 125);
                }, 125);

            }, 125);

        }, 125);
    }, 300);
});