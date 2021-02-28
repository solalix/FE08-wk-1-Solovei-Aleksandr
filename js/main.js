$(function () {
   $('.menu-btn').click(function(){
      $('.menu-btn').toggleClass('active'),
      $('body').toggleClass('active'),
      $('.menu-list').toggleClass('active');
   });

   $('.tabs-btr-1').click(function(){
      $('.slider-tabs__item').removeClass('active'),
      $('.tabs-btr-1').addClass('active'),
      $('.slider-content-item').removeClass('active'),
      $('.slider-content-item-1').addClass('active');
   });

   $('.tabs-btr-2').click(function(){
      $('.slider-tabs__item').removeClass('active'),
      $('.tabs-btr-2').addClass('active'),
      $('.slider-content-item').removeClass('active'),
      $('.slider-content-item-2').addClass('active');
   });

   $('.tabs-btr-3').click(function(){
      $('.slider-tabs__item').removeClass('active'),
      $('.tabs-btr-3').addClass('active'),
      $('.slider-content-item').removeClass('active'),
      $('.slider-content-item-3').addClass('active');
   });




})