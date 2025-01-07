import { useRef } from "react";

//useRef es un hook que permite crear una referencia mutable que puede ser actualizada sin provocar una nueva renderizacion del componente. 

//  EJEMPLO: Cantidad de productos en el carrito. 

const UseRef = () => {
    const contadorCarrito = useRef(0); 

    //Este hook retorna un objeto con la propiedad "current", que es donde guardamos nuestros datos, que se pueden ir modificando. 

    //Funcion auxiliar: 
    function agregarAlCarrito() {
        contadorCarrito.current = contadorCarrito.current + 1; 
        console.log(contadorCarrito.current);
    }

  return (
    <div>
        <p> Productos Marolio en el carrito: {contadorCarrito.current} </p>
        <button onClick={ agregarAlCarrito }> Agregar un nuevo producto Marolio </button>
    </div>
  )
}

export default UseRef