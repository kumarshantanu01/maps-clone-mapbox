mapboxgl.accessToken = 'pk.eyJ1Ijoia3VtYXJzaGFudGFudSIsImEiOiJja3F6aXhzc3gxaW5uMm9xYWNzNjd3cmVyIn0.bKOtzfgiTyToCv39tPV1mQ';

navigator.geolocation.getCurrentPosition(sucessLocation, errorLocation, {
    enableHighAccuracy : true
})

function sucessLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation(){
    setupMap([-2.24, 53.48])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 10
      })

      const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
  })

  map.addControl(directions, "top-left")
}

