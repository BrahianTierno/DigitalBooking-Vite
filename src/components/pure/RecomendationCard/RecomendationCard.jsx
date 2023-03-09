import React from 'react'
import styles from './/recomendationCard.module.css'
import { Link } from 'react-router-dom'
import { FaMapMarkerAlt  } from "react-icons/fa";
import { BiSwim , BiWifi  } from "react-icons/bi";

const RecomendationCard = ({id , img, category, title, calification, review, direction, desciption}) => {

    

  return (
    <div className={styles.card}>        
         <div  className={styles.left}> 
         <img className={styles.img} src={img[0].urlImagen} width="100%" height="100%" alt="imagen"/>    
        </div>
        <div className={styles.rigth}>
            <section className={styles.rigth} >
                <section className={styles.top}>
                    <section className={styles.topLeft} >
                        { <h6 className={styles.category}>{category.titulo}</h6> }
                         <h3 className={styles.title} >{title}</h3> 
                    </section>
                    <section  className={styles.topRigth}>
                         <p className={styles.calification}>{calification}</p> 
                         <p className={styles.review}>{review}</p> 
                    </section>                 
                </section>
                <section className={styles.middle}>
                    { <p><span><FaMapMarkerAlt fontSize={'20px'}/></span>{direction} <a href='/description' className={styles.a}>MOSTAR EN EL MAPA</a></p> }
                    <p>{desciption.slice(0, 130)} <a href='/description' className={styles.a}>mas</a></p>                    
                </section>
                    <BiSwim fontSize={'30px'}/>
                    <BiWifi fontSize={'30px'}/>
                <section>
                </section>
                <Link to={`/description/${id}`}><button className={styles.btn}>Ver mas</button></Link>
            </section>
        </div>        
    </div>
    )
}

export default RecomendationCard