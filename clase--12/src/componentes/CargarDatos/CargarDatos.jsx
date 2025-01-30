//Simulamos que estamos consultando alguna API de Productos. 
import { useState, useEffect } from "react"; 


const CargarDatos = ({render}) => {
    //Generamos los estados 
    const [productos, setProductos] = useState([]); 
    const [cargando, setCargando] = useState(true); 
    const [error, setError] = useState(null);

    //Simulamos una llamada a una api: 
    useEffect(() => {
        setTimeout( () => {
            setProductos([
                {id: 1, nombre: "Celular Samsung A23", precio: 100},
                {id: 2, nombre: "Tablet TCL", precio: 200},
                {id: 3, nombre: "TV Phillips 42", precio: 300},
            ])
            setCargando(false); 
        }, 2000)
    }, [])

  return render({productos, cargando, error}); 
}

export default CargarDatos