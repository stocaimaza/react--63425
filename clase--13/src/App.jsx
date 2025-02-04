import Productos from "./componentes/Productos/Productos"
import Formulario from "./componentes/Formulario/Formulario";
import "./App.css"; 

const App = () => {
  return (
    <div>
      <h1> Firebase - Clase 13 </h1>
      <Productos />
      <Formulario/>
    </div>
  )
}

export default App