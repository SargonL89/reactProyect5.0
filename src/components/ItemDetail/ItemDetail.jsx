import React from 'react'
import { useState } from 'react';
import ItemCount from '../Counter/ItemCount'
import styles from './itemdetail.module.css'
import { Link } from 'react-router-dom';

const ItemDetail = ({product}) => {
  const [carrito, setCarrito] = useState(0);

  const onAdd = (cantidad) => {
    setCarrito(cantidad)
  };

    if (product.length === 0) {
      return <p>Cargando... </p>;
    }
    
    return (
    <div className={styles.divItemDetail}>
      <div>
        <img src={product[0].img} alt={product[0].title} />
      </div>
      <div className={styles.itemDescription}>
        <p><strong>{product[0].title}</strong></p> 
        <p>Precio: US${product[0].price}</p>
        <p>Categoría: {product[0].category}</p>
        <p>Disponibles: {product[0].stock}</p>
        <ItemCount stock={product[0].stock} initial={0} onAdd={onAdd} />
        <div className={styles.carrito}>
          <p>Carrito: {carrito}</p>
          <Link to='/cart'>
            <button>Ver Carrito</button>
          </Link>
        </div>
      </div>
    </div>
    )
}

export default ItemDetail