import React,{useContext} from 'react'
import { ProductContex } from '../../../context/ProductContex';
import styles from './/categoryCard.module.css'

export const CategoryCard = ({id, img, name, number}) => {

  const {filterByCategoria} =  useContext(ProductContex);
  
    return (
    <section onClick={() => {filterByCategoria(id)}} className={styles.card}>
    <img className={styles.img} src={img} width='100%'  alt="categorias" />
    <div className={styles.container}>
      <h4><b>{name}</b></h4>    
    </div>
  </section>
  )
}
