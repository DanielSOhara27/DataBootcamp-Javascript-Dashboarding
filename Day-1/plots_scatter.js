// YOUR CODE HERE
console.log(dataOlympics);

let traceHigh = {
    x: dataOlympics.year,
    y: dataOlympics.high_jump,
    mode: 'markers',
    name: "High Jump",
    type: "scatter",
    marker: {
        color: "blue",
        symbol: "hexagram",
        size: 12
    }
};
let traceLong = {
    x: dataOlympics.year,
    y: dataOlympics.long_jump,
    mode: 'markers',
    name: "Long Jump",
    type: "scatter",
    marker: {
        color: "red",
        symbol: "diamond",
        size: 12
    }
};
let traceDiscus = {
    x: dataOlympics.year,
    y: dataOlympics.discus_throw,
    mode: 'markers',
    name: "Discuss Throw",
    type: "scatter",
    marker: {
        color: "green",
        symbol: "square",
        size: 12
    }
};

let data2 = [traceHigh, traceDiscus, traceLong];

let layout = {
    title: "Olympic Perfomance",
    xaxis: {title: "year"},
    yaxis: {title: "Olympic Event"}
};

Plotly.newPlot("plot", data2, layout);