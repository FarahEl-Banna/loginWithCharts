import React from "react";
import {MuuriComponent} from 'muuri-react';
import DHItem from "./DHItem";

export default function DraggableHorizontal(){
    const data = [
        {key: '1', title: 'First Item',unit:'%', number: '234', color: 'blue',percentage:'58'},
        {key: '2', title: 'Second Item',unit:'%', number: '71', color: 'red',percentage:'62'},
        {key: '3', title: 'Third Item',unit:'$', number: '1,43M', color: 'yellow',percentage:'73'},
        {key: '4', title: 'Fourth Item',unit:'hires', number: '36', color: 'green',percentage:'81'},
      ];
      const Items = data.map((props)=><DHItem key={props.key} {...props}/>)

    return(
        <MuuriComponent dragAxis={'x'}  dragEnabled={true}>
            {Items}
        </MuuriComponent>
 
    )
}