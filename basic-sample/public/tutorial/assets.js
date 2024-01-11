const config = {
  assets: [
    {
      id: 'brown-mint',
      type: 'colors',
      colors: ['#009D92', '#47AFA8', '#835337', '#593219', '#937B6F'],
    },
    {
      type: 'pattern',
      id: 'pattern-0',
      pattern: 0,
      style: {
        stroke: '#937B6F',
      },
    },
  ],
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
  annotations: [
    {
      text: `긍정적으로 평가한다<br><b>42.5</b>`,
      offsetX: 160,
      offsetY: 50,
      align: 'center',
      style: {
        fill: '#009D92',
        textAlign: 'center',
      },
    },
    {
      text: `부정적으로 평가한다<br><b>49.9</b>`,
      offsetX: -240,
      verticalAlign: 'bottom',
      align: 'center',
      style: {
        fill: '#835337',
        textAlign: 'center',
      },
    },
    {
      type: 'image',
      imageUrl: 'https://www.realchart.co.kr/demo/assets/images/seoul.png',
      width: 240,
      front: true,
      align: 'center',
      verticalAlign: 'middle',
      offsetX: -10,
      offsetY: -25,
    },
  ],
  series: [
    {
      type: 'pie',
      radius: '50%',
      innerRadius: '50%',
      tooltipText: '${x}: ${y}%',
      data: [
        { label: '매우 긍정', value: 11.1 },
        { label: '어느 정도 긍정', value: 31.4 },
        { label: '어느 정도 부정', value: 33.5 },
        { label: '매우 부정', value: 16.4 },
        { label: '모름|무응답', value: 7.6 },
      ],
      pointLabel: {
        visible: true,
        numberFormat: '#.00',
        suffix: '%',
        position: 'inside',
        style: {
          fill: '#fff',
        },
        styleCallback: (args) => {
          console.log(args);
          return args.index == 4 && { fill: '#000' };
        },
        text: '${x}<br>${y}',
      },
      pointStyleCallback: (args) => {
        return (
          args.index == 4 && {
            fill: `url(#pattern-0)`,
          }
        );
      },
      pointColors: 'brown-mint',
    },
  ],
};

let animate = false;
let chart;

function init() {
  console.log('RealChart v' + RealChart.getVersion());
  // RealChart.setDebugging(true);
  RealChart.setLogging(true);

  chart = RealChart.createChart(document, 'realchart', config);
}
