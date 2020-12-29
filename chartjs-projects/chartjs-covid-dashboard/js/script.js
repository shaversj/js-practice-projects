let ctx = document.getElementById('age-range-chart').getContext('2d');
let sex = document.getElementById('sex-chart').getContext('2d');
let race = document.getElementById('race-chart').getContext('2d');
let ethnicity = document.getElementById('ethnicity-chart').getContext('2d');

Chart.defaults.scale.gridLines.display = false;
Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.legend.align = "start";
Chart.defaults.global.legend.labels.boxWidth = 0;
Chart.defaults.global.legend.labels.fontSize = 18;
Chart.defaults.global.legend.labels.fontStyle = 'bold';

let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: ['0-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', '80+'],
        datasets: [{
            fontColor: 'black',
            label: 'Age Range',
            backgroundColor: 'rgb(255, 191, 14)',
            data: [754, 1459, 1985, 2947, 5388, 7890, 8757, 7881]
        }]
    },

    // Configuration options go here
    options: {maintainAspectRatio: false,}
});

let sex_chart = new Chart(sex, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: ['Female', "Male", "Unknown"],
        datasets: [{
            label: 'Sex',
            backgroundColor: 'rgb(255, 191, 14)',
            data: [17888, 19072, 116]
        }]
    },

    // Configuration options go here
    options: {maintainAspectRatio: false}
});

let race_chart = new Chart(race, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: ['White', "Black", "Unknown", "Multiracial", "Other", "Asian"],
        datasets: [{
            label: 'Race',
            backgroundColor: 'rgb(255, 191, 14)',
            data: [24696, 7168, 2162, 1358, 1055, 510]
        }]
    },

    // Configuration options go here
    options: {maintainAspectRatio: false, labels: {fontColor: "black"}}
});

let ethnicity_chart = new Chart(ethnicity, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: ['Non Hispanic Or Non Latino', "Unknown", "Hispanic Or Latino", "Refused To Answer"],
        datasets: [{
            label: 'Ethnicity',
            backgroundColor: 'rgb(255, 191, 14)',
            data: [30343, 5296, 1382, 55]
        }]
    },

    // Configuration options go here
    options: {maintainAspectRatio: false}
});
