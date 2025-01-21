import { useState, useEffect } from "react";
import { getProductos, getProductosPorCategoria } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

//Lo modificamos para Segunda Pre Entrega: 


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  //Me guardo el idCat: 
  const { idCategoria } = useParams();

  useEffect(() => {
    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;
    funcionProductos(idCategoria)
      .then(respuesta => setProductos(respuesta))

  }, [idCategoria])

  return (
    <div>
      <h2> Mis Productos </h2>
      <ItemList productos={productos} />
    </div>

  )
}

export default ItemListContainer