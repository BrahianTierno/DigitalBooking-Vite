import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './components/container/Home/Home'
import Login from './components/pure/Froms/Login/Login'
import Register from './components/pure/Froms/Register/Registre'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import AuthContexProvider from './context/AuthContex'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthContexProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
            <Route index path='/' element={<Home></Home>} />
            <Route index path='/Home' element={<Home></Home>} />
            <Route path="/Login" element={<Login></Login>} />
            <Route path="/Register" element={<Register></Register>} />       
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthContexProvider>  
  </React.StrictMode>
)