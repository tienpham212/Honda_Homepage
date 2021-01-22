$(document).ready(function() {
    //Ssroll bar vehicles
    (function($) {
        $(window).on("load", function() {
            $("#vehicles-list , #vehicles-list-lg").mCustomScrollbar();
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
                $('body').addClass('overflow')
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
                        $('body').removeClass('overflow')
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
                        $('body').removeClass('overflow')
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
        //create rotae animate for collapse button in navbar sm
    $('#navbar-toggle-sm').click(function() {
            if ($('#navbar-toggle-sm').hasClass('active')) {
                $('#navbar-toggle-sm').removeClass('active')
            } else {
                $('#navbar-toggle-sm').addClass('active')
            }
        })
        //Stop scroll bar when collapse menu appear
    let tempNav = '';
    $('.collapse-navbar').click(function() {
            if (tempNav == '') {
                $('#header-menu-lg').removeClass('d-none');
                $('#header-menu-lg').addClass('animate__fadeInDown');
                $('body').addClass('overflow');
                tempNav = $(this).attr('id');
            } else {
                $('#header-menu-lg').addClass('animate__fadeOutUp');
                $('body').removeClass('overflow');
                setTimeout(function() {
                    $('#header-menu-lg').addClass('d-none');
                    $('#header-menu-lg').removeClass('animate__fadeOutUp');
                    $('.main-nav').removeClass('d-none');
                    $('.vehicles-nav-lg').addClass('d-none');
                    $('.shopping-tools-lg').addClass('d-none');
                    $('.owners-lg').addClass('d-none');
                    $('.explore-lg').addClass('d-none');

                }, 500);
                tempNav = '';



            }
        })
        //create slide menu for header 
    $('.nav-link-lg').click(function() {
            $('.main-nav').addClass('animate__fadeOut')
            setTimeout(function() {
                $('.main-nav').addClass('d-none');
                $('.main-nav').removeClass('animate__fadeOut');
            }, 300)
            if ($(this).hasClass('nav-link-vehicles')) {
                setTimeout(function() {
                    $('.vehicles-nav-lg').removeClass('d-none');
                    $('.vehicles-nav-lg').addClass('animate__fadeIn');
                }, 300)
                setTimeout(function() {
                    $('.vehicles-nav-lg').removeClass('animate__fadeIn');
                }, 500)
            }
            if ($(this).hasClass('nav-link-shopping')) {
                setTimeout(function() {
                    $('.shopping-tools-lg').removeClass('d-none');
                    $('.shopping-tools-lg').addClass('animate__fadeIn');
                }, 300)
                setTimeout(function() {
                    $('.shopping-tools-lg').removeClass('animate__fadeIn');
                }, 500)
            }
            if ($(this).hasClass('nav-link-owner')) {
                setTimeout(function() {
                    $('.owners-lg').removeClass('d-none');
                    $('.owners-lg').addClass('animate__fadeIn');
                }, 300)
                setTimeout(function() {
                    $('.owners-lg').removeClass('animate__fadeIn');
                }, 500)
            }
            if ($(this).hasClass('nav-link-explore')) {
                setTimeout(function() {
                    $('.explore-lg').removeClass('d-none');
                    $('.explore-lg').addClass('animate__fadeIn');
                }, 300)
                setTimeout(function() {
                    $('.explore-lg').removeClass('animate__fadeIn');
                }, 500)
            }
        })
        //create back button for menu lg
    $('.back').click(function() {
        $('.vehicles-nav-lg').addClass('animate__fadeOut');
        setTimeout(() => {
            $('.vehicles-nav-lg').addClass('d-none');
            $('.vehicles-nav-lg').removeClass('animate__fadeOut');
            $('.main-nav').removeClass('d-none');
            $('.main-nav').addClass('animate__fadeIn');
            setTimeout(() => {
                $('.main-nav').removeClass('animate__fadeIn');
            }, 200);

        }, 300);
        $('.shopping-tools-lg').addClass('animate__fadeOut');
        setTimeout(() => {
            $('.shopping-tools-lg').addClass('d-none');
            $('.shopping-tools-lg').removeClass('animate__fadeOut');
            $('.main-nav').removeClass('d-none');
            $('.main-nav').addClass('animate__fadeIn');
            setTimeout(() => {
                $('.main-nav').removeClass('animate__fadeIn');
            }, 200);

        }, 300);
        $('.owners-lg').addClass('animate__fadeOut');
        setTimeout(() => {
            $('.owners-lg').addClass('d-none');
            $('.owners-lg').removeClass('animate__fadeOut');
            $('.main-nav').removeClass('d-none');
            $('.main-nav').addClass('animate__fadeIn');
            setTimeout(() => {
                $('.main-nav').removeClass('animate__fadeIn');
            }, 200);

        }, 300);
        $('.explore-lg').addClass('animate__fadeOut');
        setTimeout(() => {
            $('.explore-lg').addClass('d-none');
            $('.explore-lg').removeClass('animate__fadeOut');
            $('.main-nav').removeClass('d-none');
            $('.main-nav').addClass('animate__fadeIn');
            setTimeout(() => {
                $('.main-nav').removeClass('animate__fadeIn');
            }, 200);

        }, 300);

    })

    //vehicle navbar
    $('#suv-link-lg').click(() => {
        $('#vehicles-section-lg').removeClass('d-none');
        $('.suv-lg').removeClass('d-none');
        $('.suv-lg').addClass('animate__fadeIn');
        $('.vehicles-nav-lg').addClass('d-none');


    })
    $('#cars-link-lg').click(() => {
        $('#vehicles-section-lg').removeClass('d-none');
        $('.cars-lg').removeClass('d-none');
        $('.cars-lg').addClass('animate__fadeIn');
        $('.vehicles-nav-lg').addClass('d-none');


    })
    $('#minivan-link-lg').click(() => {
        $('#vehicles-section-lg').removeClass('d-none');
        $('.minivan-lg').removeClass('d-none');
        $('.minivan-lg').addClass('animate__fadeIn');
        $('.vehicles-nav-lg').addClass('d-none');



    })
    $('#electricfied-link-lg').click(() => {
        $('#vehicles-section-lg').removeClass('d-none');
        $('.electrified-lg').removeClass('d-none');
        $('.electrified-lg').addClass('animate__fadeIn');
        $('.vehicles-nav-lg').addClass('d-none');



    })

    //back button vehicles
    $('.back-vehicle').click(function() {
        $('#vehicles-section-lg').addClass('d-none');
        $('.suv-lg').addClass('d-none');
        $('.cars-lg').addClass('d-none');
        $('.minivan-lg').addClass('d-none');
        $('.electrified-lg').addClass('d-none')

        $('.vehicles-nav-lg').removeClass('d-none');
    });

    //slidetoggle build up for navbar sm
    $('#navbar-toggle-sm').click(() => {
            $('#navbar-sm').slideToggle();
        })
        //arrow function k co this duoi la cach dung event
        // $('#navbar-sm li').click((e) => {
        //     $('.carousel-indicators-sm-header-text span').html();
        //     $('#navbar-sm').slideUp();
        //     console.log($(e.target).html());


    // })
    $('#navbar-sm li').click(function() {
        $('.carousel-indicators-sm-header-text span').html($(this).html());
        $('#navbar-sm').slideUp();


    })

    //match prev next click to content
    let countVehicle = 0;
    $('.carousel-control-prev').click(function() {
        if (countVehicle == 0) {
            countVehicle = 4
        } else {
            countVehicle--;
        }

        $('#navbar-sm li').each(function(i) {
            if (i == countVehicle) {
                $(this).addClass('active');
                $('.carousel-indicators-sm-header-text span').html($(this).html());
            }
        })
    })
    $('.carousel-control-next').click(function() {
        if (countVehicle == 4) {
            countVehicle = 0
        } else {
            countVehicle++;
        }

        $('#navbar-sm li').each(function(i) {
            if (i == countVehicle) {
                $(this).addClass('active');
                $('.carousel-indicators-sm-header-text span').html($(this).html());
            }
        })
    })



});