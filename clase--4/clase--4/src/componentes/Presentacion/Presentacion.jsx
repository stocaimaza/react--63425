import React from 'react'

const Presentacion = ({nombre}) => {
  return (
    <div>Hola, soy {nombre} </div>
  )
}

export default Presentacion

//Son componentes de presentacion de datos, su unica finalidad es mostrar info que reciben por props. 
//No tienen logica detras ni gestionan estado. 