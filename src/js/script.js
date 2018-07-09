$( document ).ready(function() { 
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




  var currentDate = new Date();
  var endDate = new Date();
  endDate.setDate(currentDate.getUTCDate() + 7);
  
  $("#f-date-from").datepicker();
  $("#f-date-to").datepicker();
  $("#f-date-from").datepicker("setDate", currentDate);
  $("#f-date-to").datepicker("setDate", endDate);
  
  $('#f-date-from').val($('#f-date-from').val().split('/').join('.'));
  $('#f-date-to').val($('#f-date-to').val().split('/').join('.'));


  

  

  $(document).on('click', '#minImg', function() {
    var attr = $(this).attr('src');
    var src = $('#maxImg').attr('src');
    $('#maxImg').attr('src', attr);
  });


  $('#title').click(function(){ 
    $("#f-select-2 option:contains('"+$(this).text()+"')").attr("selected",true);
    $("#f-select-2").selectmenu('refresh', true);
  });



 
  ( function( factory ) {
    if ( typeof define === "function" && define.amd ) {
  
      // AMD. Register as an anonymous module.
      define( [ "../widgets/datepicker" ], factory );
    } else {
  
      // Browser globals
      factory( jQuery.datepicker );
    }
  }( function( datepicker ) {
  
  datepicker.regional.uk = {
    closeText: "Закрити",
    prevText: "&#x3C;",
    nextText: "&#x3E;",
    currentText: "Сьогодні",
    monthNames: [ "Січень","Лютий","Березень","Квітень","Травень","Червень",
    "Липень","Серпень","Вересень","Жовтень","Листопад","Грудень" ],
    monthNamesShort: [ "Січ","Лют","Бер","Кві","Тра","Чер",
    "Лип","Сер","Вер","Жов","Лис","Гру" ],
    dayNames: [ "неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота" ],
    dayNamesShort: [ "нед","пнд","вів","срд","чтв","птн","сбт" ],
    dayNamesMin: [ "Нд","Пн","Вт","Ср","Чт","Пт","Сб" ],
    weekHeader: "Тиж",
    dateFormat: "dd.mm.yy",
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: "" };
  datepicker.setDefaults( datepicker.regional.uk );
  
  return datepicker.regional.uk;
  
  } ) );
  
});

AOS.init();


