import Inicial from "./Inicial";
import ZapScreen from "./ZapScreen";
import React from 'react';
export default function App() {
    const [tela, setTela] = React.useState(true);
    return (<>
        {tela ? (<Inicial tela={tela} setTela={setTela} />)
            : (<ZapScreen></ZapScreen>)}
    </>
    )
}