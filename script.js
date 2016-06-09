var myCenter = new google.maps.LatLng(11.01707,76.96529);
  
  function initialize(){
    var mapPropObj = {
      center:myCenter,
      zoom:10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapPropObj); 
    var marker = new google.maps.Marker({
                  position:myCenter,
              });

          marker.setMap(map);
    var infowindow = new google.maps.InfoWindow({
  content:"273, Peranaidu Layout, Crosscut Road,Gandhipuram, Coimbatore, Tamil Nadu 641009."
  });

infowindow.open(map,marker);

      }
        
  
google.maps.event.addDomListener(window, 'load', initialize);

//===========================================================================================================================

// Smooth Scrolling

$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) 
    {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    
    event.preventDefault(); // Prevent default anchor click behavior
    var hash = this.hash;// Store hash

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({ scrollTop: $(hash).offset().top
                            }, 900, function(){

     
      window.location.hash = hash; // Add hash (#) to URL when done scrolling (default click behavior)
      });
    } // End if
  });
  
  $("#galleryButton").on('click', function(event){
    event.preventDefault();
    
  
  });
  
  
});



