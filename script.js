$(function () {

    $('i').css('color', 'black');
    // $('i').css('font-size', '25px');

    $('.hon').hover(
        function () {
            $(this).addClass('faa-shake');
            $(this).addClass('animated');
            $(this).css('color', 'rgba(0,0,0,0.4)');
        },
        function () {
            $(this).removeClass('faa-shake');
            $(this).removeClass('animated');
            $(this).css('color', 'rgb(0,0,0)');
        }
    );



    // $('.nav-item a').hover(
    // function () {
    // $(this).css('color', 'rgba(0,0,0,0.3)');
    // },
    // function () {
    // $(this).css('color', 'rgb(0,0,0)');
    // }
    // );

    $('.ho ').hover(
        function () {
            $(this).addClass('faa-shake');
            $(this).addClass('animated');
            $(this).css('color', 'rgba(0,90,160,0.5)');
        },
        function () {
            $(this).removeClass('faa-shake');
            $(this).removeClass('animated');
            $(this).css('color', 'rgb(0,90,160)');
        }
    );

    $('.ho').css('color', 'rgb(0,90,160)');
    $('.hii').css('font-size', '20px')

    // $('.my_nav_link').hover(
    // function () {
    // 
    // $(this).css('color', 'rgba(0,0,0,0.1)');
    // },
    // function () {

    // $(this).css('color', 'black');
    // }
    // );

    var win = $(window);
    var nav = $('.st');
    var navPosi = $('.st').offset().top;
    win.on('scroll', function () {
        var scr = win.scrollTop();
        if (scr > navPosi) {
            nav.addClass('sticky');
        } else {
            nav.removeClass('sticky');
        }
    });

    $('#hitoo').css('padding', '0');

    // var su = $(window).$('.hito').index($('.active'));

    // $('.suz').text('sadssddf');

    // $('.hi').bxSlider({
    // pager: false,
    // auto: true,
    // controls: false,
    // mode: 'fade',
    // onSlideAfter: function ($slideElement) {
    // var sui = $slideElement.attr('data-a');

    // $('.suz').text(sui);


    // }
    // });


    var $sa = $('.sage');

    $('.nail').hover(
        function () {
            // var iti = $('.nail').offset().left;
            // var itii = $('.nail').offset().top;

            // $sa.css('position', 'absolute');
            // $sa.css('left', iti + 10);
            // $sa.css('top', itii + 50);

            $sa.slideDown();
        },
        function () {


            $sa.slideUp();
        }
    );







});
