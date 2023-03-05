import {useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik'
import * as Yup from 'yup'
import styles from './/login.module.css'
import { AuthContex } from '../../../../context/AuthContex';

function Login() {

    //Contexto Global de Auth
    const {userData, setIsLogged} =  useContext(AuthContex);
    console.log(userData);

    const navigator = useNavigate();

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Formato del email inválido')
            .required('Requerido'),
        password: Yup.string()
            .required('Requerido')
            .min(6, "La contraseña tiene que ser mayor a 6 caracteres")
    })

    const onSubmitLogin = values => {
       
        if (userData.email === values.email && userData.password === values.password) {
           setIsLogged(true)
            navigator('/')
        }
    }

    return (
        <main>
            <Formik
            validationSchema={validationSchema}
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
                onSubmitLogin(values)
            }}>
            {({
                values,
                errors,
                touched,
                handleChange,
                setFieldTouched,
                handleSubmit,
                isValid
            }) => (

            <div className={styles.divForm}>
                <h2 className={styles.titleLogin}>Iniciar sesión</h2>
                <form className={styles.formLogin} noValidate onSubmit={handleSubmit}>

                    <label className={styles.labelMail} htmlFor="email">Correo electrónico</label>

                    <input className={styles.inputMail} type="email" placeholder='Ingrese su email' id='email' name='email'
                        onChange={handleChange}
                        onBlur={() => setFieldTouched('email')}
                        value={values.email}
                    />
                    <p className={styles.errorEmail}>{errors.email && touched.email && errors.email}</p>

                    <label className={styles.labelPass} htmlFor="password">Contraseña</label>

                    <input className={styles.inputPass} type="password" placeholder='********' id='password' name='password'
                        onChange={handleChange}
                        onBlur={() => setFieldTouched('password')}
                        value={values.password}
                    />
                    <p className={styles.errorPass}>{errors.password && touched.password && errors.password}</p>

                    <button onSubmit={onSubmitLogin} type="submit" className={styles.btnForm} disabled={!isValid}>Ingresar</button>
                </form>
                <p className={styles.pLogin}>¿Aún no tienes cuenta?<Link to="/Registre"> Registrate</Link></p>
            </div>            
            )}
            </Formik>
        </main>
    )
}

export default Login