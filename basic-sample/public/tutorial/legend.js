/**
 * @demo
 *
 * Bar Series 기본 예제.
 */
const config = {
  title: '시도별 대기정보(PM-2.5)',
  xAxis: {
    categories: [
      '서울',
      '부산',
      '대구',
      '인천',
      '광주',
      '대전',
      '울산',
      '경기',
      '강원',
      '충북',
      '충남',
      '전북',
      '전남',
      '세종',
      '경북',
      '경남',
      '제주',
    ],
    grid: {
      visible: true,
    },
  },
  yAxis: {
    title: 'PM-2.5(㎍/㎥)',
  },
  series: [
    {
      name: '일평균',
      data: [
        50, 25, 33, 57, 30, 54, 21, 49, 26, 40, 55, 45, 20, 68, 29, 23, 18,
      ],
    },
    {
      name: '최고값',
      type: 'line',
      data: [
        76, 49, 44, 84, 46, 140, 35, 88, 56, 129, 149, 106, 53, 146, 63, 46, 31,
      ],
    },
  ],
  legend: {
    location: 'top',
    align: 'right',
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
