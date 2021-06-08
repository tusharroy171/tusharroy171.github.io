
/*  Theme Name: Airton -Responsive Bootstrap 4 Landing Template
    Author: VBThemes
    Version: 1.0.0
    Created:August 2018
    File Description:Main JS file of the template
*/


$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".sticky").addClass("stickyadd");
    } else {
        $(".sticky").removeClass("stickyadd");
    }
});


$('.navbar-nav a').on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 0
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});


$("#navbarCollapse").scrollspy({
    offset: 20
});

 $("#owl-demo").owlCarousel({
    autoPlay: 3000,
    stopOnHover: true,
    navigation: false,
    paginationSpeed: 1000,
    goToFirstSpeed: 2000,
    singleItem: true,
    autoHeight: true,
});

$(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
        $('.back_top_angle_up').fadeIn();
    } else {
        $('.back_top_angle_up').fadeOut();
    }
});
$('.back_top_angle_up').on('click', function() {
    $("html, body").animate({
        scrollTop: 0
    }, 1000);
    return false;
});

$('.img-zoom').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    mainClass: 'mfp-fade',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
    }
});

 $('.blog_play').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

 $(window).on('load', function() {
    var $container = $('.work-filter');
    var $filter = $('#menu-filter');
    $container.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }
    });

    $filter.find('a').on("click", function() {
        var selector = $(this).attr('data-filter');
        $filter.find('a').removeClass('active');
        $(this).addClass('active');
        $container.isotope({
            filter: selector,
            animationOptions: {
                animationDuration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });
});

var a = 0;
$(window).on('scroll',function() {
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter_value').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },
                {
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        a = 1;
    }
});