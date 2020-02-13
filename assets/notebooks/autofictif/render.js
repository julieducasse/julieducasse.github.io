// VARIABLES ====================================================
const date_firstEntry = new Date('2007-09-18T00:00:00');
const dayToMsFactor = 1000 * 3600 * 24;
const marginDay = 80 * dayToMsFactor;
const marginTop = 1000;

var nbDays = 1;
var nbMinutes = 10;
var entriesPerDay, nbEntries, nbDaysLeft, nbDaysTotal;
var data, layout;
var startDate, finalDate;
var today = new Date();


// FUNCTIONS ====================================================
Date.prototype.toDateInputValue = (function () {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
});

Date.prototype.getMonthFormatted = function () {
    var month = this.getMonth() + 1;
    return month < 10 ? '0' + month : '' + month;
}

Date.prototype.getDateFormatted = function () {
    var date = this.getDate();
    return date < 10 ? '0' + date : '' + date;
}

function computeDate() {
    entriesPerDay = 2.7 * nbMinutes;

    nbEntries = (startDate.getTime() - date_firstEntry.getTime()) / dayToMsFactor;
    
    nbDaysLeft = nbEntries / (entriesPerDay - 1);
    nbDaysTotal = 7 * (nbDaysLeft / nbDays);
    finalDate = new Date(startDate.getTime() + nbDaysTotal * dayToMsFactor);

    result_day.innerHTML = Math.ceil(nbDaysLeft);
    result_date.innerHTML = finalDate.getDateFormatted() + "/" + finalDate.getMonthFormatted() + "/" + finalDate.getFullYear();
}

// PLOT =====================================================
var plot = document.getElementById('plot');

function renderPlot() {
    var n = (nbDaysTotal + 7) / 7; // 1 point= une semaine
    var x = [], y = [];
    var j = 0;
    for (var i = 0; i < n; i++) {
        x[i] = new Date(startDate.getTime() + i * 7 * dayToMsFactor);
        y[i] = j * (1 - entriesPerDay) + nbEntries;
        j += Number(nbDays);
    }

    n1 = (startDate.getTime() - today.getTime()) / dayToMsFactor;
    var x1 = [], y1 = [];
    for (var i = 0; i < n1; i++) {
        x1[i] = new Date(today.getTime() + i * 7 * dayToMsFactor);
        y1[i] = (today.getTime() + i * 7 * dayToMsFactor - date_firstEntry.getTime()) / dayToMsFactor;
    }

    data = [{
        x: x,
        y: y,
        type: 'lines',
        showlegend: false
    }
    ];

    layout = {
        xaxis: {
            type: 'date',
            range: [new Date(today.getTime() - marginDay), new Date(finalDate.getTime() + marginDay)],
            tickformat: "%m/%Y",
            tick0: today,
            tickmode: "auto",
            nticks: 20,
            tickangle: -90,
            ticks: "outside"
        },
        yaxis: {
            range: [0, nbEntries + marginTop],
            title: {
                text: 'Nombre de billets',
                font: {
                    family: 'Courier New, monospace',
                    size: 18,
                    color: '#7f7f7f'
                }
            },
            hoverformat: '.0f'
        },
        shapes: [
        {
            type: 'line',
            x0: finalDate,
            y0: 0,
            x1: finalDate,
            y1: nbEntries + marginTop/2,
            line: {
              color: 'grey',
              width: 1.5,
              dash: 'dot'
            }
        }, 
        {
            type: 'line',
            x0: startDate,
            y0: 0,
            x1: startDate,
            y1: nbEntries + marginTop/2,
            line: {
              color: 'grey',
              width: 1.5,
              dash: 'dot'
            }
        }],
        colorway: ["black"],
        hoverlabel: {namelength :0},
        margin : {
            t: 20,
            b: 80,
            r: 50,
            l: 80
        }
    };
    Plotly.newPlot('plot', data, layout, { displayModeBar: false, responsive: true});
}

function updatePlot() {
    computeDate();

    var n = (nbDaysTotal + 7) / 7; // 1 point= une semaine
    var x = [], y = [];
    var j = 0;
    for (var i = 0; i < n; i++) {
        x[i] = new Date(startDate.getTime() + i * 7 * dayToMsFactor);
        y[i] = j * (1 - entriesPerDay) + nbEntries;
        j += Number(nbDays);
    }

    data[0]['x'] = x;
    data[0]['y'] = y;
    data[0]["mode"] = 'lines';

    n1 = (startDate.getTime() - today.getTime()) / dayToMsFactor / 7;
    var x1 = [], y1 = [];
    for (var i = 0; i < n1; i++) {
        x1[i] = new Date(today.getTime() + i * 7 * dayToMsFactor);
        y1[i] = (today.getTime() + i * 7 * dayToMsFactor - date_firstEntry.getTime()) / dayToMsFactor;
    }

    layout["shapes"][0]["x0"] = finalDate;
    layout["shapes"][0]["x1"] = finalDate;
    layout["shapes"][0]["y1"] = nbEntries + marginTop/2;

    layout["shapes"][1]["x0"] = startDate;
    layout["shapes"][1]["x1"] = startDate;
    layout["shapes"][1]["y1"] = nbEntries + marginTop/2;

    var year = new Date(startDate.getTime() + 10 * 365 * dayToMsFactor).getFullYear() + "-01-01";
    layout["xaxis"]['range'] = [new Date(startDate.getTime() - marginDay), year];
    layout["yaxis"]['range'] = [0, nbEntries + marginTop];

    Plotly.update('plot', data, layout, { displayModeBar: false });
}



// RESULT =======================================================
var result_day = document.getElementById("output_result_day");
// var result_day_total = document.getElementById("output_result_day_total");
var result_date = document.getElementById("output_result_date");


// DATE PICKER ==================================================
var date_picker = document.getElementById("date_picker");
var startDate = new Date();
date_picker.value = startDate.toDateInputValue();


date_picker.oninput = function () {
    startDate = new Date(this.value);
    updatePlot();
}


// SLIDERS ======================================================
var slider_minute = document.getElementById("slider_minute");
slider_minute.value = nbMinutes;
document.getElementById("output_minute").innerHTML = nbMinutes;

var slider_day = document.getElementById("slider_day");
slider_day.value = nbDays;
document.getElementById("output_day").innerHTML = nbDays;

slider_minute.oninput = function () {
    nbMinutes = this.value;
    output_minute.innerHTML = nbMinutes;
    updatePlot();
}

slider_day.oninput = function () {
    nbDays = this.value;
    output_day.innerHTML = nbDays;
    updatePlot();
}

computeDate();
renderPlot();
