RealChart.createChart(document, "realchart", {
  // 차트 제목 설정.
  title: "Scatter Chart",
  series: [
    {
      // scatter 시리즈로 설정.
      type: "scatter",
      // 데이터 포인트를 생성하는데 사용되는 값 목록 추가.
      data: [
        [9, 81],
        [98, 5],
        [51, 50],
        [41, 22],
        [58, 24],
        [78, 37],
        [55, 56],
        [18, 45],
        [42, 44],
        [3, 52],
        [31, 18],
        [79, 91],
        [93, 23],
        [44, 83],
      ],
    },
  ],
});
