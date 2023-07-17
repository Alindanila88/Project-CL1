mapboxgl.accessToken = 'pk.eyJ1IjoiY3BhdHJhc2N1MTAwOCIsImEiOiJjbGpobGx6ZWYwNjFyM2dwNWE4enRtaGJhIn0.OpjUDdn5vfqTAAhoZ9NfTA';

navigator.geolocation.getCurrentPosition(successLocation, 
errorLocation, {
     enableHighAccuracy: true
})
function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
}
function errorLocation() {
    setupMap([44.44329288473924, 26.05147408])
}

function setupMap(center)
 {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
      });
      
      
      map.addControl(directions, 'top-left');
 }
