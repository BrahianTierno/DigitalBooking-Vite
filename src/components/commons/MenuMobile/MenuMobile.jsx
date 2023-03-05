import React from 'react'
import { BsLinkedin, BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import styles from ".//mobileMenu.module.css"

const MenuMobile = () => {
  return (
    <div className={styles.menuContainer}>
        <section className={styles.top}>
            <h3>MENÚ</h3>
        </section>
        <section>

        </section>
        <section>
            <BsFacebook></BsFacebook>
            <BsLinkedin></BsLinkedin>
            <BsLinkedin></BsLinkedin>
            <BsInstagram></BsInstagram>
        </section>
    </div>
  )
}

export default MenuMobile