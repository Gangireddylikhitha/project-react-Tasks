

import { useState } from "react"
import { EditLogin } from "../components/EditLogin";

export const EditForm=()=>{

  


        const[isForm,setIsForm]=useState(false)
      
      
        const formHandler=()=>{
          setIsForm(prevState => !prevState); 
        }
      




    return(
      
<div>
   

      <button onClick={formHandler} style={{ backgroundColor: "green" }}>add+</button>
 
      {
        isForm?(<EditLogin/>):""
      } 

  </div>  
 
       
    )
}