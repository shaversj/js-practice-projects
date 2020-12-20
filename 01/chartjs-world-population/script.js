let apiURL = "https://api.covidtracking.com/v1/states/current.json";

let states = [];
let positives = [];
let colors = []

function processResults(data){
    for(let i = 0; i < data.length; i++){
        states.push(data[i]["state"])
        positives.push(data[i]["positive"])
        colors.push('#'+Math.floor(Math.random()*16777215).toString(16));
    }
}

fetch(apiURL).then(response => response.json()).then(data => processResults(data));
let ctx = document.getElementById("myChart");


let myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: states,
        datasets: [{
            label: "My first Data Set",
            data: positives,
            backgroundColor: colors
        }]
    },
});