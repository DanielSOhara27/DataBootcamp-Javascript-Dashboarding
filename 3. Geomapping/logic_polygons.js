// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map").setView([39.8283, -98.5795], 5);

// Add a tile layer (the background map image) to our map
// Use the addTo method to add objects to our map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// Create a red circle over Dallas
var dallas = L.circle([32.7762719,-96.7968559],{
  color: "red",
  fillColor: "red",
  fillOpacity: "0.75",
  radius: 100000
}).addTo(myMap);

// Connect a black line from NYC to Toronto
var line = [
  [40.7309, -73.98720000000003],
  [43.654, -79.3872]
];
L.polyline(line, {
  color: "black"
}).addTo(myMap);

// Create a purple polygon that covers the area in Atlanta, Savannah, Jacksonville and Montgomery
L.polygon([
  [33.749, -84.38800000000003],
  [32.0809263,-81.0911768],
  [30.3322,-81.65570000000002],
  [32.367,-86.30060000000003]
], {
  color: "yellow",
  fillColor: "yellow",
  fillOpacity: 0.60
}).addTo(myMap);