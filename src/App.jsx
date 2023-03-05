import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/commons/Header/Header'
import CategoryContainer from './components/container/CategoryContainer/CategoryContainer'
import RecomendatioContainer from './components/container/RecomendatioContainer/RecomendatioContainer'
import SearchFilter from './components/pure/SearchFilter/SearchFilter'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import MenuMobile from './components/commons/MenuMobile/MenuMobile'
import Footer from './components/commons/Footer/Footer'



function App() {
 
  const location = useLocation;
  const navigate = useNavigate(); 

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/Home')
    }
  })

  return (
    <div className="App">
        <Header></Header>        
        <Outlet></Outlet>      
    </div>
  )
}

export default App
