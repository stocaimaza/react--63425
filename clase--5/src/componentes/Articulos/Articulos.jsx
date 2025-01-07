import React from 'react'

const Articulos = ({img, titulo, children}) => {
  return (
    <article>
        <img src={img} alt={titulo} />
        <h2> {titulo} </h2>
        {children}
        <br />
        <button> Leer Articulo </button>
    </article>
  )
}

export default Articulos