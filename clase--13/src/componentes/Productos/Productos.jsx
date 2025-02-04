//Importamos los Hooks que necesitamos: 
import { useState, useEffect } from "react";

//Importamos el objeto que tiene mi conexion a la BD: 
import { db } from "../../services/config";

//Importamos las funciones que vamos a utilizar de Firebase: 
import { getDocs, collection, query, doc, updateDoc, where } from "firebase/firestore";

//getDocs: me permite obtener todos los documentos de una collection.
//collection: me permite obtener una colección. 
//query: me permite hacer una consulta. 

const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const misProductos = query(collection(db, "productos"));
        
        //Si quisiera filtrar productos puedo usar "where"
        //const misProductos = query(collection(db, "productos"), where("precio","<", 900)); 

        getDocs(misProductos)
            .then(respuesta => {
                setProductos(respuesta.docs.map(doc => ({ id: doc.id, ...doc.data() })))
                //Creo un array que contenga los datos del producto y ademas el ID. 
            })
    }, [productos])

    //Modificación: Voy a descontar stock cada vez que hago click en "Comprar". 

    const descontarStock = async (producto) => {
        const productoRef = doc(db, "productos", producto.id); 
        let nuevoStock = producto.stock - 1; 

        await updateDoc(productoRef, {stock: nuevoStock}); 

        //Vamos a actualizar la lista de productos despues de descontar: 
        const productosActualizados = productos.map( p => {
            if(p.id === producto.id) {
                return {...p, stock: nuevoStock}; 
            } 
            return p; 
        })
        setProductos(productosActualizados); 
    }


    return (
        <div>
            <div className="productos-container">
                <h2 className="productos-title">Mis productos</h2>
                <div className="productos-grid">
                    {
                        productos.map(producto => (
                            <div className="producto-card" key={producto.id}>
                                <h3 className="producto-name">{producto.nombre}</h3>
                                <p className="producto-precio">${producto.precio}</p>
                                <p className="producto-stock">Disponibles: {producto.stock}</p>
                                <button onClick={() => descontarStock(producto)} className="comprar-btn">Comprar</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Productos