let config = {
  title: {
    text: "Legends",
    // subtitle이 title보다 클 때 동작을 확인할 수 있습니다. 아래 style의 주석을 해제할 경우 변화 확인 가능
    verticalAlign: 'top',
    // style: {
    //   fontSize: '20px'
    // }
  },
  subtitle: {
    text: "Legends",
    position: 'left',
    // position이 left 또는 right 일 때 title보다 작을 때 동작을 확인할 수 있습니다.
    verticalAlign: 'bottom',
    // style: {
    //   fontSize: '40px'
    // }
  },
  xAxis: {
      title: {
        text: "일일 Daily fat",
      },
      categories: ['쓰리엠', '아디다스', '디즈니', '이마트', '메리어트 ', '시세이도'],
      grid: true,
  },
  yAxis: {
      title: {
        text: "Vertical 수직축 Axis",
      },
  },
  series: [{
      name: 'column1',
      pointLabel: true,
      data: [11, 22, 15, 9, 13, 27]
  }, {
      name: 'column2',    
      pointLabel: true,
      data: [15, 19, 19, 6, 21, 21]
  }, {
      name: 'line1',
      type: 'line',
      pointLabel: true,
      data: [13, 17, 15, 11, 23, 17]
  }, {
      name: 'line2',
      type: 'line',
      pointLabel: true,
      data: [15, 19, 13, 15, 20, 15]
  }],
  legend: {
    // legend 항목 간의 간격을 설정
    itemGap: 30,
    // layout이 horizontal인 상태에서 값을 start, center, end 중 선택해서 변경할 경우 변화를 확인할 수 있습니다.
    itemsAlign: 'end',
    layout: 'horizontal',
    // layout이 vertical(수직)일 때 maxHeight로 지정한 크기를 벗어나게 될 경우 줄바꿈 된다.
    maxHeight: 100,
    // layout이 horizontal(수평)일 때 maxHeight로 지정한 크기를 벗어나게 될 경우 줄바꿈 된다.
    maxWidth: 200,
    location: 'bottom',
    // location이 top 또는 bottom 일 때 동작함
    offsetX: -200,
    // location이 left 또는 right 일 때 동작함
    offsetY: 100,
    // 현재 버그로 인해 동작x
    seriesHovering: true,
    // location이 left 또는 right 일 때 동작함
    verticalAlign: 'top'
  }
}

const chart = RealChart.createChart(document, "realchart", config);
