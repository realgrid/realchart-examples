/** source - http://www.gandalf.it/data/data1.htm */
const data = [
    ['1981', 213],
    ['1982', 235],
    ['1983', 562],
    ['1984', 1204],
    ['1985', 1961],
    ['1986', 5089],
    ['1987', 28174],
    ['1988', 80000],
    ['1989', 159000],
    ['1990', 376000],
    ['1991', 727000],
    ['1992', 1313000],
    ['1993', 2217000],
    ['1994', 5846000],
    ['1995', 14352000],
    ['1996', 21819000],
    ['1997', 29760000],
    ['1998', 43230000],
    ['1999', 72398000],
    ['2000', 109574000],
    ['2001', 147345000],
    ['2002', 171638000],
    ['2003', 233101000],
    ['2004', 317646000],
    ['2005', 394992000],
    ['2006', 433193000],
    ['2007', 541677000],
    ['2008', 625226000],
    ['2009', 732740000],
    ['2010', 818374000],
    ['2011', 888239000],
];
const config = {
    title: 'Internet Hosts 1981 - 2011',
    xAxis: {
        type: 'time',
        label: {
            autoArrange: 'none',
            rotation: -45,
            step: 1,
        },
        tick: {
            stepInterval: '1y',
        },
    },
    yAxis: {
        type: 'log',
        strictMax: Math.log10(10000000000),
        tick: {
            steps: [
                0,
                Math.log10(1000),
                Math.log10(1000000),
                Math.log10(1000000000),
            ],
        },
        label: {
            numberFormat: ',',
        },
    },
    series: {
        data: data,
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
