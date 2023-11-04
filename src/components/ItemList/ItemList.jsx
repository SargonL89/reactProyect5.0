import React, {useState} from 'react'
import Item from '../Item/Item'
import styles from './itemlist.module.css'
import ItemCount from '../Counter/ItemCount'

const ItemList = ({items}) => {

  const initial = 0;
  const [carrito, setCarrito] = useState('vacío');

  const onAdd = () => {
    setCarrito('Producto en carrito')
  };

  return (
    <div className={styles.contItems}>
      {items && items.map((item)=> {
        return (
          <div className={styles.divMap} key={item.id}>
            <Item title={item.title} price={item.price} stock={item.stock} category={item.category} img={item.img}/>
            <ItemCount stock={item.stock} initial={initial} onAdd={onAdd} />
          </div>
        )
      })}
      <p>Carrito: {carrito}</p>
    </div>
  )
}

export default ItemList
