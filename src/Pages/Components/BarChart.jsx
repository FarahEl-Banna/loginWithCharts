import React,{useState,useEffect} from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function BarChart(){
    const [data,setData] = useState([])
    const xAxisdata = ['2020/21', '2019/20', '2018/19', '2017/18', '2016/17']
    const tableData = [{
        name: 'Cristiano Ronaldo',
        data: [4, 4, 6, 15, 12]
    }, {
        name: 'Lionel Messi',
        data: [5, 3, 12, 6, 11]
    }, {
        name: 'Robert Lewandowski',
        data: [5, 15, 8, 5, 8]
    }]

    const options={
        chart: {
            type: 'bar'
        },
        credits:{
            enabled: false,
        },
        title: {
            text: 'UEFA CL top scorers by season'
        },
        xAxis: {
            categories: xAxisdata
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Goals'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: tableData
    }


    return(
        <HighchartsReact highcharts={Highcharts} options={options} containerProps={{ style: { hight: "100%" } }}/>
      )
}