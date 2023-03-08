import { createContext, useState, useEffect } from "react";
import axios from 'axios';


export const ProductContex = createContext()


const ProductContexProvider = ({children}) => {

//Todos los producto
const [products, setProducts] = useState([])

//Producto selecionado
const [selectedData, setSelectedData] = useState([])


useEffect(() => {

    const url = "http://localhost:8080/productos"  
    axios.get(url)
    .then(function (response) {
      setProducts(response.data)
     
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });     
  }, [])

  
  //Funcion para la descripcion
  const description = (id) =>{

    axios.get(`http://localhost:8080/productos/${id}`)
    .then(function (response) {      
      setSelectedData(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });  
   }


   const filterByCategoria = (name) => {

    let idCategoria

    switch (name) {
      case "Hoteles":
        idCategoria = 1
        break;
      case "Hostels":
        idCategoria = 2
        break;
      case "Departamentos":
        idCategoria = 3
        break;
      case "Bed & Breakfast":
        idCategoria = 4
        break;      
    }

    axios.get(`http://localhost:8080/productos?categoria=${idCategoria}`)
      .then(function (response) {
        setProducts(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  

const data = {
   products,
   setProducts,
   description,
   selectedData,
   filterByCategoria
}



  return (
      <ProductContex.Provider value={data}>
        {children}
      </ProductContex.Provider>
  )
}

export default ProductContexProvider