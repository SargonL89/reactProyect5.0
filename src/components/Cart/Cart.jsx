import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const Cart = () => {
  const { cart, removeProd, clearCart, totalPrice } = useContext(CartContext);

  return (
    <div>
      {cart.map((prod) => (
        <div>
          <p>{prod.title}</p>
          <p>Cantidad: {prod.cantidad}</p>
          <p>Precio: {prod.price}</p>
          <button onClick={()=>removeProd(prod)}>Delete</button>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      ))}
      <p>Total: ${totalPrice()}</p>
    </div>
  )
}

export default Cart