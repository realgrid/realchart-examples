/**
 * @demo
 *
 */
const config = {
  templates: {
    shape: {
      shape: 'rectangle',
      width: 100,
      height: 100,
      style: {
        fill: 'none',
        stroke: 'var(--color-1)',
        strokeWidth: '5px',
      },
    },
  },
  options: {},
  title: {
    text: 'Annotation Shapes',
    style: {
      fontSize: '30px',
    },
  },
  xAxis: false,
  yAxis: false,
  annotations: [
    {
      template: 'shape',
      type: 'shape',
    },
    {
      template: 'shape',
      type: 'shape',
      style: {
        fill: 'var(--color-2)',
      },
      offsetY: 110,
    },
    {
      template: 'shape',
      type: 'shape',
      shape: 'circle',
      align: 'center',
      verticalAlign: 'middle',
    },
    {
      template: 'shape',
      type: 'shape',
      shape: 'triangle',
      align: 'center',
      verticalAlign: 'middle',
      offsetX: 100,
    },
    {
      template: 'shape',
      type: 'shape',
      shape: 'diamond',
      align: 'right',
      verticalAlign: 'bottom',
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
