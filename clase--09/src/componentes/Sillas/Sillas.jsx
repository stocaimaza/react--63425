import React from 'react'
//Para capturar el parametro que esta en la RL vamos a utilizar un nuevo Hook: useParams

//Ejemplo: https://www.cellshop.com/silla/10
//Yo puedo capturar ese 10 y usarlo para mostrar informacion del producto correcto

import { useParams } from 'react-router-dom'; 

const Sillas = () => {
    //Yo quiero capturar el id del producto: 
    let { id } = useParams(); 
    console.log(id); 

  return (
    <div>
        <h2>Seccion Sillas </h2>
        <p>ID del producto buscado: {id} </p>
    </div>
  )
}

export default Sillas