import './style.css';
import React from 'react';
import turnArrow from "./setinha.png"
import Answer from '../Answer/Answer';
export default function Questions({ cards,status,setStatus}) {


    function Card({ question, index }) {
        const [asked, setAsked] = React.useState(question.asked);
        return (
            <>
                {asked ? <Question question={question} index={index+1}/> :
                    <div className="card" onClick={() => setAsked(true)}>
                        <p>Pergunta {index + 1}</p><ion-icon name="play-outline"></ion-icon>
                    </div>
                }
            </>
        )
    }
    function Question({ question,index }) {
        const [clicked, setClicked] = React.useState(false);
        return (   
            <>             
                {clicked ? 
                <Answer  answer={question.answer} index={index} status={status} setStatus={setStatus}/>
                :                 
                <div className='question' ><p>{question.question}</p> <img onClick={()=>setClicked(true)} src={turnArrow} /></div>}
             
            </>       
        )
    }

    return (
        <div className="questions" >
            {cards.map((question, index) => <Card question={question} index={index} />)}
        </div>
    )
}