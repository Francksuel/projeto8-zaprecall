import './style.css'
import React from 'react'
export default function Answer({ answer, index }) {

    function Answered({index,color,icon}) {
        return (
            <div className="card">
                <p className={color} >Pergunta {index}</p><ion-icon name={icon}></ion-icon>
            </div>
        )
    }

    const [answered, setAnswered] = React.useState(false);
    const [color, setColor] = React.useState("");
    const [icon, setIcon] = React.useState("");    

    return (
        <>
            {answered ? <Answered index={index} color={color} icon={icon} /> :
                <div className='answer'>
                    <p>{answer}</p>
                    <div className='answers'>
                        <div className='answersButton redButton' onClick={() => {
                            setColor("red");
                            setIcon("close-circle");
                            setAnswered(true);
                        }} >Não lembrei</div>
                        <div className='answersButton yellowButton' onClick={() => {
                            setColor("yellow");
                            setIcon("help-circle");
                            setAnswered(true);
                        }} >Quase não lembrei</div>
                        <div className='answersButton greenButton' onClick={() => {
                            setColor("green");
                            setIcon("checkmark-circle");
                            setAnswered(true);
                        }} >Zap!</div>
                    </div>
                </div>
            }
        </>
    )
}