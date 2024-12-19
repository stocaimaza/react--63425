import React from 'react'
import EjemploComponente from './componentes/EjemploComponente/EjemploComponente';
import Contador from './componentes/Contador/Contador';
import Mensaje from './componentes/Mensaje/Mensaje';
import Contenedores from './componentes/Contenedores/Contenedores';

//Componentes 1: 
//Definicion: conjunto de elementos que cumplen una función especifica en la Interfaz del Usuario. 

//Ventajas de trabajar con componentes: 

// -  Reutilizamos codigo. 
// -  Favorece la separación de responsabilidades. 
// -  Es mas facil de entender
// -  Mejora el rendimiento de la aplicación. 

//Caracteristicas de los componentes: 

//1) Van a renderizar un unico elemento. 
//2) Pueden recibir props (propiedades). 
//3) Pueden tener un estado. 

//Estado: Los estados de un componente en React se utilizan para representar la información que puede cambiar durante la vida útil del componente y afectar su representación en la interfaz de usuario.


const App = () => {
  return (
    <div>
      {/* <EjemploComponente texto="Hola Comisión" curso ="React" />
      <EjemploComponente texto="Hola Grupo" curso ="Backend" />
      <EjemploComponente texto="Hola Amigos" curso ="JS" /> */}
      <Contador/>
      <br /><br /><br /><br />
      <Mensaje/>
      <br /><br />
      <Contenedores/>
    </div>
  )
}

export default App