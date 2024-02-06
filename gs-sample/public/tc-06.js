RealChart.createChart(document, "realchart", {
  // 차트 제목 설정.
  title: "Pie Chart",
  series: [
    {
      // pie 시리즈로 설정.
      type: "pie",
      // 데이터 포인트를 생성하는데 사용되는 값 목록 추가.
      data: [
       ['안드로이드', 53],
       ['IOS', 29],
       ['Windows', 10],
       ['Macintosh', 8]
      ],
    },
  ],
});
