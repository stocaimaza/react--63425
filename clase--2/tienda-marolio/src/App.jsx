import React from 'react'
import ProductoCard from './componentes/ProductoCard/ProductoCard';
import './App.css';

//Una de las caracteristicas que tienen los componentes es que deberian renderizar un solo elemento. 

const App = () => {

  let profesor = "Samuel"; 
  let curso = "React"; 


  return (
    <>
      <h1 className='tituloPrincipal'>Hola comisión, bienvenidos a nuestro primer componente</h1>
      <h2 className='tituloPrincipal'>Estoy cursando {curso} </h2>
      <h3>Mi profesor es {profesor} </h3>
      <p>Tengo esta edad {17+1} </p>
      <ProductoCard/>
      <ProductoCard/>
      <ProductoCard/>
      <ProductoCard/>
      <ProductoCard/>
    </>
  )
}

export default App