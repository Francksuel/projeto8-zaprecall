import './style.css'
import React from 'react';
export default function ZapStatus(props){  
console.log(props.status)
return (
    <div className="zapStatus" >
            <p>{props.status.length}/4 concluidos</p> 
            <div>
            {props.status.map((value)=><ion-icon name={value}></ion-icon>)}                
            </div>  
            
            </div>
)
}