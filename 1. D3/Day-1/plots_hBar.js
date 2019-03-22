
console.log(data);
// Sort the data array using the greekSearchResults value
data.sort( (god1, god2) => god2.greekSearchResults - god1.greekSearchResults);
// data.sort(); -> This is the same as above
// Slice the first 10 objects for plotting
let godList = data.slice(0,10);
godList.reverse();
console.log(godList);
// Trace1 for the Greek Data
let trace = {
    y: godList.map( god => god.greekName),
    x: godList.map( god => god.greekSearchResults),
    type: "bar",
    orientation: "h"
};
// set up the data variable
let data2 = [trace];

// set up the layout variable
let layout = {
    title: "Horizontal Greek Gods"
};
// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data2, layout);