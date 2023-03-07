import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './components/container/Home/Home'
import Login from './components/pure/Forms/Login/Login'
import Register from './components/pure/Forms/Register/Registre'
import DescriptionContainer from './components/container/DescriptionContainer/DescriptionContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import AuthContexProvider from './context/AuthContex'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthContexProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
            <Route index path='/' element={<Home/>} />
            <Route index path='/Home' element={<Home/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Register" element={<Register/>} />  
            <Route path="/description" element={<DescriptionContainer />} />     
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthContexProvider>  
  </React.StrictMode>
)
