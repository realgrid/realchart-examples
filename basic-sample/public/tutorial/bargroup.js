const data = [
    {
        구분값: '서울',
        긍정: 26.9,
        부정: 68.9,
        '모름|무응답': 4.2,
    },
    {
        구분값: '인천|경기',
        긍정: 31.2,
        부정: 64.8,
        '모름|무응답': 4,
    },
    {
        구분값: '대전|세종|충청',
        긍정: 30.7,
        부정: 59.9,
        '모름|무응답': 9.4,
    },
    {
        구분값: '광주|전라',
        긍정: 19.4,
        부정: 66.1,
        '모름|무응답': 14.5,
    },
    {
        구분값: '대구|경북',
        긍정: 49.6,
        부정: 42.2,
        '모름|무응답': 8.2,
    },
    {
        구분값: '부산|울산|경남',
        긍정: 39.5,
        부정: 51.5,
        '모름|무응답': 9,
    },
    {
        구분값: '강원|제주',
        긍정: 37,
        부정: 53,
        '모름|무응답': 9.9,
    },
];
const config = {
    inverted: true,
    templates: {
        bar: {
            xField: '구분값',
            data,
            pointLabel: {
                visible: true,
                numberFormat: '#.#',
                suffix: '%',
                position: 'inside',
            },
            style: {
                stroke: 'none',
            },
        },
        line: {
            xField: '구분값',
            yField: '긍정',
            data,
        },
    },
    title: {
        text: '2023년 11월',
        gap: 10,
        backgroundStyle: {
            fill: 'black',
            rx: '3px',
        },
        style: {
            fill: '#fff',
            fontSize: '16px',
            padding: '2px 5px',
        },
    },
    subtitle: {
        text: '여론 조사',
        style: {
            fill: 'black',
            fontSize: '32px',
            fontWeight: 'bold',
            marginBottom: '10px',
        },
    },
    xAxis: {
        type: 'category',
        label: {
            style: {
                fill: '#000',
                fontWeight: 'bold',
            },
        },
    },
    yAxis: {
        type: 'linear',
        label: false,
        grid: false,
        // strictMax: 100,
        maxPadding: 0,
    },
    series: [
        {
            type: 'bargroup',
            // layout: 'fill',
            layout: 'stack',
            children: [
                {
                    name: '긍정',
                    template: 'bar',
                    yField: '긍정',
                    style: {
                        fill: '#B2A4FF',
                    },
                },
                {
                    name: '부정',
                    template: 'bar',
                    yField: '부정',
                    style: {
                        fill: '#FFB4B4',
                    },
                },
                {
                    name: '모름|무응답',
                    template: 'bar',
                    yField: '모름|무응답',
                    style: {
                        fill: '#FFDEB4',
                    },
                },
            ],
        },
        // { name: '긍정', type: 'line', template: 'line' },
    ],
    legend: {
        reversed: true,
    },
};

let animate = false;
let chart;

function init() {
    console.log('RealChart v' + RealChart.getVersion());
    RealChart.setLogging(true);

    chart = RealChart.createChart(document, 'realchart', config);
}
