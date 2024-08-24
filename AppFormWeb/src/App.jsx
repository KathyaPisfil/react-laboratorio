import { Fragment } from "react";
import Formulario from "../componentes/Formulario";
import 'bootstrap/dist/css/bootstrap.min.css'

function App(){
  return (
    <>
      <div className="container container-fluid">
        <h1>Registro de Datos</h1>
      <Formulario />
      </div>
    </>
  );
}

export default App;