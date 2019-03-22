function buildPlot() {
    /* data route */
  var url = "/api/pals";

  d3.json(url).then( request =>{
    data = [{
      "x": request.map(data => data.type),
      "y": request.map(data => data.number),
      "type": "bar",
      "name": "Pet Pals"

    }];

    layout = {
      title: "Pet Pals",
      xaxis: { title: "Types of Pets"},
      yaxis: { title: "Num of Pets"}
    };

    Plotly.newPlot("plot", data, layout);
  });
}

buildPlot();
