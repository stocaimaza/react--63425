import { useState } from "react"

const Mensaje = () => {
    const [mostrar, setMostrar] = useState(false);

    const manejadorMensaje = () => {
        setMostrar(!mostrar)
    }

  return (
    <div>
        <button onClick={ manejadorMensaje }> Mostrar Mensaje </button>
        
        {
            mostrar && <h2> Aguante el useState! </h2>
        }
        {/* Si mostrar es true, se muestra el h2 */}
        {/* Si mostrar es false, no se muestra nada */}

    </div>
  )
}

export default Mensaje