Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Processing of JMS message with binary payload, run 3, data size:'+getDataSetSize()
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        categories: getLabels(),
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Aantal berichten'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:f} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        color: 'yellow',
        name: 'Doorlooptijd (ms) groepen',
        data: getValues()

    }]
});

function getValues() {
    values = [];
    const d = data();
    for (i in d) {

        values.push(d[i]);
    }

    return values;
}

function getLabels() {
    return Object.keys(data());
}

function data() {
    return {'<20': 275, '20-30': 99, '30-40': 15, '40-50': 9, '50-60': 2, '>=60': 0}
}

function getDataSetSize() {
    return Object.values(data()).reduce((acc, e) =>  acc+e)
}
