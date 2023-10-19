
import { useEffect, useRef, useState } from "react";
import RealChart from "realchart"

const RealChartComponent = () => {
    const isMounted = useRef(false);
    const [chart, setChart] = useState(null);
    const chartRef = useRef(null);

    const config = {
        title: '경기도 성남시 인구 현황',
        legend: true,
        xAxis: {
            title: '수정구',
            grid: true,
        },
        yAxis: {
            title: '전체 인구수',
        },
        series: {
            pointLabel: {
                visible: true,
                effect: 'outline', 
                style: {},
            },
            data: [
                ['신흥1동', 12904],
                ['신흥2동', 19796],
                ['신흥3동', 10995],
                ['태평1동', 14625],
                ['태평2동', 14627],
                ['태평3동', 12649],
                ['태평4동', 12279],
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
    useEffect(() => {
        if(!isMounted.current){
            const realChart = RealChart.createChart(document, chartRef.current, config);
            setChart(realChart)
            isMounted.current = true;
        };
        return () => {
            if(chart){
                chart.destory();
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        <div
            id="realchart"
            ref={chartRef}
            style={{
                width: "850px",
                height: "550px"
            }}
        ></div>
    );
};

export default RealChartComponent;
