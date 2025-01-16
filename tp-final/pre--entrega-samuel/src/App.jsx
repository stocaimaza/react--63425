import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
  )
}

export default App