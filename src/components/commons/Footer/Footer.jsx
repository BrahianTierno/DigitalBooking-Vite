import React from 'react'
import styles from ".//footer.module.css"
import { BsFacebook, BsLinkedin, BsTwitter,BsInstagram} from "react-icons/bs";

const Footer = () => {
  return (
    <div className={styles.container}>
        <section>
            <p>©2021 Digital Booking</p>
        </section>
        <section className={styles.logos}>
            <BsFacebook></BsFacebook>
            <BsLinkedin></BsLinkedin>
            <BsTwitter></BsTwitter>
            <BsInstagram></BsInstagram>
        </section>
    </div>
  )
}

export default Footer