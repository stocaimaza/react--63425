import { useState, useEffect } from "react";

const Categorias = () => {
    //Buscamos que cada vez que presionemos el boton de la categoria deseada cambia el titulo de la pagina. 
    const [categoria, setCategoria] = useState(""); 

    useEffect(() => {
        document.title = `Categoria ${categoria}`; 
    }, [categoria]); 
    //Si dejamos el array de dependencias vacio, la funcion que pasamos como primer argumento solo se ejecuta cuando se monta el componente. 

    //Funcion manejadora de categorias: 

    const manejadoraCategorias = (categoria) => {
        setCategoria(categoria); 
    }

  return (
    <div>
        <button onClick={() => manejadoraCategorias("Frutas")}> Frutas </button>
        <button onClick={() => manejadoraCategorias("Carnes")}> Carnes </button>
        <button onClick={() => manejadoraCategorias("Lacteos")}> Lacteos </button>
        <button onClick={() => manejadoraCategorias("Limpieza")}> Limpieza </button>
    </div>
  )
}

export default Categorias