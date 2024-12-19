import { useState } from "react"
import Presentacion from "../Presentacion/Presentacion"

const Contenedores = () => {
    const [nombre, setNombre] = useState("Samuel");

    const cambiarNombre = () => {
        setNombre("Profe"); 
    }

  return (
    <div>
        <Presentacion nombre={nombre} />
        <button onClick={ cambiarNombre }> Cambiar nombre </button>
    </div>
  )
}

export default Contenedores