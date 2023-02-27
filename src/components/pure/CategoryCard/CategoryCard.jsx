import React from 'react'
import styles from './/categoryCard.module.css'

export const CategoryCard = ({img, name, number}) => {
  
    return (
    <section className={styles.card}>
    <img className={styles.img} src={img} width='100%' alt="categorias" />
    <div className={styles.container}>
      <h4><b>{name}</b></h4>
      <p>{number}</p>
    </div>
  </section>
  )
}
