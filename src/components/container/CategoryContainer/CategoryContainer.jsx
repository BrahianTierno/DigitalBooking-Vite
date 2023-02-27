import  {useState,useEffect} from 'react'
import dataCategorias from '../../../staticData/categoria.json'
import { CategoryCard } from '../../pure/CategoryCard/CategoryCard'
import styles from './/categoryContainer.module.css'


const CategoryContainer = () => {    

  return (
    <div  className={styles.container} >
        <h3 className={styles.title}>Buscar por tipo de alojamiento</h3>
        <section className={styles.sectionMain}>
            {dataCategorias.map((data)=>{
                return <CategoryCard key={data.id} img={data.img} name={data.title} number={data.number}></CategoryCard>
            })}
        </section>       
    </div>
  )
}

export default CategoryContainer