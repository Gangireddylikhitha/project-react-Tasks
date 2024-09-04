import { Route, Routes } from "react-router-dom"
import { HomeScreen } from "./HomeScreen"
import { AboutScreen } from "./AboutScreen"
// import SideBar from "../bootstrap-components/sidebar"
import { Restaurant } from "../DailyProjects/day3table"



export const Navigation=()=>{
    return(

        <div>

     {/* <Restaurant/> */}
<Routes>
       <Route path="/" element={<Restaurant/>}/>
        <Route path="/home" element={<HomeScreen/>}/>
        <Route path="/about" element={<AboutScreen/>}/>
     </Routes>



       
     </div>
    )
}