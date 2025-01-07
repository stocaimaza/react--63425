import React from 'react'

const PersonaProps = ({nombre, edad, admin}) => {
  return (
    <div>
        <h2>Hola, mi nombre es {nombre} </h2>
        <h2>Mi edad es {edad} añitos </h2>
        <h2> {admin && "Soy admin"} </h2>
    </div>
  )
}

export default PersonaProps