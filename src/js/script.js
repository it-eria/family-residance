$(function() {
  $('.burger-button').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('clicked');
    $('.header__nav-section').fadeToggle(300);
  });
  $('.custom-select').niceSelect();
});

function iteriaWatermark() {
  console.log("            hMMMMMMMy       :MMMMMMMM`            ");
  console.log("            hMM                   yMM`            ");
  console.log("            hMM      /oooooo`     yMM`            ");
  console.log("            hMM      sdddddd`     yMM`            ");
  console.log("            hMM      sdddddd`     yMM`            ");
  console.log("            hMM      /oooooo`     yMM`            ");
  console.log("            hMM                   yMM`            ");
  console.log("            hMMMMMMMy       :MMMMMMMM`            ");
  console.log("                                                  ");
  console.log(".` .::::::::` -oooooo.  ooo++:    :.      /.      ");
  console.log("/-     :-     /+        m   `/m`  s:     /hd`     ");
  console.log("/-     :-     /+        m    `m-  s:    -d`:h     "); 
  console.log("/-     :-     /hoooo+   N+++yo-   s:   `m:``ys    ");
  console.log("/-     :-     /+        m   oy`   s:   do++++h/   ");
  console.log("/-     :-     /o        m    :d.  s:  yo     `m-  ");
  console.log(".`     ``     .//////\`  :     .:  -` `/       .: ");
}

// iteriaWatermark();

AOS.init();


// Google Maps
function initMap() {
  var markerPos = {lat: 49.840594, lng: 24.023675};
  var centerPos = {lat: markerPos.lat, lng: markerPos.lng - 0.001};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: centerPos,
    disableDefaultUI: true
  });
  
  var marker = new google.maps.Marker({
    position: markerPos,
    map: map,
    icon: 'assets/img/mapID.png',
    title: 'Family residence'
  });
}