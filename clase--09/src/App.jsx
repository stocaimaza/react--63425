//SPA = Single Page Application

//React Router = es una libreria de enrutamiento. 
//Nos permite navegar entre componentes sin tener que recargar la aplicación. 

import Home from "./componentes/Home/Home";
import Computadoras from "./componentes/Computadoras/Computadoras";
import Celulares from "./componentes/Celulares/Celulares";
import Sillas from "./componentes/Sillas/Sillas";
import Menu from "./componentes/Menu/Menu";
import Error from "./componentes/Error/Error";

//1) Instalacion: npm i react-router-dom
//2) Importar en nuestra App algnos componentes de la librearia React Router:
//BrowserRouter, Route, Routes. 
import { BrowserRouter, Route, Routes } from "react-router-dom";
//BrowserRouter: es un componente que envuelve nuestra app y habilita la navegacion entre componentes. 
//Routes: define las rutas de navegación. 
//Route: define una ruta en particular. 

const App = () => {
  return (
    <div>
      {/* Ejercicio - Tienda CellShop */}

      <BrowserRouter> 
        <Menu />
        <Routes>
          <Route path="/" element = { <Home /> } />
          <Route path="/computadoras" element = { <Computadoras /> } />
          <Route path="/sillas/:id" element = { <Sillas /> } />
          <Route path="/celulares" element = { <Celulares/> } />
          <Route path="*" element = { <Error />} />
        </Routes>
      </BrowserRouter>

      {/* <h1>Bienvenidos a la clase 9</h1>

      <h2> Etiquetas de enlaces </h2>

      <h3> Enlace Absoluto </h3>
      <a href="https://infobae.com" target='_blank'> Diario Infobae </a>

      <h3> Enlaces Relativos </h3>
      <a href=""> Link Interno </a> */}

    </div>
  )
}

export default App