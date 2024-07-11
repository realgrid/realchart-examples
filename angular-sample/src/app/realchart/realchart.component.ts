import { Component, OnInit } from '@angular/core';
import * as RealChart from 'realchart/dist/index'

@Component({
  selector: 'app-realchart',
  templateUrl: './realchart.component.html',
  styleUrls: ['./realchart.component.css'],
})
export class RealChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const config = {
      title: "경기도 성남시 인구 현황",
      legend: true,
      xAxis: {
        title: "수정구",
        grid: true,
      },
      yAxis: {
        title: "전체 인구수",
      },
      series: {
        pointLabel: {
          visible: true,
          effect: "outline", 
          style: {},
        },
        data: [
          ["신흥1동", 12904],
          ["신흥2동", 19796],
          ["신흥3동", 10995],
          ["태평1동", 14625],
          ["태평2동", 14627],
          ["태평3동", 12649],
          ["태평4동", 12279],
        ],
        data2: [
          [1, 7],
          [2, 11],
          [3, 9],
          [4, 10],
          [5, 14.3],
          [6, 13],
          [7, 12.5],
        ],
      },
    };

    const chart = RealChart.createChart(document, 'realchart', config as any);
  }
}

