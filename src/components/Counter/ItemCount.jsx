import React, {useState} from 'react'
import styles from './itemcounter.module.css'

const ItemCount = ({stock, initial, onAdd}) => {

  const [counter, setCounter] = useState(initial)
  const sumar = () => {
    setCounter(counter + 1)
  }
  const restar = () => {
    setCounter(counter - 1)
  }

  return (
    <div>
      <div className={styles.divCounter}>
        <button disabled={counter <= 0} onClick={restar}>-</button>
        <p>Cantidad: {counter}</p>
        <button disabled={counter >= stock} onClick={sumar}>+</button>
      </div>
      <button disabled={counter > stock || counter <= 0} onClick={() => onAdd(counter)}>Agregar al carrito</button>
    </div>
  )
} 

export default ItemCount