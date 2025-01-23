import { useState, useEffect } from "react"; 

const Automatico = () => {
    const [mostrarMensaje, setMostrarMensaje] = useState(false); 

    useEffect( () => {
        let tiempoEspera = null; 

        const reiniciarTemporizador = () => {
            clearTimeout(tiempoEspera);
            tiempoEspera = setTimeout( () => {
                setMostrarMensaje(true); 
            }, 5000)
        }

        const manejarActividadUsuario = () => {
            reiniciarTemporizador(); 
        }

        //Creamos los escuchadores de eventos: 

        window.addEventListener("mousemove", manejarActividadUsuario); 
        window.addEventListener("keydown", manejarActividadUsuario); 

        reiniciarTemporizador(); 

        return () => {
            window.removeEventListener("mousemove", manejarActividadUsuario); 
            window.removeEventListener("keydown", manejarActividadUsuario); 
            clearTimeout(tiempoEspera);
        }
    }, [])

    const seguirMirandoTele = () => {
        setMostrarMensaje(false); 
    }
  
   return (
    <div>
        {
            mostrarMensaje && (
                <div>
                    <p>¿Seguis con vida?</p>
                    <button onClick={ seguirMirandoTele }> Seguir mirando tele </button>
                </div>
            )
        }
    </div>
  )
}

export default Automatico