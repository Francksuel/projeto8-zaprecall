import './style.css';
import logoPequena from './logo-pequeno.png';
import Questions from '../Questions/Questions';
import ZapStatus from '../ZapStatus/ZapStatus';
import React from 'react';

export default function ZapScreen() {
    const cards = [
        {
            question: "O que é JSX?",
            answer: "Uma extensão de linguagem do JavaScript",
            asked: false
        },
        {
            question: "O React é __ ",
            answer: "uma biblioteca JavaScript para construção de interfaces",
            asked: false
        },
        {
            question: "Componentes devem iniciar com __",
            answer: "letra maiúscula",
            asked: false
        },
        {
            question: "Podemos colocar __ dentro do JSX",
            answer: "expressões",
            asked: false
        },
        {
            question: "O ReactDOM nos ajuda __",
            answer: "interagindo com a DOM para colocar componentes React nela",
            asked: false
        },
        {
            question: "Usamos o npm para __ ",
            answer: "gerenciar os pacotes necessários e suas dependências",
            asked: false
        },
        {
            question: "Usamos props para __ ",
            answer: "passar diferentes informações para componentes",
            asked: false
        },
        {
            question: "Usamos estado (state) para __",
            answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
            asked: false
        }
    ]
    const randomCards = cards.sort(() => Math.random() - 0.5);
    const [deck, setDeck] = React.useState('');
    if (deck === '') {
        setDeck(randomCards);
    }
    const [status, setStatus] = React.useState([]);
    return (        
            <div className="zapScreen">
                <div className="logo">
                    <img src={logoPequena} alt="logoPequena" />
                    <h1>ZapRecall</h1>
                </div>
                <Questions cards={deck} status={status} setStatus={setStatus} />
                <ZapStatus status={status} cards={deck} />
            </div>        
    )
}