import { createContext, useState, useCallback, useEffect } from "react";
import { baseUrl, postRequest } from "../utils/services";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
     const [user, setUser] = useState(null)
     const [registerError, setRegisterError] = useState(null)
     const [registerLoading, setRegisterLoading] = useState(false)
     const [registerInfo, setRegisterInfo] = useState({
          username: "",
          email: "",
          password: ""
     })

     const [loginError, setLoginError] = useState(null)
     const [loginLoading, setLoginLoading] = useState(false)
     const [loginInfo, setLoginInfo] = useState({
          email: "",
          password: ""
     })

     console.log("Login", loginInfo)

     useEffect(() => {
          const user = localStorage.getItem("User")
          if (user) {
               console.log(user)
               setUser(JSON.parse(user))
          }

          setUser(JSON.parse(user))
     }, [])

     const updateRegisterInfo = useCallback((info) => {
          setRegisterInfo(info)
     }, [])

     const updateLoginInfo = useCallback((info) => {
          setLoginInfo(info)
     }, [])

     const registerUser = useCallback( async (e) => {
          e.preventDefault()

          setRegisterLoading(true)
          setRegisterError(null)

          const response = await postRequest(`${baseUrl}/v1/register_new_user`, JSON.stringify(registerInfo))
          setRegisterLoading(false)
          if (response.error) {
               return setRegisterError(response)
          }
          localStorage.setItem("User", JSON.stringify(response))
          setUser(response)
     }, [registerInfo])

     const loginUser = useCallback( async (e) => {
          e.preventDefault()
          setLoginLoading(true)
          setLoginError(null)
          const response = await postRequest(`${baseUrl}/v1/signin_new_user`, JSON.stringify(loginInfo))

          setLoginLoading(false)

          if (response.error) {
               return setLoginError(response)
          }

          localStorage.setItem("User", JSON.stringify(response))
          setUser(response)
     }, [loginInfo])

     const logoutUser = useCallback(() => {
          localStorage.removeItem("User")
          setUser(null)
     }, [])

     return ( 
     <AuthContext.Provider value={{ user, registerInfo, updateRegisterInfo, registerUser, registerError, registerLoading, logoutUser, loginUser, loginError, loginInfo, updateLoginInfo, loginLoading }}>
          {children}
     </AuthContext.Provider>
     )
}