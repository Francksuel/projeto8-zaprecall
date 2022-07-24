import "./style.css"
import turnArrow from "./setinha.png"
import Answer from '../Answer/Answer';
import React from 'react';
export default function Question({ question, index, status, setStatus }) {
    const [clicked, setClicked] = React.useState(false);
    return (
        <>
            {clicked ?
                <Answer answer={question.answer} index={index} status={status} setStatus={setStatus} />
                :
                <div className='question' ><p>{question.question}</p> <img onClick={() => setClicked(true)} src={turnArrow} /></div>}
        </>
    )
}
