import { useState } from "react"
import TableComponent from "./tableComponent"

export const EditLogin=()=>{


const [FormData,setFormData]=useState({
    userName:"",
    password:"",
    city:"",
   
})

const [submittedData,setSubmittedData]=useState([])
const [isEditing,setIsEditing]=useState(false)
const [editingIndex,setEditingIndex]=useState(null)


const onSubmit=(event)=>{
  event.preventDefault()
  console.log(FormData)


  if (isEditing) {
    
    const updatedData = [...submittedData];
    updatedData[editingIndex]=FormData  //we can access through array arr=[1,2,3]
    setSubmittedData(updatedData)
    setIsEditing(false);
    setEditingIndex(null);
   
}
else{
  setSubmittedData([...submittedData,FormData])
  setFormData({ userName: "", password: "", city: "" });

}



}

const clickHandler=(event)=>{
    const {name,value}=event.target
console.log(name,value)
    setFormData({...FormData,[name]:value})

}


const deleteHandler = (index) => {
  const newData = submittedData.filter((_, i) => i !== index);
  setSubmittedData(newData);
};

const editHandler=(index)=>{
  const editData=submittedData[index]
  setFormData(editData)
  setIsEditing(true);
  setEditingIndex(index);
 
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

        <TableComponent rowData={submittedData} deleteHandler={deleteHandler} editHandler={editHandler}/>

     </div>


      </div> 
    )
}
