import React,{useState}from 'react';
import { MDBIcon } from 'mdb-react-ui-kit';
import {MuuriComponent} from 'muuri-react';
//import {getResponsiveStyle} from 'muuri-react';
import Linechart from './LInechart';
import BarChart from './BarChart';
import PieChart from './PieChart';
import BubbleChart from './BubbleChart';


// const responsiveStyle = getResponsiveStyle({
//   // The Muuri component is virtually divided into 8 columns,
//   // the width of the item will be 3 columns (minus the margin).
//   columns: 2 / 8,
//   margin:"0px",
//   padding:"0px",
//   ratio: 1.5,
// });item-grid muuri-item muuri-item-shown


export default function DraggableGrid(){
  const [graphkey,setGraphKey]= useState(0)

    const items = [
        {key: '1', component: <Linechart/>, size: 's', color: 'red'},
        {key: '2', component: <BarChart/>, size: 'l', color: 'blue'},
        {key: '3', component: <PieChart/>, size: 'l', color: 'blue'},
        {key: '4', component: <BubbleChart/>, size: 's', color: 'red'},
      ];
      function expandGraph(e){
        const parent = e.target.parentNode;
        console.log(parent)
        if(e.target.classList.contains('fa-expand')){
          e.target.classList.remove('fa-expand')
          e.target.classList.add('fa-compress-arrows-alt')
          parent.classList.add('expanded')
        }
        else{
          e.target.classList.add('fa-expand')
          e.target.classList.remove('fa-compress-arrows-alt')
          parent.classList.remove('expanded')
        }
        setGraphKey(prev=>prev++)
        //e.target.classList.add('expanded')
      }

      const Items = items.map((props)=>{
        return(
      <div className="item-grid" key={props.key} id={graphkey}>
        <div className="item-content-grid">
          <MDBIcon fas icon="arrows-alt" className='handle'/>
          {props.component}
          <MDBIcon fas icon="expand" className='content-header' onClick={expandGraph}/>
          </div>
        </div>)})

    return(
        <MuuriComponent 
        key={graphkey}
          dragAxis={'xy'}  
          dragEnabled={true} 
          dragFixed dragHandle=".handle">
            {Items}
        </MuuriComponent>
    )
    
}
/**
 * <div className='item-grid'><MDBIcon fas icon="arrows-alt" className='handle'/><Linechart/></div>
            <div className='item-grid'><MDBIcon fas icon="arrows-alt" className='handle'/><BarChart/></div>
            <div className='item-grid'><MDBIcon fas icon="arrows-alt" className='handle'/><PieChart/></div>
            <div className='item-grid'><MDBIcon fas icon="arrows-alt" className='handle'/><BubbleChart/></div>
 */