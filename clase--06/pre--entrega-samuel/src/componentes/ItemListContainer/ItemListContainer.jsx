import { useState, useEffect } from "react";
import { getProductos } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos()
      .then(respuesta => {
        setProductos(respuesta);
      })

  }, [])

  return (
    <div>
      <h2> Mis Productos </h2>
      <ItemList productos={productos}/>
    </div>

  )
}

export default ItemListContainer