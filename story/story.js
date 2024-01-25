async function initMap() {
  // Request needed libraries.
  const { Map, InfoWindow } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
    "marker",
  );
  var myLatlng = new google.maps.LatLng(44.226000090936395, -76.49499549568613);
  const map = new Map(document.getElementById("map"), {
    zoom: 16,
    center: myLatlng,
  });
  
  const tourStops = [
    {
      position: { lat: 44.224455413902966, lng: -76.51526780630265},
      title: "Jean Royce",
    },
    {
      position: { lat: 44.224407319071936, lng: -76.50071114448876},
      title: "Leonard Hall",
    },
    {
      position: { lat: 44.22466084361948, lng: -76.49622990388815 },
      title: "Ban Righ Hall",
    },
    {
      position: { lat: 44.223620329676336, lng: -76.4992960158313 },
      title: "Location 21",
    },
    {
      position: { lat: 44.22535274880164, lng: -76.49863267430514 },
      title: "The Lazy Scholar",
    },
  ];

  // Create an info window to share between markers.
  const infoWindow = new InfoWindow();

  // Create the markers.
  tourStops.forEach(({ position, title }, i) => {
    const pin = new PinElement({
      glyph: `${i + 1}`,
    });
    const marker = new AdvancedMarkerElement({
      position,
      map,
      title: `${i + 1}. ${title}`,
      content: pin.element,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", ({ domEvent, latLng }) => {
      const { target } = domEvent;

      infoWindow.close();
      infoWindow.setContent(marker.title);
      infoWindow.open(marker.map, marker);
    });
  });
}

initMap();
