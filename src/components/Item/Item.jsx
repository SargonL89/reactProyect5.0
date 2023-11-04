import React from 'react'
import styles from './item.module.css'

const Item = ({title, price, stock, category, img}) => {

  console.log(title)

  return (
    <div>
      <div>
          <p className={styles.prodTitle}><strong>{title}</strong></p>
          <p className={styles.prod}>Precio: US${price}</p>
          <p className={styles.prod}>Disponibles: {stock}</p>
          <p className={styles.prod}>Categoria: {category}</p> 
          <p className={styles.prod}>{img}</p>
      </div>
    </div>
  )
}

export default Item