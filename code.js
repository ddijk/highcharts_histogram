Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Processing of JMS message with binary payload, run 2, data size:'+getDataSetSize()
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
        color: 'green',
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
    return  {'<20': 288, '20-30': 96, '30-40': 4, '40-50': 5, '50-60': 3, '>=60': 4}
}

function getDataSetSize() {
    return Object.values(data()).reduce((acc, e) =>  acc+e)
}
