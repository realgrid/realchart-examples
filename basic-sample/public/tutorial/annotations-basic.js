const config = {
  title: "2023년 2월 카드사 연체율",
  xAxis: {
    categories: ["신한", "삼성", "KB", "롯데", "BC", "우리", "하나"],
    grid: {
      visible: true,
    },
  },
  yAxis: {},
  series: [
    {
      name: "대기질",
      pointLabel: true,
      data: [1.73, 1.19, 1.92, 1.36, 1.54, 1.82, 1.86],
      color: "#6daeb7",
    },
  ],
  annotations: [
    {
      imageUrl: "https://www.realchart.co.kr/demo/assets/images/cards.png",
      front: true,
      width: 100,
      offsetX: 30,
    },
    {
      text: "*자료: 금융감독원",
      scope: "container",
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        fill: "#666",
      },
      align: "center",
      verticalAlign: "bottom",
    },
  ],
};

let animate = false;
let chart;

function init() {
  console.log("RealChart v" + RealChart.getVersion());
  // RealChart.setDebugging(true);
  RealChart.setLogging(true);

  chart = RealChart.createChart(document, "realchart", config);
}
