import Inicial from "./Inicial/Inicial";
import ZapScreen from "./ZapScreen/ZapScreen";
import React from 'react';
import './reset.css';
import './style.css';

export default function App() {
    const [tela, setTela] = React.useState(true);
    return (<>
        {tela ? (<Inicial tela={tela} setTela={setTela} />)
            : (<ZapScreen tela={tela} setTela={setTela}></ZapScreen>)}
    </>
    )
}