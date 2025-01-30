import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'

//Segunda Pre Entrega: 
//1) instalacion: npm i react-router-dom
//2) Importamos los componentes de react-router-dom: 
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Implementamos el Context: 
import { CarritoProvider } from './context/CarritoContext'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CarritoProvider>
        <NavBar />
          <Routes>
            <Route path='/' element = { <ItemListContainer/> } />
            <Route path='/categoria/:idCategoria' element = { <ItemListContainer/> } />
            <Route path='/item/:idItem' element = { <ItemDetailContainer/> } />
            <Route path='/cart' element = { <h2> En breve tendras tu carrito, rata de dos patas!!!</h2>} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </div>
  )
}

export default App