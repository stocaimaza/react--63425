import React from 'react'
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import TituloPrincipal from './componentes/TituloPrincipal/TituloPrincipal';

//JSX es una sintaxis de JS, necesaria en VITE que me permite construir objetos y funciones y trabajar con el retorno de los componentes en una sintaxis similar a HTML. 

const App = () => {
  //Parte de la lógica

  return (
    //Parte del return
    <div>
      <NavBar/>
      <TituloPrincipal texto="BIENVENIDOS A LA CLASE 3" curso="React"/>
      <img className='imagen' src="https://media.istockphoto.com/id/1443562748/es/foto/lindo-gato-de-jengibre.jpg?s=612x612&w=0&k=20&c=JVC5Z3LxpaTQaXu_fMZjIb73r39z6b0SnAxvNI8iZG0=" alt="Imagen de un gato" />
    </div>
  )
}

export default App