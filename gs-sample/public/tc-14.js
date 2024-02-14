let config = {
  // 차트 제목 설정.
  title: "Theme & Palette",
  options: {
    theme: "default",
    palette: "default"
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
      ],
      // point bar별로 색을 다르게 표시한다.
      colorByPoint: true,
    },
  ],
};

const chart = RealChart.createChart(document, "realchart", config);

document.getElementById("theme").onchange = (e) => {
  config.options.theme = e.target.value;
  chart.load(config);
};
document.getElementById("palette").onchange = (e) => {
  config.options.palette = e.target.value;
  chart.load(config);
};
