import React from 'react'
import CartWidget from './CartWidget'
import styles from './nav.module.css'

const Navbar = (props) => {
  if (props.ifHeader) {
    return (
      <nav className={styles.contenedor}>
          <CartWidget />
          <a href="https://google.com">Productos</a>
          <a href="https://google.com">Nosotros</a>
          <a href="https://google.com">Contacto</a>
      </nav>
    )
  } else {
    return (
      <nav className={styles.contenedor}>
        <a href="https://google.com">Instagram</a>
        <a href="https://google.com">Twitter</a>
        <a href="https://google.com">Facebook</a>
      </nav>
    )
  }
}

export default Navbar