var mymap = L.map('mapid').setView([-34.91261844849942, -56.17092843124505], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiY2FyeWFiIiwiYSI6ImNrcHI4NHFoajAyMmsyb254ZTQxaTBuaDkifQ.Yc9XfUCDeSZWFjBFvouGaA'
}).addTo(mymap);

L.marker([-34.91261844849942, -56.17092843124505]).addTo(mymap).bindPopup("I am a green leaf.");
L.marker([-34.90894745931358, -56.16157383836396]).addTo(mymap).bindPopup("I am a red leaf.");
L.marker([-34.9057919049015, -56.177887968834185]).addTo(mymap).bindPopup("I am an orange leaf.");