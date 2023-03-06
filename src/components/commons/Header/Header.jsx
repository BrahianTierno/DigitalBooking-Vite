import {useContext} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../../../assets/img/logo.jpg'
import styles from './/header.module.css'
import { FiAlignJustify } from "react-icons/fi";
import Avatar from '../Avatar/Avatar';
import { AuthContex } from '../../../context/AuthContex';



const Header = () => {

  //Contexto Global de Auth
  const {isLogged , setIsLogged} =  useContext(AuthContex);

  console.log(isLogged);

  const location = useLocation();
  const navigator = useNavigate();

  return (
    <div className={styles.container}>
        <section className={styles.left} >
          <Link to="/"><img className={styles.logo} src={logo} width='80px' height='60px' alt='logo' /></Link> 
            <a href='/' className={styles.title}>Sentite como en casa</a>
        </section>
        {isLogged ? ( <section  className={styles.avatarContainer}><Avatar></Avatar></section>)  : 
        (
          <section className={styles.right} >   
          {location.pathname !== "/Login" ? 
            <Link to="Login"><button className={styles.btn}>Iniciar Sesión</button></Link> : "" }     
          {location.pathname !== "/Register" ? (
           <Link to="Register"><button className={styles.btn}>Crear cuenta</button></Link>) : ""}                 
          </section>
        )
           
      }
        <a className={styles.burgerMenu}><FiAlignJustify size={50}/></a> 
    </div>
  )
}

export default Header 