RealChart.createChart(document, "realchart", {
  // 차트 제목 설정.
  title: "Area Chart",
  xAxis: {
    type: "category",
    // 명시적으로 지정하는 카테고리 목록 추가.
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  series: {
    // area 시리즈로 설정.
    type: "area",
    // 데이터 포인트를 생성하는데 사용되는 값 목록 추가.
    data: [4.2, 5.7, 7.9, 13.9, 18.2, 21.4, 25, 26.4, 22.8, 17.5, 12.1, 7.6],
  },
});
