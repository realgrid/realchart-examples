const data = [
    ['신흥1동', 3904],
    ['신흥2동', 19796],
    ['신흥3동', 10995],
    ['태평1동', 14625],
    ['태평2동', 14627],
    ['태평3동', 12649],
    ['태평4동', 12279],
];
const config = {
    options: {},
    title: 'Add Point',
    xAxis: {
        tick: true,
        title: {
            text: '수정구',
        },
        crosshair: true,
    },
    yAxis: {
        title: {
            text: '전체 인구수',
        },
        unit: '(명)',
        label: {
            lastText: '${label}<br>${axis.unit}',
            lastStyle: { fontWeight: 'bold' },
        },
    },
    series: {
        pointLabel: true,
        data,
        pointStyleCallback: (args) => {
            if (args.yValue > 30000) {
                return { fill: 'blue', stroke: 'blue' };
            } else if (args.yValue < 5000) {
                return { fill: 'red', stroke: 'red' };
            }
        },
    },
};

let animate;
let chart;
let timer;
let dong = 1;

function addPoint() {
    chart.series.addPoint([
        '분당' + dong++ + '동',
        Math.floor(Math.random() * 10000),
    ]);
}

function removePoint() {
    chart.series.removePoint(0);
}

function updatePoint() {
    chart.series.updatePoint(0, Math.floor(Math.random() * 10000));
}

function updateData() {
    chart.series.updateData(data);
}

function init() {
    console.log('RealChart v' + RealChart.getVersion());
    // RealChart.setDebugging(true);
    RealChart.setLogging(false);

    chart = RealChart.createChart(document, 'realchart', config);
}
