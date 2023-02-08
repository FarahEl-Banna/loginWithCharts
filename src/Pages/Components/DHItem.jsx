import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';


export default function DHItem({title, number, percentage, color, unit }){

    const properties = {'--item-color':color}
    const options = {
        colors: [color, '#d2cec9'],
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            height: 90,
            backgroundColor: null,
            margin: [0, 0, 0, 0],
            padding: [0, 0, 0, 0],
            space:[0,0,0,0]
        },
        credits:{
            enabled: false,
        },
        title: {
            verticalAlign: 'middle',
            floating: true,
            text: percentage
          },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                borderColor: null,
                size:  '100%' ,                
                dataLabels: {
                    connectorWidth: false,
                    enabled: false,
                }
            }
        },
        series: [{
            name: 'Percentage',
            colorByPoint: true,
            innerSize: '75%',
          data: [
            { name: title, y: parseInt(percentage) },
            { name: "title", y: 100 -parseInt(percentage) }
          ],
        }]
      };
    console.log(title,number,percentage,color)
    return(
        <div className="item">

        <div className="item-content" style={{...properties}}>
                <h2 className="content-title">{title}</h2>
            <div className="side-content"> 
            <div className="side-details">
                <MDBIcon fas className="icons" icon="angle-up" />
                <p className="content-details">{number}<span className="content-unit" >{unit}</span></p>
                </div>
            <HighchartsReact highcharts={Highcharts} options={options} containerProps={{ style: { width: "100px" } }}/>
            </div>
        </div>
        </div>
    )
}
/**
 * position: relative; overflow: hidden;
 *  width: 250px; height: 90px; 
 * text-align: left; line-height: normal;
 *  z-index: 0; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); 
 * user-select: none; touch-action: manipulation; outline: none;
 *  containerProps={{ style: { width: "200px" } }}
 */