import { useState } from "react"; 
import FormularioLibro from "./componentes/FormularioLibro/FormularioLibro";
import LibroLista from "./componentes/LibroLista/LibroLista";
import "./App.css";

const App = () => {
  const [libroAEditar, setLibroAEditar] = useState(null); 

  const manejadorEditarLibro = (libro) => {
    setLibroAEditar(libro); 
  }

  const manejadorActualizarLibro = () => {
    setLibroAEditar(null); 
  }

  return (
    <div className="app">
      <h1> Gestor de Libros </h1>
      <FormularioLibro libroAEditar={libroAEditar} libroActualizado= {manejadorActualizarLibro} />
      <LibroLista libroAEditar = {manejadorEditarLibro} />
    </div>
  )
}

export default App