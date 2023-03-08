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

    
  


 

const data = {
   products,
   setProducts,
   description,
   selectedData
}



  return (
      <ProductContex.Provider value={data}>
        {children}
      </ProductContex.Provider>
  )
}

export default ProductContexProvider