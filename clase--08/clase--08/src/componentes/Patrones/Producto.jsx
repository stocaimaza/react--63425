import React from 'react'

const Producto = ({nombre, precio}) => {
  return (
    <div>
        <p>Nombre: {nombre} </p>
        <p>Precio: {precio} </p>
    </div>
  )
}

export default Producto