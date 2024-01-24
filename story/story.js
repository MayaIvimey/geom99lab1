

function initMap() {
  const mapOptions = {
    center: { lat: 44.226000090936395, lng: -76.49499549568613 }, 
    zoom: 16,
  };
map = new google.maps.Map(document.getElementById("map"), {
    ...mapOptions,
  });
const image = "coffee.png"
new google.maps.Marker({
    position: {lat: 44.22901925950561, lng:-76.49484263870534},
    map,
    icon: image,
    title: "Cogro",
  });


}

