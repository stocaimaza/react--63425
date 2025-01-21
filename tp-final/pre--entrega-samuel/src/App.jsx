import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'

//Segunda Pre Entrega: 
//1) instalacion: npm i react-router-dom
//2) Importamos los componentes de react-router-dom: 
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element = { <ItemListContainer/> } />
          <Route path='/categoria/:idCategoria' element = { <ItemListContainer/> } />
          <Route path='/item/:idItem' element = { <ItemDetailContainer/> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App