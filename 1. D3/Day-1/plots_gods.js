console.log(data);
let godNames = data.map( gods => gods.pair);
let greekSearch = data.map(gods => gods.greekSearchResults);
let romanSearch = data.map( gods => gods.romanSearchResults);

let traceGreek = {
    x: godNames,
    y: greekSearch,
    text: data.map(gods => gods.greekName),
    type: "bar",
    name: "Greek"
};

let traceRoman = {
    x: godNames,
    y: romanSearch,
    text: data.map(gods => gods.romanName),
    type: "bar",
    name: "Roman"
};

let layout = {
    title: "The gods"
};

let data2 = [traceGreek, traceRoman];

Plotly.newPlot("plot", data2, layout);