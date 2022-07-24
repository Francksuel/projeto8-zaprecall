import './style.css';
import logo from './logo.png';

export default function Inicial({ tela, setTela }) {
    return (
        <div className="inicialScreen">
            <img src={logo} alt="logo"></img>
            <h1>ZapRecall</h1>
            <div className="inicialButton" onClick={() => setTela(!tela)} >Iniciar Recall</div>
        </div>
    )
}