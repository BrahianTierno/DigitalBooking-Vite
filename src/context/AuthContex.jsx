import { createContext, useState } from "react";


export const AuthContex = createContext()



const AuthContexProvider = ({children}) => {

  const [userData, setUserData] = useState({name:"",lastName:"",email:"", password:""})

const [isLogged, setIsLogged] = useState(false)

const data = {
    userData,
    setUserData,
    isLogged,
    setIsLogged
}



  return (
      <AuthContex.Provider value={data}>
        {children}
      </AuthContex.Provider>
  )
}

export default AuthContexProvider
