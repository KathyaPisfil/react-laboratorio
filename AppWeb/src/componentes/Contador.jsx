import { Fragment, useState } from "react";

function Contador(){
    const [contar, setContar] = useState(0);
    const hacerClick = () => {
        setContar(contar + 1);
    }

    return (
        <>
        <p>El número de click realizados es: { contar }</p>
        <button onClick={ hacerClick }>Click aquí</button>
        </>
    );
}

export default Contador;