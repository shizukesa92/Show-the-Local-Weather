var x = navigator.geolocation.getCurrentPosition(function() {
  return "" + position.coords.latitude + "";
});

var y = navigator.geolocation.getCurrentPosition(function() {
  return "" + position.coords.longitude + "";
});


$.simpleWeather ({
    location: "New York",
    woeid: y,
    unit: "c",
    success: function(weather) {
      $("#country").html(weather.city+", "+weather.region);             $("#temperature").html(weather.temp+"&deg;"+weather.units.temp);
      $("#weather").html(weather.currently);
      $("#icon").html(weather.image);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
});