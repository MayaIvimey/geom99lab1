

function initMap() {
  var mapOptions = {
    center: { lat: 44.226000090936395, lng: -76.49499549568613 }, 
    zoom: 16,
  };

const map = new google.maps.Map(document.getElementById('map'),{
    center: { lat: 44.226000090936395, lng: -76.49499549568613 }, 
    zoom: 16,
    mapTypeId: "terrain",
});

}
window.initMap = initMap;
