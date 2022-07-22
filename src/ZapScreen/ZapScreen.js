import './style.css';
import logoPequena from './logo-pequeno.png';
export default function ZapScreen() {
    return (
        <>
        <div className="zapScreen">
            <div className="logo">
                <img src={logoPequena} alt="logoPequena"/>
                <h1>ZapRecall</h1>
            </div>
            <div className="zapStatus" >
            <p>0/4 concluidos</p>
            </div>
        </div>
        </>
    )
}