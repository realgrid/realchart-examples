/**
 * @demo
 *
 */

const ballsData = [
    { angle: 85, hits: 1 },
    { angle: 80, hits: 3 },
    { angle: 65, hits: 13 },
    { angle: 60, hits: 1 },
    { angle: 55, hits: 4 },
    { angle: 50, hits: 6 },
    { angle: 45, hits: 8 },
    { angle: 40, hits: 6 },
    { angle: 35, hits: 14 },
    { angle: 30, hits: 11 },
    { angle: 25, hits: 11 },
    { angle: 20, hits: 17 },
    { angle: 15, hits: 15 },
    { angle: 10, hits: 16 },
    { angle: 5, hits: 15 },
    { angle: 0, hits: 15 },
    { angle: -5, hits: 9 },
    { angle: -10, hits: 9 },
    { angle: -15, hits: 11 },
    { angle: -20, hits: 6 },
    { angle: -25, hits: 22 },
    { angle: -30, hits: 5 },
    { angle: -35, hits: 3 },
    { angle: -40, hits: 7 },
    { angle: -45, hits: 3 },
    { angle: -55, hits: 1 },
    { angle: -65, hits: 2 },
];
const hitsData = [
    { angle: 30, hits: 1 },
    { angle: 25, hits: 4 },
    { angle: 20, hits: 4 },
    { angle: 15, hits: 5 },
    { angle: 10, hits: 10 },
    { angle: 5, hits: 10 },
    { angle: 0, hits: 7 },
    { angle: -5, hits: 2 },
    { angle: -10, hits: 5 },
    { angle: -20, hits: 4 },
    { angle: -65, hits: 1 },
];

const config = {
    polar: true,
    templates: {
        series: {
            pointLabel: false,
            xField: 'angle',
            yField: 'hits',
            tooltipText: '${x}°: ${y}hits',
        },
        logAxis: {
            label: {
                visible: true,
                effect: 'outline',
                outlineThickness: 5,
                style: {
                    fill: '#555',
                },
                firstText: '',
            },
            title: 'hits',
            tick: {
                visible: false,
                // stepCount: 5,
                steps: [
                    0,
                    Math.log10(5),
                    Math.log10(10),
                    Math.log10(20),
                    Math.log10(30),
                ],
            },
        },
        linearAxis: {
            label: {
                visible: true,
                effect: 'outline',
                outlineThickness: 5,
                style: {
                    fill: '#555',
                },
                firstText: '',
            },
        },
    },
    title: {
        text: 'W.R Lion',
        align: 'left',
        style: {
            fontWeight: 700,
        },
    },
    subtitle: {
        text: '<t style="fill:#888">Balls in play</t><br><t style="fill:var(--color-3)">Hits</t>',
        align: 'left',
        style: {
            textAlign: 'left',
        },
    },
    legend: false,
    xAxis: {
        type: 'linear',
        reversed: true,
        startAngle: 10,
        totalAngle: 160,
        strictMin: -80,
        strictMax: 80,
        label: {
            visible: true,
            suffix: '°',
            style: {
                fill: '#999',
            },
        },
        tick: {
            stepInterval: 10,
        },
        line: {
            visible: true,
            style: {
                stroke: '#999',
            },
        },
    },
    yAxis: {
        // template: 'linearAxis',
        // type: 'linear',
        template: 'logAxis',
        type: 'log',
    },
    annotations: [
        {
            type: 'image',
            imageUrl:
                'https://www.realchart.co.kr/demo/assets/images/baseball-player.png',
            align: 'center',
            verticalAlign: 'middle',
            offsetX: -110,
            offsetY: -30,
            width: 380,
        },
    ],
    tooltip: {
        text: '${name}°: ${y}hits',
    },
    series: {
        // layout: 'stack',
        layout: 'overlap',
        // noClip: false,
        groupPadding: 0,
        children: [
            {
                template: 'series',
                data: ballsData,
                style: {
                    stroke: 'none',
                    fill: '#bbb',
                },
            },
            {
                template: 'series',
                data: hitsData,
                style: {
                    stroke: 'none',
                    fill: 'var(--color-3)',
                },
            },
        ],
    },
};

let animate;
let chart;

function init() {
    console.log('RealChart v' + RealChart.getVersion());
    RealChart.setLogging(true);

    chart = RealChart.createChart(document, 'realchart', config);
}
