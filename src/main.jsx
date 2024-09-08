import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from './components/navigation.jsx';
import { BrowserRouter } from 'react-router-dom';
import { FormData } from './DailyProjects/day3Form.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    

    <BrowserRouter>

    {/* <App/> */}
   
    <Navigation/>
    <FormData/>

    </BrowserRouter>
    
  </StrictMode>,
)
