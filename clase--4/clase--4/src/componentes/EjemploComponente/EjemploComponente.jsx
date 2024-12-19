import React from 'react'

//recibo por parametro el objeto. 
const EjemploComponente = ({texto, curso}) => {
  
  return (
   <>
     <h1>Hola, este es un h1</h1>
     <h2>Esto es un h2</h2>
     <h3>Recibo este texto del padre: {texto} </h3>
     <h3>Este es el curso {curso} </h3>
   </>
  )
}

export default EjemploComponente



