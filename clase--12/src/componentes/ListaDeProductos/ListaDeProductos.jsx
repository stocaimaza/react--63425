import { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";

const ListaDeProductos = () => {
    //Generamos los estados 
    const [productos, setProductos] = useState([]); 
    const [cargando, setCargando] = useState(true); 

    //Simulamos una llamada a una api: 
    useEffect(() => {
        setTimeout( () => {
            setProductos([
                {id: 1, nombre: "Celular Samsung A23", precio: 100},
                {id: 2, nombre: "Tablet TCL", precio: 200},
                {id: 3, nombre: "TV Phillips 42", precio: 300},
            ])
            setCargando(false); 
        }, 3000)
    }, [])


  return (
    <div>
        <h2> Lista de Productos </h2>
        {/* Si esta cargando, mostramos el spinner */}
        {
            cargando ? (
                <Spinner />
            ) : (
                <ul>
                    {
                        productos.map(producto => (
                            <li key={producto.id}> {producto.nombre} - ${producto.precio} </li>
                        ))
                    }
                </ul>
            )
        }
    </div>
  )
}

export default ListaDeProductos