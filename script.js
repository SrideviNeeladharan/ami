$("document").ready(function(){
  $("#location").click(function(event){
    event.preventDefault();
    var userLocation= $()
    geoLocation();
    
  });
  
  
    var locator = document.getElementById("getLoc");
  
    function geoLocation(){
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition, showError)
      }else{
        locator.innerHTML = ("Geolocationis not supported by this browser.");
      }
    
    }//closing geolocation
  
    function showPosition(position){
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      latlon = new google.maps.LatLng(lat, lon)
      mapholder = document.getElementById('mapholder')
      mapholder.style.height = '250px';
      mapholder.style.width = '500px';

      var myOptions = {
      center:latlon,zoom:14,
      mapTypeId:google.maps.MapTypeId.ROADMAP,
      mapTypeControl:false,
      navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
      }


});