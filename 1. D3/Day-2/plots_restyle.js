function init() {
  var data = [{
    values: [19, 26, 55, 88],
    labels: ["Spotify", "Soundcloud", "Pandora", "Itunes"],
    type: "pie"
  }];

  var layout = {
    height: 600,
    width: 800
  };

  Plotly.plot("pie", data, layout);
}

function updatePlotly(newdata) {
  // YOUR CODE HERE
  // Use `Plotly.restyle` to update the pie chart with the newdata array
  var line = document.getElementById("pie");
  Plotly.restyle(line, "values", [newdata[0]["values"]]);
  Plotly.restyle(line, "labels", [newdata[0]["labels"]]);
}

function getData(dataset) {
  // YOUR CODE HERE
  // create a select statement to select different data arrays (YOUR CHOICE)
  // whenever the dataset parameter changes. This function will get called
  // from the dropdown event handler.
  switch (dataset) {
    case "one":
      var trace = {
        values: [1,2,3,4,5],
        labels: ["foo", "bar", "hello", "world", "test"],
        type: "pie",
        name: "one"
      };
      break;
    case "two":
      var trace = {
        values: [5,4,3,2,1],
        labels: ["hola","hello", "bonjour", "konnichiwa", "bla"],
        type: "pie",
        name: "two"
      };
      break;
    case "three":
      var trace = {
        values: [1,1,1,1,1,],
        labels: ["Communicsm", "Does","not","work", "bla"],
        type: "pie",
        name: "three"
      };
      break;
    default:
      var trace = {
        values: [19, 26, 55, 88],
        labels: ["Spotify", "Soundcloud", "Pandora", "Itunes"],
        type: "pie",
        name: "one"
      };
      break;
  }

  updatePlotly([trace]);
}

init();
