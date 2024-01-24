function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
     center: { lat: 44.226000090936395, lng: -76.49499549568613 }, 
    zoom: 16,
    disableDefaultUI: true,
    mapTypeId: "terrain",
  });

}

window.initMap = initMap;

