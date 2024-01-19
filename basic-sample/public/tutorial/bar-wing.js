/**
 * Bar Wing 예제
 * 그룹 시리즈의 overlap layout으로 split모드 없이 wing 차트 모양을 내는 예제.
 * male은 data는 음수로 구성되어 있다.
 * axis는 그룹의 axis를 따른다. 두 번째 axis는 모양만 내는 것.
 */
const config = {
    templates: {
        xAxis: {
            title: 'Age',
            categories: [
                '0-4',
                '5-9',
                '10-14',
                '15-19',
                '20-24',
                '25-29',
                '30-34',
                '35-40',
                '40-45',
                '45-49',
                '50-54',
                '55-59',
                '60-64',
                '65-69',
                '70-74',
                '75-79',
                '80+',
            ],
        },
    },
    inverted: true,
    title: 'Daily fat',
    xAxis: [
        {
            template: 'xAxis',
            position: 'base',
        },
        {
            template: 'xAxis',
            position: 'opposite',
        },
    ],
    yAxis: {
        title: 'Vertical 수직축 Axis',
        label: {
            numberFormat: 'a', // absolute
        },
    },
    series: {
        layout: 'overlap',
        children: [
            {
                name: 'Male',
                pointLabel: {
                    visible: true,
                    numberFormat: 'a#.00',
                },
                color: '#468B97',
                data: [
                    -8.98, -7.52, -6.65, -5.72, -4.85, -3.71, -2.76, -2.07,
                    -1.7, -1.47, -1.22, -0.99, -0.81, -0.62, -0.41, -0.23,
                    -0.15,
                ],
            },
            {
                name: 'Female',
                color: '#EF6262',
                pointLabel: {
                    visible: true,
                    numberFormat: '#.00',
                },
                data: [
                    8.84, 7.42, 6.57, 5.68, 4.83, 3.74, 2.8, 2.14, 1.79, 1.59,
                    1.34, 1.06, 0.83, 0.63, 0.43, 0.25, 0.19,
                ],
            },
        ],
    },
};

let animate = false;
let chart;

function init() {
    console.log('RealChart v' + RealChart.getVersion());
    RealChart.setLogging(true);

    chart = RealChart.createChart(document, 'realchart', config);
}
