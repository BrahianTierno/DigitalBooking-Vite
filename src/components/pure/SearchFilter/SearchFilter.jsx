import React,{useEffect,useState} from "react";
import DatePicker from "../DatePicker/DatePicker";
import styles from ".//searchFilter.module.css";
import axios from 'axios';
import { GrLocation } from "react-icons/gr";

const SearchFilter = () => {

  const [cities, setCities] = useState([]);

  useEffect(() => {    

    axios.get("http://localhost:8080/ciudades")
    .then(function (response) {      
      setCities(response.data)     
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });    
  }, []) 

  return (
    <div className={styles.container}>
      <h2 className={styles.title} >Busca ofertas en hoteles, casas y mucho mas</h2>
      <section className={styles.mainSection}>
      <select className={styles.select}>
        <option defaultValue={true}>{" ¿A dónde vamos?"}</option>
       {cities.map((city)=>{
          return <option key={city.id} value={city.id} >{city.nombre}</option>
        })}          
        </select>       
        <DatePicker></DatePicker>        
        <button className={styles.btn}> Buscar</button>
      </section>
    </div>
  );
};

export default SearchFilter;
