$( document ).ready(function() {
  var roomType;
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

  $('.item-serv').matchHeight({
      byRow: false,
      property: 'height',
      target: null,
      remove: false
  });


  $('#requestModal').on('shown.bs.modal', function (e) {
    $("html").addClass("modal-open");
  });

  $('#requestModal').on('hidden.bs.modal', function (e) {
    $("html").removeClass("modal-open");
  });
    

  $('.btn').on('click', function() {
    roomType = $(this).attr('data-room-type');
    $('.f-select-2').find('option[value="'+ roomType +'"]').attr('selected', true);
    $('select').niceSelect('update');
  });

  var currentDate = new Date();
  var endDate = new Date();
  endDate.setDate(currentDate.getUTCDate() + 7);
  
  $("#f-date-from").datepicker();
  $("#f-date-to").datepicker();
  $("#f-date-from").datepicker("setDate", currentDate);
  $("#f-date-to").datepicker("setDate", endDate);
  
  $('#f-date-from').val($('#f-date-from').val().split('/').join('.'));
  $('#f-date-to').val($('#f-date-to').val().split('/').join('.'));

  $('.minImg').on('click', function() {
    var attr = $(this).attr('src');
    var src = $('#maxImg').attr('src');
    $('#maxImg').attr('src', attr);
  });


});

AOS.init();


