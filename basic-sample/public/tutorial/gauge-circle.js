/**
 * @demo
 *
 */
const config = {
  title: 'Circle Gauge',
  gauge: [
    {
      name: 'gauge1',
      template: 'gauge',
      value: Math.random() * 100,
      valueRim: {
        style: {
          fill: 'var(--color-1)',
        },
      },
      rim: {
        style: {
          fill: 'var(--color-2)',
          opacity: 0.5,
        },
      },
      label: {
        style: {
          fill: 'var(--color-1)',
        },
        text: "<t style='fill:gray'>Time -</t> ${value}",
      },
    },
  ],
};

let animate;
let chart;

function init() {
  console.log(RealChart.getVersion());
  // RealChart.setDebugging(true);

  chart = RealChart.createChart(document, 'realchart', config);
}
