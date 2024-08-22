import { Fragment, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

function Contador() {
    const [contar, setContar] = useState(0);
    const hacerClick = () => {
        setContar(contar + 1);
    }

    return (
        <>
            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-md-auto">
                        <p>El número de click realizados es: {contar}</p>
                        <button onClick={hacerClick}
                            type="button" className="btn btn-primary">Click aquí</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contador;