// Use d3.json() to fetch data from JSON file
function unpack(rows, index) {
  return rows.map(function (row) {
    return row[index];
  });
}
function parseBugs() {
  d3.json("data/samples.json").then((incomingData) => {
    var metadata = unpack()
    buildTable(id, ethnicity, gender, age, location, bbtype, wfreq);
    console.log(incomingData);

    var filteredGerms = incomingData.filter(filterGerms);
    // function filterGerms(germ) {
    // return germ.id;
    var bellyId = filteredGerms.map(germs => germs.id);

    var samples = filteredGerms.map(germs => )


    var trace = {
      x: bellyId,
      y: samples,
      type: "bar"
    };
    var data = [trace];

    var layout = {
      xaxis: { title: "OTU ID" },
      yaxis: {title: "Number of Germs"}
    };

    Plotly.newPlot("bar-plot", data, layout);
  });
}
// Incoming data is internally referred to as incomingData


// use filter to pass function

// gather information on otu_id and filter



// check check check






