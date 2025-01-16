//PATRONES DE DISEÑO: 

// En React tenemos algunos patrones que nos permiten reutilizar componentes

//1) High Order Components (HOC) : es una función que toma como argumento un componente y devuelve un nuevo componente con una funcionalidad adicional. 

//Ejemplo muy básico: recibo el componente "Mensaje" con un texto y le agrego un titulo, esto lo retorno como un nuevo componente.

export const mensajeConTitulo = (Mensaje) => {
    return function() {
        return (
            <>
                <h2> Este es el titulo agregado </h2>
                <Mensaje />
            </>
        )
    }
}

//Ejemplo muy argentino: aumento de un precio. 

export const productoConAumento = (Producto) => {
    return function({nombre, precio}) {
        let nuevoPrecio = precio + 500; 
        return <Producto nombre = {nombre} precio = {nuevoPrecio} />
    }
}

const Patrones = () => {
  return (
    <div>Patrones</div>
  )
}

export default Patrones