const chart = RealChart.createChart(document, "realchart", {
  // 차트 제목 설정.
  title: "Chart Legend",
  xAxis: {
    // 카테고리 타입 작성.
    type: "category",
    // 명시적으로 지정하는 카테고리 목록 추가.
    categories: [
      "서울",
      "부산",
      "대구",
      "인천",
      "광주",
      "대전",
      "울산",
      "경기",
      "강원",
      "충북",
      "충남",
      "전북",
      "전남",
      "세종",
      "경북",
      "경남",
      "제주",
    ],
  },
  legend: {
    visible: true, // 범례 표시
    location: "left",
  },
  series: {
    // bar 타입으로 작성.
    type: "bar",
    // 데이터 포인트를 생성하는데 사용되는 값 목록 추가.
    data: [50, 25, 33, 57, 30, 54, 21, 49, 26, 40, 55, 45, 20, 68, 29, 23, 18],
  },
});

const leftLegend = () => {
  chart.legend.updateOption("location", "left");
};
const rightLegend = () => {
  chart.legend.updateOption("location", "right");
};
const topLegend = () => {
  chart.legend.updateOption("location", "top");
};
const bottomLegend = () => {
  chart.legend.updateOption("location", "bottom");
};
