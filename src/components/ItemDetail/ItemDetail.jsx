import React from 'react'

const ItemDetail = ({product}) => {

    if (product.length === 0) {
      return <p>Cargando... </p>;
    }
    
    return (
    <div>
        <img src={product[0].img} alt="remera iorio"/>
        <p>{product[0].title}</p> 
        <p>Categoría: {product[0].category}</p>
        <p>Precio: US${product[0].price}</p>
        <p>Disponibles: {product[0].stock}</p>
    </div>
  )
}

export default ItemDetail