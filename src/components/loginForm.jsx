import { useState } from "react"
import TableComponent from "./tableComponent"

export const LoginForm=()=>{


const [FormData,setFormData]=useState({
    userName:"",
    password:"",
    city:"",
    // state=""
})

const [submittedData,setSubmittedData]=useState([])

const onSubmit=(event)=>{
  event.preventDefault()
  console.log(FormData)
  setSubmittedData([...submittedData,FormData])
  setFormData({ userName: "", password: "", city: "" }); //
}

const clickHandler=(event)=>{
    const {name,value}=event.target
console.log(name,value)
    setFormData({...FormData,[name]:value})

}




    return(
        <div
        className="d-flex flex-column justify-content-center align-items-center gap-5"
        style={{
          position: "absolute",
         
          left: "50%",
          top: "55%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <form className="p-4 border rounded bg-light" onSubmit={onSubmit}
        style={{
          border:"1px solid grren",
          width:"30vw",
        }}
        >
          <div className="form-group">
            <label htmlFor="UserName">UserName:</label>
            <input
              type="text"
              className="form-control"
              id="text gap-3"
              value={FormData.userName}
              onChange={clickHandler}
              name="userName"
            />
          </div>

          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <span style={{ color: "red" }}>{Error}</span>
            <input
              type="password"
              className="form-control"
              id="pwd"
              value={FormData.password}
              onChange={clickHandler}
              name="password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="city">city:</label>
            <input
              type="text"
              className="form-control"
              id="text gap-3"
              value={FormData.city}
              onChange={clickHandler}
              name="city"
            />
          </div>

          <button type="submit" onClick={onSubmit} className="btn btn-default">
            Submit
          </button>

         
        </form>

     <div>

        <TableComponent rowData={submittedData}/>

     </div>


      </div> 
    )
}