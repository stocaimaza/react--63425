import React from 'react'

const TituloPrincipal = ({texto, curso}) => {
  return (
    <div>
        <h1> {texto} </h1>
        <h2> Curso de {curso} </h2>
    </div>
  )
}

export default TituloPrincipal