import Item from '../Item/Item'
import styles from './itemlist.module.css'

const ItemList = ({items}) => {
  return (
    <div className={styles.contItems}>
      {items && items.map((item)=> {
        return (
          <div className={styles.divMap} key={item.id}>
            <Item title={item.title} price={item.price} stock={item.stock} category={item.category} img={item.img}/>
          </div>
        ) 
      })}
    </div>
  )
}

export default ItemList
