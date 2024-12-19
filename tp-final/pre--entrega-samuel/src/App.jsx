import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer/>
      {/* Le tenes que enviar una prop llamada "greeting" y que envie un mensaje */}
    </div>
  )
}

export default App