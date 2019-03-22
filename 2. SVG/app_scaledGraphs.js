function updateXAxis(yscale){
 return  d3.axisLeft(yScale);
}

function updateYAxis(xscale){
  return d3.axisBottom(xScale);
}

// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 660;

// Define the chart's margins as an object
var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3.select("body")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and to the bottom
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// Load data from hours-of-tv-watched.csv
// YOUR CODE HERE
d3.csv("hours-of-tv-watched.csv", function(error, data){
  if(error) return console.warn(error);
  console.log(data);
  // Cast the hours value to a number for each piece of tvData
  data.forEach( data => { data.hours = +data.hours});

  // Configure a band scale for the horizontal axis with a padding of 0.1 (10%)
  var xScale = d3.scaleBand()
      .domain(data.map( data => data.name))
      .range([0, chartWidth])
      .padding(0.1);

  // Create a linear scale for the vertical axis.
  var yScale = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.hours)])
      .range([chartHeight, 0]);

  // Create two new axes functions passing our scales in as arguments
  var bottomAxis = d3.axisBottom(xScale);
  var leftAxis = d3.axisLeft(yScale).ticks(10);

  // Append two SVG group elements to the chartGroup area,
  // and create the bottom and left axes inside of them

    chartGroup.append("g").call(leftAxis);
    chartGroup.append("g").attr("transform", `translate(0, ${chartHeight})`).call(bottomAxis);

  // Create one SVG rectangle per piece of tvData
  // Use the linear and band scales to position each rectangle within the chart

  chartGroup.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", d => xScale(d.name))
      .attr("y", d => yScale(d.hours))
      .attr("width", xScale.bandwidth())
      .attr("height", d => chartHeight - yScale(d.hours));

});