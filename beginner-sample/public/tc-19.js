let config = {
    // 1) [options > Theme, palette]
    // tc-14.html 에서 값 목록 확인 가능
    options: {
        // default, dark, real 중에 하나를 지정해 차트의 테마를 적용한다.
        theme: 'dark',
        // default, gray, warm, cool, forest, vintage, unicorn 중에 하나를 지정해 dataPoint의 기본 색상을 변경한다.
        palette: 'warm',
        style: {
            marginBottom: '100px',
        },
    },
    // 4) [title > verticalAlign]
    // 5) [subtitle > verticalAlign]
    // 일반적으로 subtitle position이 left 또는 right이고 Title 폰트크기가 subtitle 보다 충분히 큰 경우,
    // subtitle의 verticalAlign 값에 따른 변화 확인이 가능합니다.
    // title의 verticalAlign은 그 반대로 subtitle의 폰트크기가 더 큰 경우 확인 가능합니다.
    title: {
        text: 'Title',
        style: {
            fontSize: '40px',
        },
    },
    subtitle: {
        text: 'Subtitle',
        position: 'left',
        verticalAlign: 'top',
    },
    xAxis: {
        title: {
            text: '일일 Daily fat',
        },
        grid: true,
    },
    yAxis: {
        title: {
            text: 'Vertical 수직축 Axis',
        },
    },
    series: {
        type: 'pie',
        colorByPoint: true,
        name: 'column1',
        pointLabel: true,
        legendByPoint: true,
        data: [
            ['서울특별시', 11],
            ['경기도 성남시', 13],
            ['경기도 수원시', 10],
            ['부산광역시', 15],
            ['전북특별자치도 전주시', 19],
            ['경상남도 김해시', 22],
        ],
    },
    legend: {
        visible: true,
        // 6) [legend > itemGap]
        // legend 항목 간의 간격을 설정
        itemGap: 30,
        // 7) [legend > itemsAlign]
        // layout이 horizontal인 상태에서 값을 start, center, end 중 선택해서 변경할 경우 변화를 확인할 수 있습니다.
        itemsAlign: 'end',
        // 8) [legend > layout]
        layout: 'horizontal',
        // 9) [legend > maxHeight]
        // layout이 vertical(수직)일 때 maxHeight로 지정한 크기를 벗어나게 될 경우 줄바꿈 된다.
        maxHeight: 100,
        // 10) [legend > maxWidth]
        // layout이 horizontal(수평)일 때 maxHeight로 지정한 크기를 벗어나게 될 경우 줄바꿈 된다.
        maxWidth: 300,
        location: 'bottom',
        // 11) [legend > offsetX]
        // align 기준의 상대위치값
        // location이 top 또는 bottom 일 때 동작함
        offsetX: 200,
        // 12) [legend > offsetY]
        // location이 left 또는 right 일 때 동작함
        offsetY: 100,
        // 13) [legend > seriesHovering]
        // 현재 버전에서 동작안함. 버그로 확인.
        seriesHovering: true,
        // 14) [legend > verticalAlign]
        // location이 left 또는 right 일 때 동작함
        verticalAlign: 'top',
    },
};

const chart = RealChart.createChart(document, 'realchart', config);
