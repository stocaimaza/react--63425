import PersonaProps from "./componentes/PersonaProps/PersonaProps"
import Articulos from "./componentes/Articulos/Articulos"
import Contador from "./componentes/Contador/Contador"
import JsonPlaceHolder from "./componentes/JsonPlaceHolder/JsonPlaceHolder"
import Categorias from "./componentes/Categorias/Categorias"
import UseRef from "./componentes/UseRef/UseRef"

//Las props son objetos con informacion que le pasan los componentes padres a los componentes hijitos. 
//Recordemos: el flujo de información es UNIDIRECCIONAL, solamente los padres le van a poder pasar informacion a los hijitos. 

const App = () => {
  return (
    <div>
      {/* 
      <h1>Bienvenidos a la clase 5</h1>
      <PersonaProps nombre = "Samuel" edad = {20} admin = {false} />

      <Articulos img="https://placecats.com/millie/300/150" titulo="Los juegos favoritos de los gatos"/>

      <Articulos img="https://placecats.com/neo_banana/300/200" titulo="Alimentos balanceados"/>

      <Articulos img="https://placecats.com/bella/300/200" titulo="Vacunas Actuales"/>

      <Articulos img="https://placecats.com/g/300/200" titulo="Fotografia Gatitos">

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae culpa corrupti incidunt temporibus sequi, rerum voluptate quo fuga possimus voluptas, impedit repudiandae enim ut mollitia consequatur deserunt vel quam doloribus?</p>

        <strong>Tiempo de lectura: 3 minutos </strong>

      </Articulos>
      <Contador />
      */}

      <JsonPlaceHolder/>
      <Categorias/>
      <UseRef/>
    </div>
  )
}

export default App