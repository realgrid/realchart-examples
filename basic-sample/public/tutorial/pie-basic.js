const config = {
  title: {
    align: 'left',
    text: '2023년 11월',
    gap: 10,
    style: {
      fontSize: '16px',
      padding: '2px 5px',
    },
  },
  subtitle: {
    align: 'left',
    text: '여론 조사',
    style: {
      fill: 'black',
      fontSize: '32px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
  },
  series: {
    type: 'pie',
    radius: '50%',
    tooltipText: '${x}: ${y}%',
    data: [
      { label: '매우 긍정', value: 11.1 },
      { label: '어느 정도 긍정', value: 31.4 },
      { label: '어느 정도 부정', value: 33.5 },
      { label: '매우 부정', value: 16.5 },
      { label: '모름|무응답', value: 7.1 },
    ],
    pointLabel: {
      visible: true,
      numberFormat: '#.00',
      suffix: '%',
      position: 'inside',
      style: {
        fill: '#fff',
      },
      text: '${x}<br>${y}',
    },
    pointColors: ['#009D92', '#47AFA8', '#835337', '#593219', '#937B6F'],
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
