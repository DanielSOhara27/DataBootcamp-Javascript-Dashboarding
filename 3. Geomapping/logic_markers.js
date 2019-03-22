// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

// Add a tile layer to the map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets-basic",
  accessToken: API_KEY
}).addTo(myMap);

// City markers

// Add code to create a marker for each city below and add it to the map

// newyork;
var ny = L.marker([40.7308619, -73.9871558], {
  draggable: false,
  title: "New York City"
}).addTo(myMap).bindPopup("<b>Population</b><br /><hr />8.6 Million").openPopup();
// chicago;
var chicago = L.marker([41.8755616, -87.6244212], {
  draggable: false,
  title: "Chicago"
}).addTo(myMap).bindPopup("<b>Population</b><br /><hr />2.7 Million");
// houston;
var houston = L.marker([29.7589382, -95.3676974], {
  draggable: false,
  title: "Houston"
}).addTo(myMap).bindPopup("<b>Population</b><br /><hr />2.3 Million");
// la;
var LA = L.marker([34.0537, -118.243], {
  draggable: false,
  title: "Los Angeles"
}).addTo(myMap).bindPopup("<b>Population</b><br /><hr />4 Million");
// omaha;
var omaha = L.marker([41.2587317, -95.9378732], {
  draggable: false,
  title: "Omaha, Nebraska"
}).addTo(myMap).bindPopup("<b>Population</b><br /><hr />466,893");
