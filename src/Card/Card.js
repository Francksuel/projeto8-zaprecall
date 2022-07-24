import './style.css';
import Question from '../Question/Question';
import React from 'react';
export default function Card({ question, index, status, setStatus }) {
    const [asked, setAsked] = React.useState(question.asked);
    return (
        <>
            {asked ? <Question question={question} index={index + 1} status={status} setStatus={setStatus} /> :
                <div className="card" onClick={() => setAsked(true)}>
                    <p>Pergunta {index + 1}</p><ion-icon name="play-outline"></ion-icon>
                </div>
            }
        </>
    )
}