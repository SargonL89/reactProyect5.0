import React, { useContext } from 'react'
import ItemCount from '../Counter/ItemCount'
import styles from './itemdetail.module.css'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({product}) => {
  const { cart, addCart, isInCart, removeProd, clearCart } = useContext(CartContext);

  if (product.length === 0) {
    return <p>Cargando... </p>;
  }

  const onAdd = (cantidad) => {
    const prodUnique = product[0];
    addCart(prodUnique, cantidad);
  };
  console.log(cart)
  
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
        <p>Elementos en carrito: {cart.length}</p>
        <Link to='/cart'>
          <button>Ver Carrito</button>
        </Link>
        <button onClick={()=> (isInCart(product[0]))}>Cargado?</button>
        <button onClick={()=> (removeProd(product[0]))}>Quitar del carrito</button>
        <button className={styles.redBtn} onClick={clearCart}>Vaciar todo el Carrito</button>
      </div>
    </div>
  </div>
  )
}

export default ItemDetail