$(document).ready(function () {

  $('.current-title').click(function () {
    $(this).toggleClass('on');
    $('header .user-nav ul').slideToggle();
  });

  $('.share').click(function () {
    $(this).toggleClass('on');
    $(this).find('.sns').slideToggle();
  });
});