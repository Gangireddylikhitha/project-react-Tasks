// import { NavBar } from "../bootstrap-components/navbar"
// import SideBar from "../bootstrap-components/sidebar"
import SideBar from "../bootstrap-components/sidebar"
import "../css/day3.modules.css"
import UserIcon from "../icons/user-icon"

export const Restaurant=()=>{



  return(
    <div>

      <div className="logoBox">
          <img
           src="https://webdesigndev.com/wp-content/uploads/2021/10/1.image_.jpg"
            className="logo" width={100}/>

             
        
          <h1>Restaurant vibes</h1>
          <UserIcon/>
                

      </div>

      <div className="EntryPic">
    <div><SideBar/></div>
      
      </div>
    
    </div>
  )
}