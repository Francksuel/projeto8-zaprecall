import './style.css';
import logoPequena from './logo-pequeno.png';
import Questions from '../Questions/Questions';
export default function ZapScreen() {
    const cards=[
        {question:"pergunta 0", answer:"resposta 0", asked:false},
        {question:"pergunta 1", answer:"resposta 1", asked:false},
        {question:"pergunta 2", answer:"resposta 2", asked:false},
        {question:"pergunta 3", answer:"resposta 3", asked:false}, 
        {question:"pergunta 4", answer:"resposta 4", asked:false},
        {question:"pergunta 5", answer:"resposta 5", asked:false},     
    ]    
const randomCards=cards.sort(()=>Math.random() - 0.5);
    return (
        <>
        <div className="zapScreen">
            <div className="logo">
                <img src={logoPequena} alt="logoPequena"/>
                <h1>ZapRecall</h1>
            </div>
            <Questions cards={randomCards} />
            <div className="zapStatus" >
            <p>0/4 concluidos</p>
            </div>
        </div>
        </>
    )
}