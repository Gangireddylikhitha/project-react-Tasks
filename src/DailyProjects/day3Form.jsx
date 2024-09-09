// import { Route, Routes } from "react-router-dom"

// import { Restaurant } from "./day5Navigation"
// import { HomeScreen } from "../components/HomeScreen"
// import { AboutScreen } from "../components/AboutScreen"
import { LoginForm } from "../components/loginForm"
import { useState } from "react"

export const FormData=()=>{

  // const[data,setData]=useState([])


        const[isForm,setIsForm]=useState(false)
      
      
        const formHandler=()=>{
          setIsForm(prevState => !prevState); 
        }
      




    return(
      
<div>
    

      <button onClick={formHandler} style={{ backgroundColor: "green" }}>add+</button>
 
      {
        isForm?(<LoginForm/>):""
      } 

  </div>  
 
       
    )
}