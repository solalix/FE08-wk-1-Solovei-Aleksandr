$(function () {
   $('.menu-btn').click(function(){
      $('.menu-btn').toggleClass('active'),
      $('body').toggleClass('active'),
      $('.menu-list').toggleClass('active');
   });



})