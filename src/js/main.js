//Ssroll bar vehicles
(function($) {
    $(window).on("load", function() {
        $("#vehicles-list").mCustomScrollbar();
    });
})(jQuery);

function move(value) {
    $("#vehicle-list").mCustomScrollbar('scrollTo', value, {
        scrollEasing: 'easeOut'
    })
}
$('.vehicle-nav-items a').click(function() {
    let id = $(this).attr('id');
    console.log(id);
    switch (id) {
        case "suv-nav":
            move('#suv')
            break;
        case "cars-nav":
            move('#cars')
            break;
        case "minivan-nav":
            move('#minivan')
            break;
        case "electrified-nav":
            move('#electrified')
            break;
        case "future-nav":
            move('#future')
            break;
        case "preowned-nav":
            move('#preowned')
            break;
    }
})

//Include active class for header navbar
$('.nav-link').click(function() {
    if ($(this).hasClass('active')) { $(this).removeClass('active') } else {
        $('.nav-link').removeClass('active');
        $(this).addClass('active')
    };
})

let temp = '';
$('.nav-link').click(function() {
        if (temp == '' && $(this).attr('id') === 'vehicle') {
            $('#vehicles-section').removeClass('d-none');
            $('#vehicles-section').addClass('animate__fadeInUp');
            temp = $(this).attr('id');
        } else if (temp == '' && $(this).attr('id') === 'shopping') {
            $('#shopping-tools').removeClass('d-none');
            $('#shopping-tools').addClass('animate__fadeInDown');
            temp = $(this).attr('id');
        } else if (temp == '' && $(this).attr('id') === 'owner') {
            $('#owner-content').removeClass('d-none');
            $('#owner-content').addClass('animate__fadeInDown');
            temp = $(this).attr('id');
        } else if (temp == '' && $(this).attr('id') === 'explore') {
            $('#explore-content').removeClass('d-none');
            $('#explore-content').addClass('animate__fadeInDown');
            temp = $(this).attr('id');
        } else {
            if (temp === $(this).attr('id')) {
                if ($(this).attr('id') === "vehicle") {
                    $('#vehicles-section').addClass('animate__fadeOutDown');
                    setTimeout(function() {
                        $('#vehicles-section').addClass('d-none');
                        $('#vehicles-section').removeClass('animate__fadeOutDown');
                    }, 300)

                    temp = '';
                } else if ($(this).attr('id') === "shopping") {
                    $('#shopping-tools').addClass('animate__fadeOutUp');
                    setTimeout(function() {
                        $('#shopping-tools').addClass('d-none');
                        $('#shopping-tools').removeClass('animate__fadeOutUp');
                    }, 300)
                    temp = '';
                } else if ($(this).attr('id') === "owner") {
                    $('#owner-content').addClass('animate__fadeOutUp');
                    setTimeout(function() {
                        $('#owner-content').addClass('d-none');
                        $('#owner-content').removeClass('animate__fadeOutUp');
                    }, 300)
                    temp = '';
                } else if ($(this).attr('id') === "explore") {
                    $('#explore-content').addClass('animate__fadeOutUp');
                    setTimeout(function() {
                        $('#explore-content').addClass('d-none');
                        $('#explore-content').removeClass('animate__fadeOutUp');
                    }, 300)
                    temp = '';
                }

            } else {
                if ($(this).attr('id') === "shopping") {
                    $('#vehicles-section').addClass('d-none');
                    $('#shopping-tools').removeClass('d-none');
                    $('#owner-content').addClass('d-none');
                    $('#explore-content').addClass('d-none');
                    temp = $(this).attr('id');

                }
                if ($(this).attr('id') === "vehicle") {
                    $('#shopping-tools').addClass('d-none');
                    $('#vehicles-section').removeClass('d-none');
                    $('#owner-content').addClass('d-none');
                    $('#explore-content').addClass('d-none');
                    temp = $(this).attr('id');
                }
                if ($(this).attr('id') === "owner") {
                    $('#shopping-tools').addClass('d-none');
                    $('#vehicles-section').addClass('d-none');
                    $('#owner-content').removeClass('d-none');
                    $('#explore-content').addClass('d-none');
                    temp = $(this).attr('id');
                }
                if ($(this).attr('id') === "explore") {
                    $('#shopping-tools').addClass('d-none');
                    $('#vehicles-section').addClass('d-none');
                    $('#owner-content').addClass('d-none');
                    $('#explore-content').removeClass('d-none');
                    temp = $(this).attr('id');
                }

            }
        }
    })
    //set up back to top function
var lastScrollTop = 0;
$(window).scroll(function(event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
        $('.back-to-top').css('transform', 'translateX(50px)')
    } else {
        $('.back-to-top').css('transform', 'translateX(0px)')
    }
    lastScrollTop = st;
    console.log(st);
});


$('.back-to-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 0);
    })
    //create rotate animate for collapse button in lg 
$('.navbar-toggler').click(function() {
    if ($('.navbar-toggler').hasClass('rotate')) {
        $('.navbar-toggler').removeClass('rotate')
    } else {
        $('.navbar-toggler').addClass('rotate')
    }
})