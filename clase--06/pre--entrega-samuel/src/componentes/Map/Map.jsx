import React from 'react'
/** MAP **/

//En React lo vamos a usar para tomar un array de datos y crear una lista de componentes o elementos de jsx para renderizar todo en pantalla. 

const Map = () => {
    const productos = [
        {id: 1, nombre: "PC Gamer", precio: 1000}, 
        {id: 2, nombre: "Teclado Gamer", precio: 2000}, 
        {id: 3, nombre: "Mouse Gamer", precio: 3000}, 
        {id: 4, nombre: "Silla Gamer", precio: 4000}
    ]

  return (
    <div>
        <h2> Productos Gamer: </h2>

        <ul>
            {
                productos.map((producto, index) => (
                    <li key={index}> {producto.nombre} - {producto.precio} </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Map