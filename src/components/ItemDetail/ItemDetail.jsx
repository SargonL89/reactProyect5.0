import React, { useContext, useState, useEffect } from "react";
import ItemCount from "../Counter/ItemCount";
import styles from "./itemdetail.module.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import PuffLoader from "react-spinners/PuffLoader";

const ItemDetail = ({ product }) => {
  const { cart, addCart, isInCart, removeProd, clearCart } =
    useContext(CartContext);
  const [isloading, setIsloading] = useState(true);

  // if (product.length === 0) {
  //   return <p>Cargando... </p>;
  // }
  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 500);
  }, []);

  const onAdd = (cantidad) => {
    const prodUnique = product[0];
    addCart(prodUnique, cantidad);
  };
  console.log(cart);

  const number = Math.random();

  return (
    <div className={styles.divItemDetail}>
      {isloading ? (
        number > 0.5 ? (
          <PuffLoader color="rgba(0, 7, 218, 1)" speedMultiplier={0.5} />
        ) : (
          <div className={styles.spinnerContainer}>
            <div className={styles.spinner}></div>
          </div>
        )
      ) : (
        <>
          <div>
            <img src={product[0].img} alt={product[0].title} />
          </div>
          <div className={styles.itemDescription}>
            <p className={styles.descrip}>
              <strong>{product[0].title}</strong>
            </p>
            <p className={styles.descrip}>Precio: US${product[0].price}</p>
            <p className={styles.descrip}>Categoría: {product[0].category}</p>
            <p className={styles.descrip}>Disponibles: {product[0].stock}</p>
            <ItemCount stock={product[0].stock} initial={0} onAdd={onAdd} />
            <div className={styles.carrito}>
              <p>Elementos en carrito: {cart.length}</p>
              <Link to="/cart">
                <button>Ver Carrito</button>
              </Link>
              <button onClick={() => isInCart(product[0])}>Cargado?</button>
              <button onClick={() => removeProd(product[0])}>
                Quitar del carrito
              </button>
              <button className={styles.redBtn} onClick={clearCart}>
                Vaciar todo el Carrito
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemDetail;
