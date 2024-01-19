/**
 * @demo
 *
 */
const config = {
  polar: true,
  title: 'Polar Chart',
  xAxis: {
    type: 'category',
    categories: ['성남시', '용인시', '수원시', '일산시', '화성시', '평택시'],
  },
  yAxis: {
    line: true,
    label: true,
  },
  series: [
    {
      type: 'area',
      color: '#ccc',
      data: [13, 9, 11, 12.3, 11, 15.5],
    },
    {
      type: 'bar',
      pointLabel: true,
      data: [7, 11, 9, 14.3, 13, 12.5],
    },
  ],
};

let animate;
let chart;

function init() {
  console.log('RealChart v' + RealChart.getVersion());
  RealChart.setLogging(true);

  chart = RealChart.createChart(document, 'realchart', config);
}
