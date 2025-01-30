//Render Props: Es una tecnica que nos permite compartir la logica entre componentes. Consiste en pasar una funcion como prop a un componente, y ese componente utilizara esa funcion para renderizar datos. 

import Contador from "./componentes/Contador/Contador"; 
import CargarDatos from "./componentes/CargarDatos/CargarDatos";

//Ejemplo Spinner: 
//import ListaDeProductos from "./componentes/ListaDeProductos/ListaDeProductos";

//Tecnicas: 
import TecnicaUno from "./componentes/TecnicaUno/TecnicaUno";
import TecnicaDos from "./componentes/TecnicaDos/TecnicaDos";
import TecnicaTres from "./componentes/TecnicaTres/TecnicaTres";
import EstilosCondicional from "./componentes/EstilosCondicional/EstilosCondicional"; 

const App = () => {
  return (
    <div>
      <h1> Tecnicas de Renderizado </h1>

      {/* <h2> Render Props </h2>

      <Contador render = { (contador, incrementar) => (
        <div>
          <button onClick={ incrementar }> Incrementar </button>
          <p> Valor del contador: { contador } </p>
        </div>
      )} />

      <h2> Ejemplo: Cargar Datos </h2>

      <CargarDatos render={({productos, cargando, error}) => {
        if(cargando) {
          return <p> Cargando...</p>
        }

        if(error) {
          return <p> Ocurrio un error al esperar los productos, todos moriremos y entraremos a jumanji </p>
        }

        return (
          <ul>
              {productos.map((producto) => (
                <li key={producto.id}>
                  {producto.nombre} - ${producto.precio}
                </li>
              ))}
          </ul>
        )
      }} /> */}
      <TecnicaUno nombre="Jacinto" />
      <TecnicaDos booleano = {true} />
      <TecnicaTres booleano={false}/>
      <EstilosCondicional booleano = {true} clase = "nuevaClase" />



    </div>
  )
}

export default App