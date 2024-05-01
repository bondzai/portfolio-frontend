import React from "react";
import ReactEcharts from 'echarts-for-react';

const PieChart = ({ data, title }) => {
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
        formatter: function (name) {
            const item = data.find(item => item.name === name);
            return `${name}: ${item.value}%`;
        },
        textStyle: { color: 'whitesmoke' },
        top: 'center',
        orient: 'vertical',
        itemHeight: 10,
        itemWidth: 10,
    }

    const emphasis = {
        label: {
            show: false,
            fontSize: 20,
            fontWeight: 'bold',
        },
    }

    const option = {
        title: {
            text: title,
            textStyle: {
                color: 'whitesmoke',
                fontSize: 14,
                fontWeight: 'bold',
                align: 'center',
            },
            top: 10,
            left: 'center',
        },
        tooltip: tooltip,
        legend: legend,
        series: [
            {
                type: 'pie',
                radius: ['58%', '70%'],
                avoidLabelOverlap: false,
                label: {show: false},
                labelLine: {show: false},
                emphasis: emphasis,
                data: data,
            },
        ]
    };

    return (
        <ReactEcharts
            option={option}
            style={{ 
                height: '260px',
                width: '100%',
                backgroundColor: "#1a2949",
                margin: "2px",
                borderRadius: "10px",
            }} 
        />
    )
};

export default PieChart;
