export default function Inicial({ tela, setTela }) {
    return (
        <div className="inicialScreen">
            <img src="./images/logo.png" ></img>
            <h1>ZapRecall</h1>
            <div className="inicialButton" onClick={() => setTela(!tela)} >Iniciar Recall</div>
        </div>
    )
}