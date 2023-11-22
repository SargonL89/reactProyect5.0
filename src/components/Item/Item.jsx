import React from 'react'
import styles from './item.module.css'
import { Link } from 'react-router-dom'

const Item = ({title, price, stock, category, img}) => {

  return (
      <div>
        <Link className={styles.linkItem} to={`/detail/${title}`}>
          <p className={styles.prodTitle}><strong>{title}</strong></p>
          <div className={styles.divCenter}>
          {category === 'remeras' ? <img className={styles.imgRem} src={img} alt="remera negra"/> : <img className={styles.imgJean} src={img} alt="jean hombre"/>}
          </div>
          <p className={styles.prod}>Categoria: {category}</p> 
          <p className={styles.prod}>Disponibles: {stock}</p>
          <p className={styles.prod}>Precio: US${price}</p>
        </Link>
      </div>
  )
}

export default Item