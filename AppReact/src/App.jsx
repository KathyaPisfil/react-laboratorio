import { Fragment } from "react";
import Menu from "./componente/Menu";
import Pie from "./componente/Pie";
import Ciudad from "./componente/Ciudad";

function App() {

  return (
    <>
      <Menu />
      <Ciudad
      nombre="Lima"
      descripcion="Capital del Perú"
      imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7XTMnQ2KDf6yJDw1jGnAn8FYt_px6HoivZA&s" />
      <Ciudad
      nombre="Arequipa"
      descripcion="Encantadora tierra volcánica"
      imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2xFhcXXye18Ov4PL0o9zDZTf68pGOABX3LA&s" />
      <Pie />
    </>
  );
}

export default App