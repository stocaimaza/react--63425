//Ejemplo del envio de datos por props de componentes padres a hijos. 

//Aprendimos en estas clases que podemos enviar informacion entre componentes a traves de las props. Pero estas se envian de forma unidireccional de un componente padre a un componente hijo. 

//En aplicaciones grandes con muchas capas de componentes esto se convierte en una tarea tediosa. 

//Para solucionar esto React nos presenta el "Contexto"

//Es un estado global para toda la aplicación en donde podemos almacenar datos o funciones. 

//El contexto trabaja con dos partes principales: el proveedor y el consumidor. 

//El Provider es un componente que proporciona los datos que vamos a compartir y el Consumer es quien utiliza esos datos. 
//////////////////////////////////////////////////////////////////////////////////////

import Abuelo from "./componentes/Abuelo/Abuelo";
//Importamos el contexto: 
import { Contexto } from "./context/context";

const App = () => {

  const herencia = {
    efectivo: 1000000000, 
    propiedades: 10, 
    vehiculos: 20
  }


  return (
    <div>
      <h1> Bienvenidos a la clase 11 - Context </h1>
      {/* <Abuelo herencia = {herencia} /> */}
      <Contexto.Provider value = { herencia }>
        <Abuelo/>
      </Contexto.Provider>
    </div>
  )
}

export default App