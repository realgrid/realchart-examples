/**
 * @demo
 *
 */
const config = {
  title: 'Linear Gauge - Band',
  gauge: [
    {
      type: 'linear',
      name: 'gauge',
      vertical: true,
      scale: false,
      width: 80,
      band: {
        visible: true,
        gap: 3,
        ranges: [
          {
            toValue: 30,
            color: '#ff0',
          },
          {
            toValue: 60,
            color: '#fa0',
          },
          {
            color: '#f40',
          },
        ],
      },
      value: Math.random() * 100,
      valueBar: {
        style: {
          fill: 'var(--color-1)',
        },
      },
      label: {
        numberFormat: '#.#',
        style: {
          fill: 'var(--color-1)',
        },
      },
      style: {
        fill: 'var(--color-2)',
      },
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
