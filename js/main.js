$(function () {
    $('a[href^="#"], a[data-href^="#"]').on('click', function (e) {
        e.preventDefault();
        var t = 500;
        var d = $(this).attr('data-href') ?
            $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({
            scrollTop: $(d).offset().top
        }, t);
    });

    $('.delicious__btn-1').click(function(){
        $('.delicious__btn').removeClass('active'),
        $('.delicious__menu-items').removeClass('active'),
        $('.delicious__menu-soupe').addClass('active'),
        $('.delicious__btn-1').addClass('active');
    });
    $('.delicious__btn-2').click(function(){
        $('.delicious__btn').removeClass('active'),
        $('.delicious__menu-items').removeClass('active'),
        $('.delicious__menu-pizza').addClass('active'),
        $('.delicious__btn-2').addClass('active');
    });
    $('.delicious__btn-3').click(function(){
        $('.delicious__btn').removeClass('active'),
        $('.delicious__menu-items').removeClass('active'),
        $('.delicious__menu-pasta').addClass('active'),
        $('.delicious__btn-3').addClass('active');
    });
    $('.delicious__btn-4').click(function(){
        $('.delicious__btn').removeClass('active'),
        $('.delicious__menu-items').removeClass('active'),
        $('.delicious__menu-desert').addClass('active'),
        $('.delicious__btn-4').addClass('active');
    });
    $('.delicious__btn-5').click(function(){
        $('.delicious__btn').removeClass('active'),
        $('.delicious__menu-items').removeClass('active'),
        $('.delicious__menu-wine').addClass('active'),
        $('.delicious__btn-5').addClass('active');
    });
    $('.delicious__btn-6').click(function(){
        $('.delicious__btn').removeClass('active'),
        $('.delicious__menu-items').removeClass('active'),
        $('.delicious__menu-beer').addClass('active'),
        $('.delicious__btn-6').addClass('action');
    });
    $('.delicious__btn-7').click(function(){
        $('.delicious__btn').removeClass('active'),
        $('.delicious__menu-items').removeClass('active'),
        $('.delicious__menu-drinks').addClass('active'),
        $('.delicious__btn-7').addClass('active');
    });


    $('.slider__items').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    });



})