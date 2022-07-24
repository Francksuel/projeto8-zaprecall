import './style.css'
import sad from "./sad.png";
import React from 'react';
import party from './party.png'
export default function ZapStatus(props) {
    let result = "Parabéns!"
    let mensage = "Você não esqueceu de nenhum flashcard!"
    let emoji = party    
    for (let i=0;i<props.status.length;i++){
        if (props.status[i]=="close-circle"){
            result="Putz..."
            mensage="Ainda faltam alguns... Mas não desanime!"
            emoji = sad
        }
    }
    return (
        <>
            {((props.status.length) !== (props.cards.length)) ?
                <div className="zapStatus" >
                    <p>{props.status.length}/{props.cards.length} CONCLUÍDOS</p>
                    <div>
                        {props.status.map((value) => <ion-icon name={value}></ion-icon>)}
                    </div>
                </div>
                :
                <div className='result zapStatus'>
                    <span><img src={emoji}  /> <h2>{result}</h2></span>
                    <p>{mensage}</p>
                    <p>{props.status.length}/{props.cards.length} CONCLUÍDOS</p>
                    <div>
                        {props.status.map((value) => <ion-icon name={value}></ion-icon>)}
                    </div>
                </div>
            }
        </>

    )
}