import { Fragment } from "react";
import HolaMundo from "./componentes/HolaMundo";
import Mensaje from "./componentes/Mensaje";

function App() {

  return (
    <>
      <div><HolaMundo />
        <Mensaje />
      </div>
    </>
  )
}

export default App;