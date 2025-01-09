import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import Map from './componentes/Map/Map'
import Usuarios from './componentes/Usuarios/Usuarios'

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
      {/* Le tenes que enviar una prop llamada "greeting" y que envie un mensaje */}
      {/* <Map />
      <Usuarios /> */}
    </div>
  )
}

export default App