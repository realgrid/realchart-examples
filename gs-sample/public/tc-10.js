const chart = RealChart.createChart(document, "realchart", {
  // 차트 제목 설정.
  title: "Chart Tick",
  xAxis: {
    // 카테고리 타입 작성.
    type: "category",
    // x축 눈금의 보임여부를 설정한다.
    tick: {
      visible: true,
    },
  },
  yAxis: {
    // y축 눈금의 보임여부를 설정한다.
    tick: {
      visible: true,
    },
  },
  series: {
    // bar 타입으로 작성.
    type: "bar",
    // 데이터 포인트를 생성하는데 사용되는 값 목록 추가.
    data: [
      ["신흥1동", 1329042],
      ["신흥2동", 1927962],
      ["신흥3동", 1029952],
      ["태평1동", 1426252],
      ["태평2동", 1426272],
      ["태평3동", 1226492],
      ["태평4동", 1222792],
    ],
  },
});
