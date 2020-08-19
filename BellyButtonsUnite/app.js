// Use d3.json() to fetch data from JSON file

// Incoming data is internally referred to as incomingData
d3.json("data/samples.json").then((incomingData) => {
    function filterGerms(germ) {
      return germ.otu_id;
    }

    // use filter to pass function

    // var filteredGerms = incomingData.filter(filterGerms);

    // check check check

    console.log(incomingData);
    


});
