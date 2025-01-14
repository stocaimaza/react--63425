import { useState, useEffect } from "react";

const misProductosMarolio = [
    {nombre: "Fideos", precio: 800},
    {nombre: "Arroz", precio: 600},
    {nombre: "Aceite", precio: 1000}
]

//Armamos una función que retorna una promesa con un retraso de 2 segundos: 

const getMisProductitosMarolio = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(misProductosMarolio); 
        }, 2000)
    })
}

const AsyncAwait = () => {
    const [productos, setProductos] = useState([]); 

    useEffect( () => {

        const pedirDatos = async () => {
            const inventarioProductos = await getMisProductitosMarolio(); 
            setProductos(inventarioProductos); 
        }

        pedirDatos(); 
    }, [])

  return (
    <div>
        <h2> AsyncAwait </h2>
        {
            productos.map((producto, index) => {
                return (
                    <div key={index}>
                        <p> {producto.nombre} </p>
                        <p> {producto.precio} </p>
                    </div>
                )
            })
        }

    </div>
  )
}

export default AsyncAwait