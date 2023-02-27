import React from 'react'
import logo from '../../../assets/img/logo.jpg'
import styles from './/header.module.css'
import { FiAlignJustify } from "react-icons/fi";


const Header = () => {
  return (
    <div className={styles.container}>
        <section className={styles.left} >
            <img className={styles.logo} src={logo} width='80px' height='60px' alt='logo' />
            <p className={styles.title}>Sentite como en casa</p>
        </section>
        <section className={styles.right} >
            <button className={styles.btn}>Iniciar Sesión</button>
            <button className={styles.btn}>Crear cuenta</button>
        </section>       
        <a className={styles.burgerMenu}><FiAlignJustify size={50}/></a> 
    </div>
  )
}

export default Header 