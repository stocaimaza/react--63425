//UTILIZANDO PROPS: 

// const Hijo = ({herencia}) => {
//   return (
//     <div>
//         <p> Mi herencia en efectivo es de : {herencia.efectivo} </p>
//         <p> Tengo estas casas: {herencia.propiedades} </p>
//         <p> Y tengo estos vehiculos: {herencia.vehiculos} </p>
//     </div>
//   )
// }

// export default Hijo

//UTILIZANDO EL CONSUMER: 
//Importamos el Contexto: 
// import { Contexto } from "../../context/context";

// const Hijo = () => {
//     return (
//         <Contexto.Consumer>
//             {/* Para poder acceder a la información tenemos que utilizar una función de renderizado:  */}
//             {
//                 (herencia) => (
//                     <div>
//                         <p> Mi herencia en efectivo es de : {herencia.efectivo} </p>
//                         <p> Tengo estas casas: {herencia.propiedades} </p>
//                         <p> Y tengo estos vehiculos: {herencia.vehiculos} </p>
//                     </div>
//                 )
//             }
//         </Contexto.Consumer>
//     )
// }

// export default Hijo

/////////////////////////////////////////////////////////////////////////////////////

//La solucion mas simple, usamos un Hook: en lugar de usar el consumer y una función de renderizado yo puedo usar un Hook que se llama useContext. 

//1) Importamos el Contexto. 
//2) Importamos el hook useContext. 
//3) Creamos una variable que almacene el valor del contexto. 

import { Contexto } from "../../context/context"; 
import { useContext } from "react";

const Hijo = () => {
    
    const herencia = useContext(Contexto); 
  
  return (
    <div>
        <p> Mi herencia en efectivo es de : {herencia.efectivo} </p>
        <p> Tengo estas casas: {herencia.propiedades} </p>
        <p> Y tengo estos vehiculos: {herencia.vehiculos} </p>
    </div>
  )
}

export default Hijo;