import './style.css'
import React from 'react'
export default function Answer({ answer, index, status, setStatus }) {

    function Answered({ index, color, icon }) {
        return (
            <div className="card">
                <p className={color} >Pergunta {index}</p><ion-icon name={icon}></ion-icon>
            </div>
        )
    }
    function additem(icon) {
        const newArray = [...status, icon]
        setStatus(newArray);
    }

    const [answered, setAnswered] = React.useState(false);
    const [color, setColor] = React.useState("");
    const [icon, setIcon] = React.useState("");

    return (
        <>
            {answered ? <Answered index={index} color={color} icon={icon} /> :
                <div className='answer'>
                    <p>{answer}</p>
                    <div className='options'>
                        <div className='answersButton redButton' onClick={() => {
                            setColor("red");
                            setIcon("close-circle");
                            additem("close-circle");
                            setAnswered(true);
                        }} >Não lembrei</div>
                        <div className='answersButton yellowButton' onClick={() => {
                            setColor("yellow");
                            setIcon("help-circle");
                            additem("help-circle");
                            setAnswered(true);
                        }} >Quase não lembrei</div>
                        <div className='answersButton greenButton' onClick={() => {
                            setColor("green");
                            setIcon("checkmark-circle");
                            additem("checkmark-circle");
                            setAnswered(true);
                        }} >Zap!</div>
                    </div>
                </div>
            }
        </>
    )
}