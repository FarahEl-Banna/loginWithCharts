import React,{useState,useEffect} from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsDrilldown from 'highcharts/modules/drilldown';
import * as Data from  "./pieChartData"

HighchartsDrilldown(Highcharts);

export default function PieChart(){
    const options ={
        chart: {
            type: 'pie',
        },
        credits:{
            enabled: false,
        },
        title: {
            text: 'Browser market shares. January, 2022',
            align: 'left'
        },
        subtitle: {
            text: 'Click the slices to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>',
            align: 'left'
        },
    
        accessibility: {
            announceNewData: {
                enabled: true
            },
            point: {
                valueSuffix: '%'
            }
        },
    
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y:.1f}%'
                }
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },
        series: [
            {
                name: 'Browsers',
                colorByPoint: true,
                data: Data.data
            }
        ],
        drilldown: {
            series: Data.drilldownData
        }
    }

    return <HighchartsReact highcharts={Highcharts} options={options} containerProps={{ style: { hight: "100%" } }}/>
}

/**
 * drilldown working no back button 
 * 
 * resizing graphes by setting an active class 
 * onClick={clickHandler}
 * function clickHandler(e) {
    e.target.style.width = "500px";
    e.target.style.height = "500px";

    chartComponent.current.chart.reflow();
  }

  add a loding panel to graphes 

  color sceama ::
   --bg-gragient: linear-gradient(45deg, rgba(37, 119, 104, 0.7), rgba(91, 14, 214, 0.7) 100%);

 */