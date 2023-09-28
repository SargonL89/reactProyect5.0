import React from 'react'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.contenedor}>
        <a href="https://google.com">Productos</a>
        <a href="https://google.com">Nosotros</a>
        <a href="https://google.com">Contacto</a>
    </nav>
  )
}

export default Navbar