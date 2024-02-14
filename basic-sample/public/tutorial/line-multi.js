/**
 * @demo
 *
 */
const config = {
  type: 'line',
  options: {
    theme: 'real',
    palette: 'unicorn',
  },
  title: '마스크 종류별 수출 현황',
  xAxis: {
    title: '날짜',
    type: 'date',
  },
  yAxis: {
    title: '수출량',
  },
  templates: {
    line: {
      lineType: 'spline',
      marker: true,
      data: [
        {
          수술용: 45,
          보건용: 6724,
          비말차단용: 396,
          기타: 7122,
          date: '2021-01',
        },
        {
          수술용: 14,
          보건용: 7719,
          비말차단용: 567,
          기타: 7247,
          date: '2021-02',
        },
        {
          수술용: 13,
          보건용: 7172,
          비말차단용: 465,
          기타: 8340,
          date: '2021-03',
        },
        {
          수술용: 57,
          보건용: 4265,
          비말차단용: 636,
          기타: 8858,
          date: '2021-04',
        },
        {
          수술용: 103,
          보건용: 4830,
          비말차단용: 373,
          기타: 6618,
          date: '2021-05',
        },
        {
          수술용: 78,
          보건용: 5150,
          비말차단용: 307,
          기타: 6621,
          date: '2021-06',
        },
        {
          수술용: 38,
          보건용: 8091,
          비말차단용: 3574,
          기타: 5439,
          date: '2021-07',
        },
        {
          수술용: 8,
          보건용: 10906,
          비말차단용: 1015,
          기타: 4949,
          date: '2021-08',
        },
        {
          수술용: 88,
          보건용: 7638,
          비말차단용: 1372,
          기타: 4474,
          date: '2021-09',
        },
        {
          수술용: 63,
          보건용: 6460,
          비말차단용: 1483,
          기타: 5322,
          date: '2021-10',
        },
        {
          수술용: 1061,
          보건용: 6273,
          비말차단용: 2658,
          기타: 4159,
          date: '2021-11',
        },
        {
          수술용: 1050,
          보건용: 9633,
          비말차단용: 780,
          기타: 4490,
          date: '2021-12',
        },
        {
          수술용: 543,
          보건용: 14534,
          비말차단용: 2341,
          기타: 5836,
          date: '2022-01',
        },
        {
          수술용: 59,
          보건용: 18051,
          비말차단용: 4181,
          기타: 5255,
          date: '2022-02',
        },
        {
          수술용: 107,
          보건용: 16306,
          비말차단용: 569,
          기타: 4558,
          date: '2022-03',
        },
        {
          수술용: 4,
          보건용: 7127,
          비말차단용: 145,
          기타: 3001,
          date: '2022-04',
        },
        {
          수술용: 21,
          보건용: 11401,
          비말차단용: 96,
          기타: 2217,
          date: '2022-05',
        },
        {
          수술용: 19,
          보건용: 5810,
          비말차단용: 98,
          기타: 2418,
          date: '2022-06',
        },
        {
          수술용: 3,
          보건용: 5742,
          비말차단용: 274,
          기타: 2072,
          date: '2022-07',
        },
        {
          수술용: 16,
          보건용: 9069,
          비말차단용: 146,
          기타: 2130,
          date: '2022-08',
        },
        {
          수술용: 13,
          보건용: 5702,
          비말차단용: 414,
          기타: 1660,
          date: '2022-09',
        },
        {
          수술용: 8,
          보건용: 2429,
          비말차단용: 115,
          기타: 857,
          date: '2022-10',
        },
        {
          수술용: 53,
          보건용: 2382,
          비말차단용: 110,
          기타: 1029,
          date: '2022-11',
        },
        {
          수술용: 4,
          보건용: 12596,
          비말차단용: 911,
          기타: 2890,
          date: '2022-12',
        },
        {
          수술용: 3,
          보건용: 3861,
          비말차단용: 123,
          기타: 2105,
          date: '2023-01',
        },
        {
          수술용: 0,
          보건용: 2481,
          비말차단용: 28,
          기타: 2023,
          date: '2023-02',
        },
        {
          수술용: 0,
          보건용: 998,
          비말차단용: 269,
          기타: 1384,
          date: '2023-03',
        },
        {
          수술용: 0,
          보건용: 508,
          비말차단용: 457,
          기타: 1112,
          date: '2023-04',
        },
        { 수술용: 2, 보건용: 624, 비말차단용: 421, 기타: 754, date: '2023-05' },
        {
          수술용: 0,
          보건용: 703,
          비말차단용: 283,
          기타: 1169,
          date: '2023-06',
        },
        {
          수술용: 0,
          보건용: 1531,
          비말차단용: 116,
          기타: 875,
          date: '2023-07',
        },
        { 수술용: 0, 보건용: 411, 비말차단용: 68, 기타: 1811, date: '2023-08' },
        { 수술용: 0, 보건용: 720, 비말차단용: 243, 기타: 773, date: '2023-09' },
        { 수술용: 3, 보건용: 697, 비말차단용: 225, 기타: 481, date: '2023-10' },
        { 수술용: 3, 보건용: 750, 비말차단용: 225, 기타: 481, date: '2023-11' },
        {
          수술용: 3,
          보건용: 1800,
          비말차단용: 225,
          기타: 481,
          date: '2023-12',
        },
      ],
      xField: 'date',
    },
  },
  series: [
    {
      template: 'line',
      name: '수술용',
      yField: '수술용',
    },
    {
      template: 'line',
      name: '보건용',
      yField: '보건용',
    },
    {
      template: 'line',
      name: '비말차단용',
      yField: '비말차단용',
    },
    {
      template: 'line',
      name: '기타',
      yField: '기타',
    },
  ],
};
let chart;

function init() {
  console.log('RealChart v' + RealChart.getVersion());
  // RealChart.setDebugging(true);
  RealChart.setLogging(true);

  chart = RealChart.createChart(document, 'realchart', config);
}