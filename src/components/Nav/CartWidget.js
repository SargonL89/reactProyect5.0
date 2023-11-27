import React from 'react'
import styles from './nav.module.css'
import Cart from '../Cart/Cart.jsx'

const CartWidget = () => {
    return (
      <div className={styles.cart}>
        <span class="material-symbols-outlined">shopping_cart</span>
        <div>
        {/* <span className={styles.span}>4</span> */}
        </div>
      </div>
    )
}

export default CartWidget