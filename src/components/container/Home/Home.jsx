import React from 'react'
import Footer from '../../commons/Footer/Footer'
import SearchFilter from '../../pure/SearchFilter/SearchFilter'
import CategoryContainer from '../CategoryContainer/CategoryContainer'
import RecomendatioContainer from '../RecomendatioContainer/RecomendatioContainer'

const Home = () => {
  return (
    <div>
        <SearchFilter />
        <CategoryContainer />
        <RecomendatioContainer />
    </div>
  )
}

export default Home