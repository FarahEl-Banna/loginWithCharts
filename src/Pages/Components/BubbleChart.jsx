import React,{useState,useEffect} from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from 'highcharts/highcharts-more';
import * as Data from  "./bubbleChartData"

HighchartsMore(Highcharts);
export default function BubbleChart(){

    const options ={
        chart: {
            type: 'packedbubble',
            height: '400px',
            reflow: true
        },
        credits:{
            enabled: false,
        },
        title: {
            text: 'Carbon emissions around the world (2014)',
            align: 'left'
        },
        tooltip: {
            useHTML: true,
            pointFormat: '<b>{point.name}:</b> {point.value}m CO<sub>2</sub>'
        },
        plotOptions: {
            packedbubble: {
                minSize: '20%',
                maxSize: '100%',
                zMin: 0,
                zMax: 1000,
                layoutAlgorithm: {
                    gravitationalConstant: 0.05,
                    splitSeries: true,
                    seriesInteraction: false,
                    dragBetweenSeries: true,
                    parentNodeLimit: true
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.name}',
                    filter: {
                        property: 'y',
                        operator: '>',
                        value: 250
                    },
                    style: {
                        color: 'black',
                        textOutline: 'none',
                        fontWeight: 'normal'
                    }
                }
            }
        },
        series: Data.data
    }
     
    return <HighchartsReact highcharts={Highcharts} options={options} containerProps={{ style: {height:'inherit' } }}/>
}