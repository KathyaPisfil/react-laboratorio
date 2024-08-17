import { Fragment } from "react";
import './estilosCiudad.css'

function Ciudad({ nombre, descripcion, imagen }) {

    return (
        <>
            <div className="ciudad">
                <h3 className="ciudad__titulo">{nombre}</h3>
                <p className="ciudad__descripcion">{descripcion}</p>
                <img className="ciudad__imagen" src={imagen} alt={nombre} />
            </div>
        </>
    );
}

export default Ciudad