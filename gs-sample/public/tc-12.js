const chart = RealChart.createChart(document, "realchart", {
  // 차트 제목 설정.
  title: "PointLabel",
  xAxis: {
    // 카테고리 타입 작성.
    type: "category",
  },
  series: [
    {
      // bar 타입으로 작성.
      type: "bar",
      // 데이터 포인트를 생성하는데 사용되는 값 목록 추가.
      data: [
        50, 25, 33, 57, 30, 54, 21, 49, 26, 40, 55, 45, 20, 68, 29, 23, 18,
      ],
      // 차트 요소 내 label 설정
      pointLabel: {
        visible: true,
        // dataPoint 내부에 표시되도록 설정
        position: 'inside',
      }
    },
  ],
});
