import "./ItemDetail.css";
//Actividad 4: Sincronizar contador
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
//Para navegar al componente "/cart" necesito traer Link: 
import { Link } from "react-router-dom";

//importamos el CarritoContex: 
import { CarritoContext } from "../../context/CarritoContext";

//importar el hook useContext: 
import { useContext } from "react";

const ItemDetail = ({id, nombre, precio, img, stock}) => {
  //Creamos un estado local con la cantidad de productos que agregamos. 
  const [agregarCantidad, setAgregarCantidad] = useState(0); 

  //Cambios para trabajar con Context: 
  const { agregarAlCarrito } = useContext(CarritoContext); 

  //Creamos una función para manejar las cantidades
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    //console.log("Productos agregados: " + cantidad); 

    //Ahora voya crear un objeto con el item y la cantidad: 
    const item = {id, nombre, precio}; 
    agregarAlCarrito(item, cantidad); 
  }

  return (
    <div className='contenedorItem'>
        <h2> Nombre: {nombre} </h2>
        <h3> Precio: {precio} </h3>
        <h3> ID: {id} </h3>
        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita fugit laboriosam deserunt, voluptatum alias unde ipsam maxime beatae pariatur quo natus nisi sequi a officiis illum impedit nesciunt distinctio quis!</p>
        <img src={img} alt={nombre} />
        {
          //Evaluamos con un ternario: 
          agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }
    </div>
  )
}

export default ItemDetail