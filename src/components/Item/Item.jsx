import React from 'react'
import styles from './item.module.css'
import { Link } from 'react-router-dom'

const Item = ({title, price, stock, category, img}) => {

  return (
      <div>
          <p className={styles.prodTitle}><strong>{title}</strong></p>
          <p className={styles.prod}>Precio: US${price}</p>
          <p className={styles.prod}>Disponibles: {stock}</p>
          <p className={styles.prod}>Categoria: {category}</p> 
          <Link to={`/detail/${title}`}>
            <img className={styles.imgRem} src={img} alt="remera negra"/>
          </Link>
      </div>
  )
}

export default Item