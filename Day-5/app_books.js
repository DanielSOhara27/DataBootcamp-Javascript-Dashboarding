// Data which we will be using to build our rectangle
var booksReadThisYear = [15];

// Append the SVG wrapper to the page, set its height and width, and create a variable which references it
var svg = d3.select("#svg-area")
    .append("svg")
    .attr("width", "500px")
    .attr("height", "500px");

// Append a rectangle and set its height in relation to the booksReadThisYear value

svg.append("rect")
    .classed("bar", true)
    .data(booksReadThisYear)
    .attr("x", "5px")
    .attr("y", "5px")
    .attr("width", function(data){ return data*10})
    .attr("height", function(data){ return data*15})
    .attr("fill", "green");