/**
 * @demo
 *
 */
const config = {
  title: {
    text: 'Number of Mobile Users in the World (Users In Millions)',
  },
  options: {},
  legend: {
    location: 'right',
  },
  series: {
    type: 'pie',
    totalAngle: 180,
    startAngle: 270,
    legendByPoint: true,
    radius: '70%',
    centerY: '80%',
    innerRadius: '50%',
    innerText: '<b>Number of Mobile Users</b><br>in the world',
    pointLabel: {
      visible: true,
      text: '${y}',
    },
    pointColors: [
      '#002F5C',
      '#004987',
      '#004F92',
      '#00569D',
      '#3E77B6',
      '#90B1D8',
      '#BBD2Ec',
    ],
    tooltipText: '${x} - ${y}',
    data: [
      { name: 'Lava', y: 50 },
      { name: 'HP', y: 48 },
      { name: 'Moto', y: 55 },
      { name: 'Sony', y: 45 },
      { name: 'LG', y: 48 },
      { name: 'Samsung', y: 50 },
      { name: 'Redmi', y: 53 },
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
