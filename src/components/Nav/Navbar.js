import React from 'react'
import CartWidget from './CartWidget'
import styles from './nav.module.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const Navbar = (props) => {


  if (props.ifHeader) {
    return (
      <nav className={styles.contenedor}>
          <Link to='/cart'><CartWidget /></Link>
          <Button value='Sign In' variant='primary'/>
          <Button value='Logout' variant='secundary'/>
          <Link to="/category/remeras">remeras</Link>
          <Link to="/category/camisas">camisas</Link>
          <Link to="/category/gorras">gorras</Link>
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