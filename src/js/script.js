$(function() {
  $('.burger-button').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('clicked');
    $('.header__nav-section').fadeToggle(300);
  });
  $('.custom-select, select').niceSelect();

  $('input[name="taxi-service"]:checked').parent().addClass('selected');

  $('input[name="taxi-service"]').on('change', function() {
    $('input[name="taxi-service"]').parent().removeClass('selected');
    $(this).parent().addClass('selected');
  });

  $('body').removeAttr('class');
});

AOS.init();


