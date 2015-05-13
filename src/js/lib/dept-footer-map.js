//http://www.kingcounty.gov/~/media/scripts/dept-footer-map.js
(function($){
  'use strict';
  $.fn.footerMap = function( options ) {
    var $this = $(this);

    var settings = $.extend({
      address: '',
      height: 260,
      panByx : -130,
      panByy : -30,
      mapOptions : {
        zoom: 18,
        mapTypeId : google.maps.MapTypeId.SATELLITE,
        center: {lat: '', lng: ''},
        draggable: false,
        zoomControl: false,
        scrollwheel: false,
        disableDoubleClickZoom: true,
        disableDefaultUI: true
      }
    }, options);

    function loadGMap(mapOptions){
      $this.height(settings.height +'px');
      var map = new google.maps.Map($this[0], mapOptions);
      map.panBy(settings.panByx, settings.panByy);
      var $mapLink = $('#map-link');

      map.setTilt(45);
      var marker = new google.maps.Marker({
        position: mapOptions.center,
        map: map
      });
      
      $mapLink.attr('href', '//www.google.com/maps/dir//' + settings.address);
    }

    return this.each(function() {
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode( { 'address': settings.address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          settings.mapOptions.center.lat = results[0].geometry.location.lat();
          settings.mapOptions.center.lng = results[0].geometry.location.lng();
          loadGMap(settings.mapOptions);
        } else {
          console.log('Geocode was not successful for the following reason: ' + status);
        }
      });
    });//End return
  };
})(jQuery);