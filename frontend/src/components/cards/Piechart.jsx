import React from "react";
import ReactEcharts from 'echarts-for-react';

const PieChart = ({ data }) => {
    const tooltip = {
        trigger: 'item',
    }

    const legend = {
        top: '30%',
        right: '20%',
        orient: 'vertical',
        textStyle: {
            color: 'white'
        },
        itemHeight: 10,
        itemWidth: 10,
        formatter: function (name) {
            const item = data.find(item => item.name === name);
            return `${name}: ${item.value}%`;
        }
    }

    const emphasis = {
        label: {
            show: false,
            fontSize: 20,
            fontWeight: 'bold'
        }
    }

    const option = {
        tooltip: tooltip,
        legend: legend,
        series: [
            {
                name: 'Data',
                type: 'pie',
                radius: ['30%', '50%'],
                avoidLabelOverlap: false,
                itemStyle: {},
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: emphasis,
                labelLine: {
                    show: false
                },
                data: data,
            },
        ]
    };

    return <ReactEcharts option={option} style={{ height: '400px', width: '100%' }} />;
};

export default PieChart;
