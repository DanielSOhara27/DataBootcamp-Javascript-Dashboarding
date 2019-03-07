
/* global Plotly */
//var url = `https://www.quandl.com/api/v3/datasets/WIKI/AMZN.json?start_date=2016-10-01&end_date=2017-10-01&api_key=${APIKEY}`;

/**
 * Helper function to select stock data
 * Returns an array of values
 * @param {array} data
 * @param {integer} index
 * index 0 - Date
 * index 1 - Open
 * index 2 - High
 * index 3 - Low
 * index 4 - Volume
 */
function unpack(data, index) {
  return data.map(function(row) {
    return row[index];
  });
}

// Submit Button handler
function handleSubmit() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input value from the form
  var stock = d3.select("#stockInput").node().value;
  console.log(stock);

  // clear the input value
  d3.select("#stockInput").node().value = "";

  // Build the plot with the new stock
  buildPlot(stock);
}

/**
 * Fetch data and build the timeseries plot
 */
function buildPlot(stock) {
  let url = `https://www.quandl.com/api/v3/datasets/WIKI/${stock}.json?start_date=2016-10-01&end_date=2017-10-01&api_key=${APIKEY}`;

  // @TODO: YOUR CODE HERE
  d3.json(url).then( data => {
    let name = data.dataset.name;
    let stock = data.dataset.dataset_code;
    let startDate = data.dataset.start_date;
    let endDate = data.dataset.end_date;
    let dates = unpack(data.dataset.data, 0);
    let closingPrices = unpack(data.dataset.data, 1);

    var selectorOptions = {
      buttons: [{
        step: 'month',
        stepmode: 'backward',
        count: 1,
        label: '1m'
      }, {
        step: 'month',
        stepmode: 'backward',
        count: 6,
        label: '6m'
      }, {
        step: 'year',
        stepmode: 'todate',
        count: 1,
        label: 'YTD'
      }, {
        step: 'year',
        stepmode: 'backward',
        count: 1,
        label: '1y'
      }, {
        step: 'all',
      }],
    };

    var trace1 = {
      type: "scatter",
      mode: "lines",
      name: name,
      x: dates,
      y: closingPrices,
      line: {
        color: "#17BECF"
      }
    };

    var data = [trace1];

    var layout = {
      title: `${stock} closing prices`,
      xaxis: {
        rangeselector: selectorOptions,
        rangeslider: {},
        type: "date"
      },
      yaxis: {
        autorange: true,
        type: "linear"
      }
    };

    Plotly.newPlot("plot", data, layout);
  });

}

d3.select("#submit").on("click", handleSubmit);

