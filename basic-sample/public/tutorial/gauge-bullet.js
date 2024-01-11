/**
 * @demo
 *
 */
const config = {
  title: 'Bullet Gauge',
  options: {},
  gauge: [
    {
      type: 'bullet',
      name: 'gauge',
      vertical: true,
      width: 80,
      label: {
        numberFormat: '#.#',
      },
      scale: {
        visible: true,
        stepInterval: 20,
      },
      value: 75,
      targetValue: 60,
      valueBar: {
        style: {
          fill: '#222',
        },
      },
      ranges: [
        {
          toValue: 40,
          color: '#777',
        },
        {
          toValue: 70,
          color: '#aaa',
        },
        {
          toValue: 100,
          color: '#ddd',
        },
      ],
    },
  ],
};

let animate;
let chart;

function init() {
  console.log(RealChart.getVersion());
  // RealChart.setDebugging(true);
  RealChart.setLogging(true);

  chart = RealChart.createChart(document, 'realchart', config);
}
