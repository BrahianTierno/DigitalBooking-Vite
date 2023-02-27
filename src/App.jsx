import { useState } from 'react'
import './App.css'
import Header from './components/commons/Header/Header'
import CategoryContainer from './components/container/CategoryContainer/CategoryContainer'
import RecomendatioContainer from './components/container/RecomendatioContainer/RecomendatioContainer'
import RecomendationCard from './components/pure/RecomendationCard/RecomendationCard'
import SearchFilter from './components/pure/SearchFilter/SearchFilter'


function App() {
 

  return (
    <div className="App">
        <Header></Header>
        <SearchFilter></SearchFilter>
        <CategoryContainer></CategoryContainer>        
        <RecomendatioContainer></RecomendatioContainer>
    </div>
  )
}

export default App
