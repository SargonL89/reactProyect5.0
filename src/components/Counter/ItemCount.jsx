import React, {useState} from 'react'

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
      <p>Counter: {counter}</p>
      <button disabled={counter >= stock} onClick={sumar}>+</button>
      <button disabled={counter <= 0} onClick={restar}>-</button>
      <button disabled={counter > stock || counter <= 0} onClick={()=>onAdd(counter)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount