/**
 * @demo
 *
 */
const config = {
  templates: {
    gauge: {
      label: {
        numberFormat: '#.#',
      },
    },
  },
  title: 'Linear Gauge Group',
  gauge: [
    {
      type: 'lineargroup',
      width: '80%',
      height: 250,
      maxValue: 100,
      vertical: false,
      children: [
        {
          name: 'gauge1',
          template: 'gauge',
          value: Math.random() * 100,
          label: {
            style: {
              fill: 'var(--rct-linear-gauge-value-fill)',
            },
          },
        },
        {
          name: 'gauge2',
          template: 'gauge',
          value: Math.random() * 100,
          valueBar: {
            style: {
              fill: 'var(--color-2)',
            },
          },
          label: {
            style: {
              fill: 'var(--color-2)',
            },
          },
        },
        {
          name: 'gauge3',
          template: 'gauge',
          value: Math.random() * 100,
          valueBar: {
            style: {
              fill: 'var(--color-3)',
            },
          },
          label: {
            style: {
              fill: 'var(--color-3)',
            },
          },
        },
        {
          name: 'gauge4',
          template: 'gauge',
          value: Math.random() * 100,
          valueBar: {
            style: {
              fill: 'var(--color-4)',
            },
          },
          label: {
            style: {
              fill: 'var(--color-4)',
            },
          },
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
