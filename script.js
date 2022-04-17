$(function () {

    $('i').css('color', 'black');
    // $('i').css('font-size', '25px');
    $('.hon').css('color', 'rgb(0,90,160)');

    $('.hon').hover(
        function () {
            $(this).addClass('faa-shake');
            $(this).addClass('animated');
            $(this).css('color', 'rgba(0,90,160,0.4)');
        },
        function () {
            $(this).removeClass('faa-shake');
            $(this).removeClass('animated');
            $(this).css('color', 'rgb(0,90,160)');
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
            // $('body').addClass('evi');
            // $('body').addClass('headd');
        } else {
            nav.removeClass('sticky');
        }
    });

    $('#hitoo').css('padding', '0');

    // win.scroll(function () {
    // $('.evi').css('dispaly', 'none');
    // $('.evi').css('position', 'absolute');
    // $('.evi').css('top', 0);
    // $('.evi').css('right', 0);
    // $('.evi').css('bottom', 0);
    // $('.evi').css('left', 0);
    // });


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

    $('.my_nav_link').hover(
        function () {
            // var iti = $('.nail').offset().left;
            // var itii = $('.nail').offset().top;

            // $sa.css('position', 'absolute');
            // $sa.css('left', iti + 10);
            // $sa.css('top', itii + 50);
            $(this).css('color', 'rgba(0, 90, 160,0.3)');
            // $(this).css('opacity', '1');

            if ($(this).hasClass('nail')) {
                $('.sage').slideDown();
                $('.my_nav_link').css('color', 'red');
            }
        },
        function () {

            $(this).css('color', 'rgb(0, 90, 160)');
            // $(this).slideUp('opacity', '0');

            if ($(this).hasClass('nail')) {
                $('.sage').slideUp();
            }
        }
    );





    var $sa = $('.sage');

    $('.nail').hover(
        function () {
            // var iti = $('.nail').offset().left;
            // var itii = $('.nail').offset().top;

            // $sa.css('position', 'absolute');
            // $sa.css('left', iti + 10);
            // $sa.css('top', itii + 50);

            $sa.slideDown();
            $('.sage a').css('color', 'rgb(0, 90, 160)');
            $('.sage a').css('z-index', '20');
            $('.sa').hover(
                function () {
                    $(this).css('color', 'rgba(0, 90, 160,0.3)');
                },
                function () {
                    $(this).css('color', 'rgb(0, 90, 160)');
                }
            );

        },
        function () {

            $('.sage a').css('color', 'rgb(0, 90, 160)');
            $sa.slideUp();

        }
    );





    win.resize(function () {
        var w = win.width();
        var x = 375;
        if (w <= x) {
            $('.stimg').css(
                'height', ' 5vh'


            );

            $('.head').removeClass('headd');

            $('.setu').css('position', 'none');


        } else {
            $('.stimg').css(
                'height', ' 15vh'
            );

            $('.head').addClass('headd');

        }
    });

    $('.barger').css('position', 'absolute');
    $('.barger').css('top', '0');
    $('.barger').css('right', '0.5em');

    $(function () {
        if (window.matchMedia("(max-width: 675px)").matches) {
            $('.stimg').css(
                'height', ' 5vh'
            );

            $('copy_right').css('font-size', '7px');

            // $('.head').removeClass('headd');
            $('.oyanavtati .head').css('display', 'block');
            $('.oyanavtati .head').css('height', 'auto');
            $('.oyanavtati').css('height', '5.9em');
            // $('.head').css('display', 'block');

            $('.stimg').css(
                'z-index', ' 4'
            );
            $('.se').removeClass('setu');

        } else {
            $('.stimg').css(
                'height', ' 15vh'
            );

            // $('.head').addClass('headd');

            $('.oyanavtati').css('height', '2.9em');

            $('.se').addClass('setu');


        };

    });




    $('.barger').click(function () {

        // var $answer = $(this).find('.answer');

        if ($('.evi').hasClass('headd')) {

            $('.evi').removeClass('headd');
            $('.evi').css('background-color', 'rgba(255,255,255,0)');
            $('.evi').slideUp();
            // $answer.slideUp();
            // $(this).find('span').text('+');
        } else {

            $('.evi').addClass('headd');
            $('.evi').css('background-color', 'rgba(255,255,255,0.85)');
            // $answer.slideDown();
            // $(this).find('span').text('-');
            $('.evi').slideDown();
        }
    });



    // $('.oyanavtati').hover(

    // function () {
    // $('.evi').css('background-color', 'rgba(255,255,255,0.95)');
    // $('.headd').css('background-color', 'rgba(255,255,255,0.95)');
    // },
    // function () {

    // $('.evi').css('background-color', 'rgba(255,255,255,0)');
    // $('.headd').css('background-color', 'rgba(255,255,255,0)');
    // }
    // );




});
