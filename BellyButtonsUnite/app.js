// Use d3.json() to fetch data from JSON file
function unpack(rows, index) {
  return rows.map(function (row) {
    return row[index];
  });
}
function charts(names) {
d3.json("data/samples.json").then((incomingData) => {
  // var metadata = unpack(incomingData.metadata, names)
  // buildTable(id, ethnicity, gender, age, location, bbtype, wfreq);
  var metadata = incomingData.metadata
  console.log(metadata);

  var filteredGerms = metadata.filter((filterGerms) =>
    // 
    filterGerms.id == names);

  console.log(filteredGerms);

  var samples = incomingData.samples.filter((filterGerms) =>
    filterGerms.id == names);
    samples = samples[0]
  console.log(samples);

  var drop = d3.select("#sample-metadata");
  drop.html("");
  Object.entries(filteredGerms[0]).forEach(([key, value]) => {drop.append("h6").text(`${key}, ${value}`)})


  var trace = {
    // x: data.map(row => row.greekSearchResults),
    // y: data.map(row => row.greekName),
    // text: data.map(row => row.greekName),
    // name: "Greek",
    // type: "bar",
    // orientation: "h"
    x: samples.sample_values,
    y: samples.otu_ids,
    text: samples.otu_labels,
    name: "germy",
    type: "bar", 
    orientation: "h"
  };
  var data = [trace];

  var layout = {
    xaxis: { title: "OTU ID" },
    yaxis: { title: "Number of Germs" }
  };

  Plotly.newPlot("bar", data, layout);

  var trace2 = {
    x: samples.otu_ids,
    y: samples.sample_values,
    text: samples.otu_labels,
    mode: "markers",
    type: "bubble",
    // mode: 'markers',
    // marker=dict(
        // color=['rgb(44, 160, 101)'],
        // size=[60],)
  };
  var data2 = [trace2];

  var layout2 = {
    xaxis: { title: "bubbleking" },
    yaxis: { title: "grossness" }
  };

  Plotly.newPlot("bubble", data2, layout2);




});
}
// charts(940)
function parseBugs() {
  var dropDown = d3.select("#selDataset")
  d3.json("data/samples.json").then((incomingData) => {
    // var metadata = unpack(incomingData.metadata, names)
    // buildTable(id, ethnicity, gender, age, location, bbtype, wfreq);
    var names = incomingData.names
    console.log(names);
    names.forEach((bellyBug) => {
      dropDown.append("option").text(bellyBug).property("value", bellyBug);
    })
  });
charts(940)
};
function optionChanged(newName) {
  charts(newName)

};
parseBugs()





  // var samples = filteredGerms.map(germs => )



// });
// }
// Incoming data is internally referred to as incomingData


// use filter to pass function

// gather information on otu_id and filter



// check check check */
