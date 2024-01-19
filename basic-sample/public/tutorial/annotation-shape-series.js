const config = {
    options: {},
    title: {
        text: '전국아파트 실거래 지수',
        style: {
            fontSize: '40px',
        },
    },
    xAxis: {
        type: 'time',
        tick: {
            stepInterval: '2m',
        },
        label: {
            timeFormat: 'yyyy년 MM월',
        },
    },
    yAxis: {
        minValue: 0,
        tick: {
            stepInterval: 20,
        },
    },
    series: {
        name: 'main',
        type: 'line',
        lineType: 'spline',
        marker: false,
        xStart: '2020-01',
        xStep: '2m',
        data: [
            101, 103, 105, 109, 113, 115, 120, 125, 131, 136, 139, 143, 141,
            140, 139, 138, 130, 125, 120, 119, 119, 120, 122, 123,
        ],
        style: {
            strokeWidth: '5px',
        },
    },
    // 시리즈 및 게이지들이 plotting되는 영역 모델.
    body: {
        annotations: [
            {
                type: 'shape',
                shape: 'rectangle',
                front: true,
                series: 'main',
                x1: new Date(2022, 8),
                x2: new Date(2023, 3),
                y1: 100,
                y2: 145,
                style: {
                    fill: 'none',
                    stroke: 'red',
                    strokeWidth: '5px',
                },
            },
        ],
    },
};

let animate = false;
let chart;

function init() {
    console.log('RealChart v' + RealChart.getVersion());
    // RealChart.setDebugging(true);
    RealChart.setLogging(true);

    chart = RealChart.createChart(document, 'realchart', config);
}
