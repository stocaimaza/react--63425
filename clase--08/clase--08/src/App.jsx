import React from 'react'
//import UtilizamosHooks from './componentes/UtilizamosHooks/UtilizamosHooks'
import Caja from './componentes/Caja/Caja'

/** CLASE 8 - WORKSHOP **/

//Vamos a crear nuestros propios hooks. 
//Recuerden que se deben llamar "useNombreHook"

//Tarea para el hogar: hacer el useLocalStorage. 

//Patrones de diseño: HOC
import Mensaje from './componentes/Patrones/Mensaje'
import { mensajeConTitulo, productoConAumento } from './componentes/Patrones/Patrones'
import Producto from './componentes/Patrones/Producto'


const App = () => {
  const NuevoComponente = mensajeConTitulo(Mensaje);
  const NuevoProductoComponente = productoConAumento(Producto); 

  return (
    <div>
      {/* <UtilizamosHooks /> */}
      {/* <Caja titulo="Aguante la Inteligencia Artificial" />
      <Caja titulo="¿Son Team Verano o Team Invierno? " /> */}

      {/* Utilizamos el concepto de Children:  */}

      {/* <Caja titulo="Listado de cosas para hacer en verano">
        <ul>
          <li>Ir a la pileta del vecino</li>
          <li>Jugar a la guerra de bombuchas </li>
          <li>Comer mucho Heladito </li>
        </ul>
      </Caja> */}

      {/* Patrones de Diseño: HOC  */}

      <NuevoComponente />
      <NuevoProductoComponente nombre = "Tomate" precio = {1000} />
    </div>
  )
}

export default App