import React from 'react'
import styles from './/recomendatioContainer.module.css'
import data from '../../../staticData/hoteles.json'
import RecomendationCard from '../../pure/RecomendationCard/RecomendationCard'

const RecomendatioContainer = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Recomendaciones</h2>
      <section className={styles.sectionContainer}>
        {data.map((info) =>{
          return <RecomendationCard key={info.id} img={info.img} title={info.title} calification={info.number} category={info.category} desciption={info.description} direction={info.distance} review={info.review}></RecomendationCard>
        })}

      </section>
    </div>
  )
}

export default RecomendatioContainer