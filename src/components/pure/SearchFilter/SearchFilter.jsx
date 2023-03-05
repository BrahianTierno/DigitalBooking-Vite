import React from "react";
import DatePicker from "../DatePicker/DatePicker";
import styles from ".//searchFilter.module.css";

const SearchFilter = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title} >Busca ofertas en hoteles, casas y mucho mas</h2>
      <section className={styles.mainSection}>
        <select className={styles.select}>
          <option selected>A donde vamos?</option>
          <option value={"0"}>📍Buenos Aires - AR</option>
          <option value={"1"}>📍Medellín - CO</option>
          <option value={"2"}>📍Punta Cana - PR</option>
          <option value={"3"}>📍New York - EEUU</option>
          <option value={"4"}>📍Punta del Este - UY</option>
          <option value={"5"}>📍Rio de Janeiro - BR</option>
          <option value={"6"}>📍París - FR </option>
          <option value={"7"}>📍Zúrich - SW</option>
        </select>
        <DatePicker></DatePicker>        
        <button className={styles.btn}> Buscar</button>
      </section>
    </div>
  );
};

export default SearchFilter;
