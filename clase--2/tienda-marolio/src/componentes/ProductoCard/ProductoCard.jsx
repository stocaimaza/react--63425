import React from 'react'
import ProductoBoton from '../ProductoBoton/ProductoBoton'; 
import ProductoImagen from '../ProductoImagen/ProductoImagen';
import ProductoInfo from '../ProductoInfo/ProductoInfo';
import './ProductoCard.css'; 

const ProductoCard = () => {
  return (
    <div className='card'>
        <ProductoImagen />
        <ProductoInfo/>
        <ProductoBoton/>
    </div>
  )
}

export default ProductoCard