
function init(){
    var selector = d3.select('#selDataset');

    d3.json('samples.json').then((data)=>{

        var sampleNames = data.names;
        sampleNames.forEach((sample) => {
            selector.append('option').text(sample);
        });

        var firstSample = sampleNames[0];
    buildMetadata(firstSample);
    buildCharts(firstSample);

    });


}

function optionChanged(data) {

    buildMetadata(data);
    buildCharts(data);
}

function buildMetadata(sampleNum) {
    var selector = d3.select('#sample-metadata');

    d3.json('samples.json').then((data)=>{

        var sampleNames = data.names;
        sampleNames.forEach((sample) => {
            selector.append('option').text(sample);
        });

    //     // var firstSample = sampleNames[0];
    // buildMetadata(firstSample);
    // buildCharts(firstSample);

    });
}

function buildCharts(sampleNum) {
console.log(sampleNum);

}

init();