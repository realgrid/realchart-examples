let config = {
  // 차트 제목 설정.
  title: {
    visible: true,
    // title 설정
    text: "Title Text",
    // 정렬 방법 설정.
    align: 'center'
  },
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
      ]
    },
  ],
};

const chart = RealChart.createChart(document, "realchart", config);

document.getElementById("align").onchange = (e) => {
  chart.title.set("align", e.target.value)
};