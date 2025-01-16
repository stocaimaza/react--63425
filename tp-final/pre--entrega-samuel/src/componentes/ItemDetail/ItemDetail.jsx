import React from 'react'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div>
        <h2> Nombre: {nombre} </h2>
        <h3> Precio: {precio} </h3>
        <h3> ID: {id} </h3>
        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita fugit laboriosam deserunt, voluptatum alias unde ipsam maxime beatae pariatur quo natus nisi sequi a officiis illum impedit nesciunt distinctio quis!</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail