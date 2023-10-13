import React from 'react'
import styles from './button.module.css'

const Button = (prop, variant) => {
  return (
    <button className={styles[variant]}>{prop.value}</button>
  )
}

export default Button 