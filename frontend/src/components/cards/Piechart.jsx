import React from "react";
import ReactEcharts from 'echarts-for-react';

const PieChart = ({ data }) => {
    const tooltip = {
        trigger: 'item',
        formatter: function (params) {
            const item = data.find(item => item.name === params.name);
            return (
                `<strong> ${item.name} </strong> <br/>
                percentage: ${item.value}% <br/> 
                total time: (${item.text})`
            );
        },
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
                name: "",
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {},
                label: {show: false},
                labelLine: {show: false},
                emphasis: emphasis,
                data: data,
            },
        ]
    };

    return <ReactEcharts option={option} style={{ height: '400px', width: '100%' }} />;
};

export default PieChart;
