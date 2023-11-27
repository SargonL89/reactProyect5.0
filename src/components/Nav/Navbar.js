import React from 'react'
import CartWidget from './CartWidget'
import styles from './nav.module.css'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

  if (props.ifHeader) {
    return (
      <nav className={styles.contHead}>
          <Link className={styles.linkNav} to="/category/remeras">Remeras</Link>
          <Link className={styles.linkNav} to="/category/jeans">Jeans</Link>
          <Link to='/cart'><CartWidget /></Link>
      </nav>
    )
  } else {
    return (
      <nav className={styles.contFoot}>
        <Link className={styles.linkNav} to='https://www.instagram.com/'>Instagram</Link>
        <Link className={styles.linkNav} to='https://twitter.com/home'>Twitter</Link>
        <Link className={styles.linkNav} to='https://www.tiktok.com/es/'>TikTok</Link>
      </nav>
    )
  }
}

export default Navbar