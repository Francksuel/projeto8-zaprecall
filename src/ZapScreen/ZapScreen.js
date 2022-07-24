import './style.css';
import logoPequena from './logo-pequeno.png';
import Questions from '../Questions/Questions';
import ZapStatus from '../ZapStatus/ZapStatus';
import React from 'react';
export default function ZapScreen() {
    const cards = [
        { question: "pergunta 0", answer: "resposta 0", asked: false },
        { question: "pergunta 1", answer: "resposta 1", asked: false },
        { question: "pergunta 2", answer: "resposta 2", asked: false },
        { question: "pergunta 3", answer: "resposta 3", asked: false },
        { question: "pergunta 4", answer: "resposta 4", asked: false },
        { question: "pergunta 5", answer: "resposta 5", asked: false },
    ]
    const randomCards = cards.sort(() => Math.random() - 0.5);
    const [deck,setDeck] = React.useState('');
    if (deck===''){
        console.log('executei');
        setDeck(randomCards);        
    }     

    const [status, setStatus] = React.useState([]);
    return (
        <>
            <div className="zapScreen">
                <div className="logo">
                    <img src={logoPequena} alt="logoPequena" />
                    <h1>ZapRecall</h1>
                </div>
                <Questions cards={deck} status={status} setStatus={setStatus} />
                <ZapStatus status={status} cards={deck} />
            </div>
        </>
    )
}