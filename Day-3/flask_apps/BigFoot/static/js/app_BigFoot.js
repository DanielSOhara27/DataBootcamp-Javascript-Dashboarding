/* data route */
var url = "/data";

function buildPlot() {
    // YOUR CODE HERE
    // fetch the data from your api
    // plot the results

    d3.json(url).then( data => {

        trace = {
            "x" : data.map( row => row[0]),
            "y" : data.map( row => row[1]),
            "type": "scatter",
            "mode": "lines",
            "name" : "Big Foot Sightings"
        }


        data = [trace];


        Plotly.newPlot("plot", data)
    });
}

buildPlot();
